# SEMOSAN BE — 기여 경험 정리

> 기준: GitHub `pooreumjung`이 작성한 PR, 2026-09-07 조회. 93건 모두 병합.

## 프로젝트에서 맡은 역할

등산 서비스 백엔드에서 초기 공통 기반부터 인증, 트래킹, 커뮤니티, 푸시, 인프라, 성능 최적화까지 넓게 담당했다. 단순 API 구현보다 **실제 동시성·대용량 데이터·운영 장애를 고려해 병목과 정합성을 개선한 경험**이 중심이다.

## 핵심 경험 1 — 트래킹 데이터 처리 성능을 측정하고 병목을 제거

### GPS 포인트 대량 저장

[PR #351](https://github.com/SEMOSAN/SEMOSAN_BE/pull/351)에서 `GenerationType.IDENTITY` 때문에 `saveAll()`이 건별 INSERT가 되는 문제를 확인하고, `JdbcTemplate.batchUpdate()`로 전환했다. PostGIS Point는 `ST_MakePoint`로 직접 바인딩하고, 세션 조회도 `findById` 대신 `existsById`로 축소했다.

로컬 벤치마크 결과는 다음과 같다.

| 입력 | 기존 JPA 저장 | JDBC batch | 개선 |
| --- | --- | --- | --- |
| 100건 | 521.11ms / 100 INSERT | 8.79ms / 1 batch | 98.3% |
| 1,000건 | 700.00ms / 1,000 INSERT | 19.11ms / 1 batch | 97.3% |
| 10,000건 | 3,189.56ms / 10,000 INSERT | 167.58ms / 1 batch | 94.7% |

### 읽기·스케줄러 병목

- [PR #335](https://github.com/SEMOSAN/SEMOSAN_BE/pull/335): 만료 세션마다 Redis GET을 호출하던 스케줄러를 MGET 1회 배치 조회로 교체했다. 빈 목록이면 Redis를 호출하지 않는 경로와 배치 파싱 테스트, 50/100/500개 기준 비교 벤치마크를 추가했다.
- [PR #336](https://github.com/SEMOSAN/SEMOSAN_BE/pull/336): 산 상세의 코스·교통·편의시설·맛집·리뷰를 5회 개별 조회하던 구조를 PostgreSQL `jsonb_agg` 기반 단일 SQL로 통합했다.
- [PR #392](https://github.com/SEMOSAN/SEMOSAN_BE/pull/392): 지도 BBox 검색을 `BETWEEN`에서 PostGIS `&& ST_MakeEnvelope`로 바꿔 기존 GIST 인덱스를 사용하게 했다. 20만 건 더미 데이터에서 Seq Scan 20.804ms → Bitmap Index Scan 1.121ms를 확인했다.
- [PR #395](https://github.com/SEMOSAN/SEMOSAN_BE/pull/395): 산 이름·주소의 `%keyword%` 검색에 `pg_trgm` GIN 인덱스를 추가했다. 3글자 이상 검색은 61.7ms → 1.5ms(약 40배)였고, 2글자는 planner가 Seq Scan을 선택하는 특성까지 검증했다.

**면접용 한 문장:** GPS 위치 데이터 저장을 JDBC batch로 전환하고 실제 100~10,000건 벤치마크로 최대 98%대 처리시간 개선을 확인했습니다.

## 핵심 경험 2 — 동시성 문제를 DB·Redis 원자성으로 해결

- [PR #347](https://github.com/SEMOSAN/SEMOSAN_BE/pull/347): 게시글 조회수의 in-memory 증가를 원자적 벌크 UPDATE로 바꿔 lost update를 방지했다. 영속성 컨텍스트 stale cache도 자동 clear로 처리했고, 자유/기록 게시글 모두 실제 DB 테스트를 추가했다.
- [PR #399](https://github.com/SEMOSAN/SEMOSAN_BE/pull/399): Redis rate limit의 `INCR`과 `EXPIRE` 사이에서 TTL이 유실되면 영구 429가 되는 문제를 Lua 스크립트 한 번의 실행으로 원자화했다. 한도 경계, fail-open, TTL 인자 테스트를 갱신했다.
- [PR #396](https://github.com/SEMOSAN/SEMOSAN_BE/pull/396): 관리자 로그인 실패를 기존 `admin_login_logs`의 쿼리로 집계해 15분 내 10회 이상이면 429를 반환하도록 했다. 새 저장소나 스케줄러 없이 성공 이후 자동 초기화·시간 경과 후 자동 해제가 되게 설계했다.
- [PR #179](https://github.com/SEMOSAN/SEMOSAN_BE/pull/179), [#247](https://github.com/SEMOSAN/SEMOSAN_BE/pull/247): 여러 좋아요 서비스의 중복 생성 충돌 처리를 공통화하고 산 좋아요 API를 멱등적 토글 흐름으로 통일했다.
- [PR #349](https://github.com/SEMOSAN/SEMOSAN_BE/pull/349), [#346](https://github.com/SEMOSAN/SEMOSAN_BE/pull/346), [#376](https://github.com/SEMOSAN/SEMOSAN_BE/pull/376): 트래킹 마일스톤 중복 알림, FCM 토큰 동시 등록, 좋아요 취소 낙관적 락 충돌을 각각 수정했다.

**면접용 한 문장:** 애플리케이션 레벨 재시도에 의존하지 않고, 벌크 UPDATE·DB 제약·Redis Lua처럼 정합성을 보장하는 저장소 레벨 연산으로 경쟁 상태를 해결했습니다.

## 핵심 경험 3 — 도메인 기능을 설계하고 운영 가능한 형태로 완성

### 인증·계정

- [PR #2](https://github.com/SEMOSAN/SEMOSAN_BE/pull/2): BaseEntity, 표준 API 응답·상태 코드, 전역 예외 처리라는 프로젝트 공통 기반을 구축했다.
- [PR #6](https://github.com/SEMOSAN/SEMOSAN_BE/pull/6): 카카오·애플 로그인, JWT 필터, 토큰 재발급, 탈퇴, 테스트 로그인과 User 도메인을 구현했다.
- [PR #297](https://github.com/SEMOSAN/SEMOSAN_BE/pull/297): 외부 OAuth/Redis 호출을 트랜잭션 밖으로 빼 DB 커넥션 점유 시간을 줄이고, 사용자 생성·토큰 발급만 별도 빈의 하나의 트랜잭션으로 묶어 원자성을 유지했다.
- [PR #391](https://github.com/SEMOSAN/SEMOSAN_BE/pull/391), [#394](https://github.com/SEMOSAN/SEMOSAN_BE/pull/394): 탈퇴 시 타 도메인 데이터 정리를 `BEFORE_COMMIT` 이벤트 리스너로 분리하고 flush 전에 변경이 유실되는 문제를 수정했다.
- [PR #412](https://github.com/SEMOSAN/SEMOSAN_BE/pull/412): 운영 DB `gender_enum`에 `NONE` 값을 추가하는 Flyway migration으로 온보딩 API의 `DataIntegrityViolationException`을 수정했다.

### 트래킹·추천

- [PR #33](https://github.com/SEMOSAN/SEMOSAN_BE/pull/33): 개인 등산 기록 요약, 방문 산 목록, 기록 목록 API와 집계 native query·인덱스를 구현했다.
- [PR #99](https://github.com/SEMOSAN/SEMOSAN_BE/pull/99): 라이브 액티비티용 코스 좌표·거리·예상 시간 API를 구현하고, 유저별 활성 트래킹 세션은 partial unique index로 중복 생성을 막았다.
- [PR #105](https://github.com/SEMOSAN/SEMOSAN_BE/pull/105): 온보딩 값에서 체력 레벨을 계산하고 코스를 점수화해 사용자별 산 3개를 추천하도록 재설계했다.
- [PR #358](https://github.com/SEMOSAN/SEMOSAN_BE/pull/358): moving average·haversine 기반 경사 구간 계산 결과를 Redis에 캐싱해 반복 계산을 없앴다.

### 커뮤니티·푸시

- [PR #125](https://github.com/SEMOSAN/SEMOSAN_BE/pull/125): 게시글 신고·작성자 차단을 구현했다. 자기 신고/차단 및 중복 신고를 막고, 목록·검색·상세·댓글에서 차단 사용자를 일관되게 숨기거나 마스킹했다.
- [PR #128](https://github.com/SEMOSAN/SEMOSAN_BE/pull/128): 댓글·대댓글·좋아요 FCM 알림을 구현하고 본인/비활성/중복 수신자를 제외했다.
- [PR #187](https://github.com/SEMOSAN/SEMOSAN_BE/pull/187), [#185](https://github.com/SEMOSAN/SEMOSAN_BE/pull/185), [#136](https://github.com/SEMOSAN/SEMOSAN_BE/pull/136): APNs 헤더·payload·silent push 설정을 보완해 iOS/TestFlight 백그라운드 푸시 수신 문제를 해결했다.
- [PR #363](https://github.com/SEMOSAN/SEMOSAN_BE/pull/363): FCM 발송을 500개 단위 `sendEachForMulticast`로 전환하고, SDK 구현을 확인해 “HTTP 호출 수 감소”가 아니라 병렬 처리에 따른 전체 지연 감소라는 근거를 명확히 했다.

## 핵심 경험 4 — 운영·품질 기반 만들기

- [PR #48](https://github.com/SEMOSAN/SEMOSAN_BE/pull/48): Flyway를 도입하고 Hibernate 자동 DDL 변경을 `validate`로 전환해 스키마 변경을 migration으로 통제했다.
- [PR #70](https://github.com/SEMOSAN/SEMOSAN_BE/pull/70), [#379](https://github.com/SEMOSAN/SEMOSAN_BE/pull/379): 5xx Discord 알림과 Grafana 로그 딥링크를 구성했다. 알림 전송은 전용 executor와 `DiscardPolicy`로 요청 스레드 영향을 제한했다.
- [PR #238](https://github.com/SEMOSAN/SEMOSAN_BE/pull/238): Kubernetes NetworkPolicy로 Actuator 관리 포트를 monitoring namespace에서만 접근하게 했다.
- [PR #307](https://github.com/SEMOSAN/SEMOSAN_BE/pull/307), [#303](https://github.com/SEMOSAN/SEMOSAN_BE/pull/303), [#305](https://github.com/SEMOSAN/SEMOSAN_BE/pull/305): PostGIS·Redis·MinIO 서비스 컨테이너를 포함한 PR 테스트 CI와 JaCoCo XML/HTML 리포트, 90% coverage gate를 도입했다.
- [PR #327](https://github.com/SEMOSAN/SEMOSAN_BE/pull/327), [#325](https://github.com/SEMOSAN/SEMOSAN_BE/pull/325): ArgoCD 롤아웃 실패 감지와 Discord 배포 알림을 설정했다.

## 포트폴리오에 쓸 수 있는 역량 키워드

`Spring Boot` · `Java` · `JPA/Hibernate` · `JdbcTemplate` · `PostgreSQL` · `PostGIS` · `Redis / Lua` · `Flyway` · `Kafka 없이 이벤트 기반 분리` · `FCM/APNs` · `Kubernetes / ArgoCD` · `Grafana` · `GitHub Actions` · `성능 측정` · `동시성 제어` · `도메인 설계`

## PR 근거

대표 PR은 위에 연결했고, 전체 작성 PR은 [GitHub 필터](https://github.com/SEMOSAN/SEMOSAN_BE/pulls?q=is%3Apr+author%3Apooreumjung)에서 확인할 수 있다.
