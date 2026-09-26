# AreumDap Backend — 기여 경험 정리

> 기준: GitHub `pooreumjung`이 작성한 PR, 2026-09-05 조회. 총 25건 중 24건 병합, 1건은 병합 없이 종료.

## 프로젝트에서 맡은 역할

캐릭터 성장 서비스의 초기 백엔드에서 **프로젝트 공통 기반, 인증·온보딩, 비동기 이메일, 푸시 알림, 배포·운영**을 담당했다. 서비스 초기 단계에서 필요한 사용자 생명주기와 운영 기반을 함께 만들었다.

## 핵심 경험 1 — 인증과 사용자 생명주기 전반 구현

- [PR #2](https://github.com/AreumDap/Areumdap-backend/pull/2): Spring Boot·PostgreSQL 환경, BaseEntity, 표준 응답/예외 처리, 페이징 응답, CODEOWNERS와 이슈 템플릿을 구성해 팀 개발의 공통 토대를 만들었다.
- [PR #4](https://github.com/AreumDap/Areumdap-backend/pull/4): 이메일 가입·로그인·로그아웃·탈퇴, 이메일 인증, JWT 인증과 토큰 재발급을 구현했다. 탈퇴는 soft delete, 재발급은 RTR(Refresh Token Rotation) 방식으로 설계했다.
- [PR #6](https://github.com/AreumDap/Areumdap-backend/pull/6): 카카오·네이버 OAuth 로그인 URL/콜백과 외부 토큰·사용자 정보 조회, 신규 사용자 자동 등록, JWT 발급 흐름을 구현했다. OAuth state와 로그인 상태에는 Redis를 활용했다.
- [PR #85](https://github.com/AreumDap/Areumdap-backend/pull/85): JWT 인증 실패 시 `CustomAuthenticationEntryPoint`로 일관된 401 응답을 반환하도록 Spring Security 예외 처리를 구성했다.
- [PR #108](https://github.com/AreumDap/Areumdap-backend/pull/108): 네이버 로그인 요청을 GET query parameter에서 POST request body로 변경해 인증 입력을 URL에 노출하지 않도록 했다.
- [PR #120](https://github.com/AreumDap/Areumdap-backend/pull/120), [#126](https://github.com/AreumDap/Areumdap-backend/pull/126): 소셜 계정 복구·프로필 자동 갱신, 이메일 계정 재활성화와 탈퇴 계정 처리 등 운영 중 계정 경계 사례를 보완했다.

**면접용 한 문장:** 회원가입부터 소셜 로그인, JWT 재발급, 탈퇴·재가입 경계까지 사용자 계정 생명주기를 하나의 흐름으로 구현했습니다.

## 핵심 경험 2 — 온보딩과 비동기 이메일 발송

### 온보딩

[PR #8](https://github.com/AreumDap/Areumdap-backend/pull/8)에서 UserOnboarding 테이블과 온보딩 저장 API를 만들었다. 사용자당 온보딩 1건이라는 도메인 가정은 `user_id` unique key로 보장했고, 복수 계절 선택 값은 PostgreSQL 배열로 저장했다. 이후 캐릭터 도메인과의 FK 연결이 가능한 방향으로 모델을 열어 두었다.

### 이메일 인증 비동기화

[PR #16](https://github.com/AreumDap/Areumdap-backend/pull/16)에서 SMTP 처리 지연이 요청 스레드에 쌓이는 문제를 해결하기 위해, 인증 코드 발송을 **Redis + AWS SQS + DLQ** 구조로 전환했다.

1. 요청을 수신해 인증 정보를 저장하고 SQS 메시지를 발행한다.
2. 리스너가 메시지를 받아 Redis로 중복을 확인한 뒤 메일을 보낸다.
3. 반복 실패 메시지는 DLQ로 보내 같은 요청을 무한 재처리하지 않게 한다.

이 작업은 느린 외부 I/O를 동기 요청 경로에서 분리하고, 중복·실패를 고려한 메시지 처리 흐름을 만든 경험이다.

## 핵심 경험 3 — 운영 가능한 서비스로 만들기

- [PR #19](https://github.com/AreumDap/Areumdap-backend/pull/19): CI에서 `application-prod.yml`을 생성하도록 바꿔 운영 설정 누락 때문에 배포가 실패하는 문제를 해결했다.
- [PR #22](https://github.com/AreumDap/Areumdap-backend/pull/22): 5xx 예외를 Discord로 알려 운영자가 EC2에 SSH 접속해 로그를 찾기 전 장애를 인지하게 했다.
- [PR #38](https://github.com/AreumDap/Areumdap-backend/pull/38), [#52](https://github.com/AreumDap/Areumdap-backend/pull/52), [#144](https://github.com/AreumDap/Areumdap-backend/pull/144): 배포 로직, Blue-Green 배포 설정, main 기준 배포 브랜치 전환을 단계적으로 정비했다.
- [PR #37](https://github.com/AreumDap/Areumdap-backend/pull/37), [#116](https://github.com/AreumDap/Areumdap-backend/pull/116): User 테이블의 device_id 의존성을 제거하고 기기 등록·토큰 관리·알림 대상 선정 구조를 정리했다.

## 기타 기능·개선

- [PR #39](https://github.com/AreumDap/Areumdap-backend/pull/39): 사용자 프로필 관련 기능 구현.
- [PR #49](https://github.com/AreumDap/Areumdap-backend/pull/49): 온보딩과 캐릭터 기능을 리팩터링.
- [PR #58](https://github.com/AreumDap/Areumdap-backend/pull/58): 캐릭터 성장 이력 응답에 캐릭터 이미지 추가.
- [PR #92](https://github.com/AreumDap/Areumdap-backend/pull/92): 프로필 조회 응답에 닉네임 추가.
- [PR #134](https://github.com/AreumDap/Areumdap-backend/pull/134): 캐릭터 경험치·레벨업, 온보딩 완료, 기기 정보 갱신을 포함한 대규모 불필요 코드 정리(78개 파일 변경).
- [PR #149](https://github.com/AreumDap/Areumdap-backend/pull/149): 자동 계정 생성 및 테스트 로그인 기능 구현.

## 포트폴리오에 쓸 수 있는 역량 키워드

`Spring Boot` · `Spring Security` · `JWT / RTR` · `OAuth 2.0` · `PostgreSQL` · `Redis` · `AWS SQS / DLQ` · `비동기 처리` · `Docker / Blue-Green 배포` · `GitHub Actions` · `Discord Webhook` · `사용자 생명주기` · `운영 장애 알림`

## PR 근거

대표 PR은 위에 연결했고, 전체 작성 PR은 [GitHub 필터](https://github.com/AreumDap/Areumdap-backend/pulls?q=is%3Apr+author%3Apooreumjung)에서 확인할 수 있다.
