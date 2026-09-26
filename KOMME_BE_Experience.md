# KOMME-BE — 백엔드 개발 경험 정리

> 기준: GitHub [`ryeongkk/KOMME-BE`](https://github.com/ryeongkk/KOMME-BE) `develop` 브랜치와 전체 커밋 이력, 2026-09-11 조회.  
> 기여자 `pooreumjung`의 기능·수정·테스트 커밋 208건과 병합 PR 35건을 기준으로 정리했다. 기간은 2026-07-16 ~ 2026-08-25이다.

## 프로젝트와 역할

KOMME는 사용자가 선택한 지역·관심 주제·방문일을 바탕으로 관광 스팟을 묶어 방문 코스를 제안하는 서비스의 백엔드다. Java 21, Spring Boot, Spring Security, JPA/MySQL, Redis, Flyway, Docker를 사용했다.

백엔드 전반을 맡아 다음 흐름을 구현하고 운영 가능한 형태로 정리했다.

```text
클라이언트
  ├─ 이메일·Apple·Google 로그인 / JWT 인증
  ├─ 지역·주제·인원 입력 → 관광 API·카카오 API → 스팟 저장/조회 → 동선 정렬 → 코스 저장
  └─ 예외 발생 → 구조화된 응답·서버 로그 → Discord 알림

MySQL: 사용자·OAuth 계정·관광 스팟·코스 영속화
Redis: JWT·이메일 인증 상태·외부 API Look-Aside 캐시
```

## 핵심 경험 1 — 외부 관광 데이터를 코스 생성 기능으로 연결

### 문제

관광공사 API의 위치 기반 데이터만으로는 사용자가 입력한 자연어 지역을 좌표로 바꾸거나, 관심 주제에 맞는 방문 순서를 만들 수 없었다. 또한 외부 API 호출과 DB 저장을 하나의 트랜잭션으로 묶으면 응답 지연 동안 DB 커넥션을 점유하게 된다.

### 실행

- [PR #33](https://github.com/ryeongkk/KOMME-BE/pull/33)에서 관광공사 TourAPI와 카카오 로컬 API 클라이언트를 구현했다. 서울·부산의 시군구 코드, 관광공사 카테고리, 응답 DTO를 도메인 타입으로 분리해 외부 응답 형식이 서비스 로직으로 새지 않도록 했다.
- TourAPI 목록·상세 조회에 Redis **Look-Aside 캐시**를 적용했다. 캐시 역직렬화 또는 저장이 실패해도 원본 API 호출과 응답은 계속되도록 캐시 실패를 미스로 처리했다.
- [PR #36](https://github.com/ryeongkk/KOMME-BE/pull/36)에서 위치 기반 스팟 조회 결과를 `contentId` 기준으로 저장하는 write-through upsert를 구현했다. 기존 스팟은 한 번의 `IN` 조회로 모아 N+1 조회를 피했고, 동시 요청의 unique 제약 충돌은 재조회 후 최신 값 갱신으로 흡수했다.
- [PR #40](https://github.com/ryeongkk/KOMME-BE/pull/40)에서 코스 생성 파이프라인을 완성했다.
  1. 카카오 키워드 검색으로 지역 중심 좌표를 찾고 서울·부산 여부를 검증한다.
  2. 3km → 6km → 9km 반경으로 후보를 확장 조회한다.
  3. 관광공사 대분류를 서비스 주제(`Topic`)로 매핑해 사용자가 선택한 주제만 남긴다.
  4. Haversine 거리 계산과 nearest-neighbor 방식으로 방문 순서를 정렬하고, 연속 스팟 간 거리도 저장한다.
  5. 코스와 순서·시간대·다음 스팟까지 거리를 가진 `CourseSpot`을 함께 영속화한다.
- 외부 API 호출은 `CourseGenerationService`와 `SpotService`에서 수행하고, DB 쓰기만 별도 `CoursePersister`·`SpotUpsertWriter`의 트랜잭션에서 처리했다. 느린 네트워크 호출이 DB 트랜잭션을 길게 잡지 않도록 경계를 분리한 것이다.

### 결과와 배운 점

- 지역 키워드부터 관심사 기반 후보 수집, 방문 동선, 코스 저장까지 이어지는 핵심 사용자 흐름을 구현했다.
- 외부 연관 관광지 데이터는 의미적 연관성이지 이동 거리의 근거가 아니라는 점을 구분해, 동선에는 좌표 기반 계산을 사용했다.
- 외부 데이터는 캐시와 저장소를 거치되, 캐시 장애가 기능 장애로 전파되지 않도록 설계했다.

**면접용 한 문장:** 관광·지도 API를 조합해 사용자의 지역과 관심사에서 실제 방문 순서가 있는 코스를 생성했고, 외부 호출과 DB 트랜잭션을 분리해 데이터 갱신과 응답 안정성을 함께 고려했습니다.

## 핵심 경험 2 — 이메일·소셜 로그인과 JWT 인증 흐름 구축

### 실행

- [PR #7](https://github.com/ryeongkk/KOMME-BE/pull/7)에서 이메일 인증, 회원가입·로그인, 토큰 재발급·로그아웃, 비밀번호 변경을 구현했다. 이메일 인증 상태와 인증 토큰을 Redis에서 목적별 키로 관리해 수명과 사용 목적을 분리했다.
- [PR #8](https://github.com/ryeongkk/KOMME-BE/pull/8)에서 Apple과 Google 로그인 흐름을 추가했다. JWKS 기반 공개키 조회와 identity token 검증을 공통화하고, OAuth 제공자·subject·email로 사용자를 식별해 계정 충돌을 처리했다.
- [PR #73](https://github.com/ryeongkk/KOMME-BE/pull/73)에서 Google 로그인 요청을 identity token 직접 전달 방식에서 **authorization code 교환 방식**으로 변경했다. 서버가 Google `/token` 엔드포인트에 code·client 설정·redirect URI를 전송하고, 받은 ID token의 issuer·audience·서명을 검증하도록 했다.
- Google 토큰 교환의 4xx를 잘못된 authorization code와 서버 설정 오류로 구분하고, 네트워크·5xx·빈 응답을 연결 실패로 변환했다. GIS 팝업 규격에 맞춰 redirect URI도 origin 값으로 정정했다([PR #75](https://github.com/ryeongkk/KOMME-BE/pull/75)).
- [PR #15](https://github.com/ryeongkk/KOMME-BE/pull/15)에서 비밀번호 재설정 시 이메일 존재 여부를 노출하지 않도록 처리했고, [PR #21](https://github.com/ryeongkk/KOMME-BE/pull/21), [#22](https://github.com/ryeongkk/KOMME-BE/pull/22)에서 비밀번호·닉네임 정책을 단일 정책 객체로 통일했다.
- Spring Security를 stateless JWT 방식으로 구성하고, 공개 API만 선별적으로 허용했다. 비밀번호는 BCrypt로 해시하며, CORS 허용 origin은 코드에 고정하지 않고 환경 변수에서 쉼표 구분 목록으로 읽도록 했다.

### 결과와 배운 점

- 단순 소셜 로그인 연동을 넘어서 code 교환, ID token 검증, 제공자별 계정 식별, 오류 매핑까지 서버 신뢰 경계에서 처리했다.
- 사용자 존재 여부처럼 계정 열거에 쓰일 수 있는 정보는 응답에서 감추고, 인증 규칙은 분산시키지 않고 공통 정책으로 관리했다.

**면접용 한 문장:** Apple·Google OAuth와 이메일 인증을 JWT 기반 인증 흐름에 통합하고, authorization code 교환·JWKS 검증·계정 열거 방지까지 보안 경계를 서버에서 책임지도록 구현했습니다.

## 핵심 경험 3 — 예외 알림을 운영 대응 정보로 만들기

### 문제

서버 오류는 로그에만 남으면 담당자가 오류 발생 시각, 요청 API, 사용자 맥락을 다시 찾아야 한다. 반대로 요청 헤더·토큰·비밀번호가 알림이나 로그로 노출되면 운영 편의가 보안 위험이 될 수 있다.

### 실행

- [PR #69](https://github.com/ryeongkk/KOMME-BE/pull/69)에서 전역 예외 처리와 Discord Webhook을 연결했다. `GeneralException` 중 5xx와 미처리 예외·NPE만 비동기로 알리고, 4xx 비즈니스 오류는 경고 로그로 남겨 사용자 요청 오류가 장애 알림을 채우지 않도록 했다.
- 알림에 한국 시간 기준 발생 시각, 실행 프로필, HTTP 메서드·URL, 상태 코드, IP·User-Agent·사용자 ID, 예외 메시지와 잘린 stack trace를 담아 초기 대응에 필요한 맥락을 한 메시지에 모았다.
- Discord embed와 stack trace 길이를 제한해 메시지 크기 제한을 넘지 않게 했으며, 전송은 별도 비동기 executor로 처리해 오류 응답 경로가 Webhook 네트워크 지연에 막히지 않게 했다.
- Bearer 토큰과 `authorization`, `cookie`, `token`, `secret`, `password` 형태의 값을 정규식으로 마스킹한 뒤 알림 본문과 stack trace에 사용했다.
- 알림 메시지 생성, 요청 컨텍스트 생성, 예외 처리 분기 테스트를 추가해 5xx 알림·4xx 미알림·민감값 마스킹 동작을 검증했다.

### 결과와 배운 점

- “에러가 났다”는 알림을 바로 조사할 수 있는 운영 정보로 바꿨다.
- 장애 대응 정보를 많이 싣는 것과 민감 정보를 보호하는 것은 별개가 아니라, 마스킹·길이 제한·비동기 처리까지 함께 설계해야 한다는 기준을 만들었다.

**면접용 한 문장:** 전역 예외 처리에 비동기 Discord 알림을 연결하고 요청 맥락과 stack trace를 제공하되, 토큰·비밀번호는 마스킹하고 4xx 알림은 제외해 대응성 및 신호 품질을 함께 높였습니다.

## 핵심 경험 4 — 데이터 모델 변화와 API 계약을 함께 관리

- [PR #10](https://github.com/ryeongkk/KOMME-BE/pull/10)부터 Flyway를 도입해 스키마 변경을 버전 관리했다. 최종적으로 사용자·스팟·코스·코스 스팟·저장 코스 관련 변경을 포함한 11개 migration을 관리했다.
- [PR #48](https://github.com/ryeongkk/KOMME-BE/pull/48)에서 생성된 코스와 사용자가 저장한 코스를 분리했다. 공통 `Course`에서 제목을 제거하고 `UserCourse`에 사용자별 제목·상태를 두어, 같은 생성 결과를 저장·조회·삭제하는 요구를 모델로 표현했다.
- 코스 저장 제목 길이, 삭제 순서, `UPCOMING` 조회의 오늘 날짜 경계처럼 API에서 쉽게 놓치는 상태·경계 조건을 테스트로 보완했다.
- [PR #53](https://github.com/ryeongkk/KOMME-BE/pull/53)에서 로그인 시 선택 언어를 사용자 `preferredLanguage`에 저장했고, [PR #44](https://github.com/ryeongkk/KOMME-BE/pull/44)에서 온보딩·약관 요구 변경에 맞춰 불필요해진 약관 테이블과 API를 제거했다. 요구사항 변화에 맞춰 DB, DTO, API 문서, 테스트를 함께 정리했다.
- Swagger/OpenAPI 명세를 컨트롤러 구현과 분리하고, 기능 변경마다 요청·응답 예시와 `docs/API_SPEC.md`를 갱신했다.

## 핵심 경험 5 — 배포·품질·보안 기본선 마련

- [PR #62](https://github.com/ryeongkk/KOMME-BE/pull/62)에서 Docker multi-stage build를 구성했다. 빌드 단계는 JDK, 실행 단계는 JRE Alpine 이미지를 사용해 실행 이미지에 빌드 도구를 남기지 않았고, `application-prod.yaml`과 `PORT` 환경 변수로 Render 배포 환경을 분리했다.
- 로컬 개발용 Docker Compose에 MySQL 8.4와 Redis 7.4, named volume, healthcheck, `unless-stopped` 재시작 정책을 구성했다. MySQL은 호스트 3307 포트를 사용해 로컬 기본 포트 충돌을 피했다.
- [PR #63](https://github.com/ryeongkk/KOMME-BE/pull/63), [#64](https://github.com/ryeongkk/KOMME-BE/pull/64), [#65](https://github.com/ryeongkk/KOMME-BE/pull/65), [#66](https://github.com/ryeongkk/KOMME-BE/pull/66)에서 health check, CORS, Render 환경 변수, 운영 MySQL·Redis 준비 문서를 추가해 배포에 필요한 설정을 코드 밖에서 재현 가능하게 정리했다.
- [PR #67](https://github.com/ryeongkk/KOMME-BE/pull/67)에서 로컬 설정·`.env` 추적 여부, 코드 내 secret 패턴, 운영 환경 변수, 데이터 저장소의 공개 접근을 점검하는 제출 전 보안 체크리스트를 작성했다.
- [PR #35](https://github.com/ryeongkk/KOMME-BE/pull/35)에서 GitHub Actions 테스트 workflow를 도입하고, [PR #42](https://github.com/ryeongkk/KOMME-BE/pull/42)에서 JaCoCo와 테스트를 보강했다. 최종 코드 기준 테스트 클래스는 83개이며, 인증·예외·DTO 검증·외부 API 클라이언트·스팟 upsert·코스 경계 조건을 다룬다.

## 구조 개선 및 문제 해결

- TourAPI 서비스 키에 `+` 문자가 포함될 때 URL 인코딩이 깨지는 문제를 수정하고, 외부 API 오류 로그에서 서비스 키가 반사 노출되지 않도록 차단했다([PR #55](https://github.com/ryeongkk/KOMME-BE/pull/55)).
- 도메인 제약 위반을 DB 예외 그대로 노출하지 않고 사용자·인증 도메인의 오류 상태로 변환했다. 닉네임 중복 확인, OAuth 프로필 완성, 회원 탈퇴 등 충돌 가능성이 있는 경로를 다뤘다.
- 사용자 조회·존재 확인·프로필 변경의 책임을 분리하고, 인증 서비스의 중복 토큰·예외 변환 로직을 공통화했다. 필요 이상으로 큰 추상화 대신 실제로 공유되는 정책과 저장소 단위에서만 정리했다.
- 공통 응답 형식, 예외 응답, base entity, Swagger 문서, health endpoint를 초기부터 표준화해 이후 도메인 API가 같은 계약을 따르도록 했다.

## 사용 기술

`Java 21` · `Spring Boot 4` · `Spring Security` · `JPA / MySQL 8.4` · `Redis` · `Flyway` · `JWT (JJWT)` · `OAuth 2.0 / Apple / Google` · `JWKS` · `WebClient` · `TourAPI` · `Kakao Local API` · `Docker / Docker Compose` · `GitHub Actions` · `JaCoCo` · `OpenAPI / Swagger` · `Discord Webhook`

## 포트폴리오용 요약

관광·지도 외부 API를 조합해 관심사 기반 코스 생성 기능을 구현하고, Redis 캐시·동시성 충돌 처리·트랜잭션 경계 분리로 외부 데이터 연동을 안정화했습니다. 이메일·Apple·Google OAuth 인증을 JWT 기반으로 통합했으며, authorization code 교환과 JWKS 검증을 서버에서 수행했습니다. 또한 Flyway, Docker, CI, 83개 테스트, 민감값 마스킹이 적용된 Discord 장애 알림을 갖춰 개발 기능을 배포·운영 가능한 백엔드로 정리했습니다.

## PR 근거

작성자 기준 전체 변경 이력은 [KOMME-BE 커밋](https://github.com/ryeongkk/KOMME-BE/commits/develop/?author=pooreumjung)과 [병합 PR 목록](https://github.com/ryeongkk/KOMME-BE/pulls?q=is%3Apr+is%3Aclosed+author%3Apooreumjung)에서 확인할 수 있다. 이 문서에는 병합 커밋 자체가 아니라 해당 기능을 구현한 `pooreumjung` 커밋과 PR을 근거로 기재했다.
