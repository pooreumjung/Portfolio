# Ongi Server — 기여 경험 정리

> 기준: GitHub `pooreumjung`이 작성한 PR 26건, 2026-09-16 조회. 프로젝트 기간은 2026-02-15 ~ 2026-06-01이다.

## 프로젝트에서 맡은 역할

어르신 복약 관리와 디바이스 연동 서비스에서 **초기 환경, 인증, 디바이스 등록·상태, 복약 기록, FCM 알림, 배포**를 담당했다. 하드웨어가 보내는 상태를 사용자에게 보여 주고 보호자에게 알리는 흐름에서, 중복 등록·중복 알림·발송 실패가 복약 기록 정합성을 해치지 않도록 설계했다.

## 핵심 경험 1 — 디바이스 등록과 접근 제어 구현

- [PR #23](https://github.com/Ongi-Team/ongi-server/pull/23), [#28](https://github.com/Ongi-Team/ongi-server/pull/28)에서 디바이스 등록과 관련 API를 구현하고, `DeviceAuthFilter`와 토큰 검증기로 디바이스 요청을 별도 인증 흐름으로 분리했다.
- [PR #41](https://github.com/Ongi-Team/ongi-server/pull/41)에서 serial number와 elder ID에 unique 제약을 추가해, 한 어르신에게 여러 기기가 동시 등록되는 상황을 DB 수준에서 막았다.
- 중복 등록은 409로 반환하고, 정상·중복 등록 테스트를 추가했다. [PR #46](https://github.com/Ongi-Team/ongi-server/pull/46), [#47](https://github.com/Ongi-Team/ongi-server/pull/47)에서는 디바이스 상태 조회와 오프라인 판별을 추가했다.

**면접용 한 문장:** 디바이스 인증을 사용자 인증과 분리하고 serial number·elder ID unique 제약으로 동시 등록에도 1인 1기기 규칙을 보장했습니다.

## 핵심 경험 2 — 복약 상태 이벤트와 보호자 알림을 분리

[PR #33](https://github.com/Ongi-Team/ongi-server/pull/33), [#48](https://github.com/Ongi-Team/ongi-server/pull/48)에서 디바이스가 수신한 복약 결과를 기록하고 보호자에게 전달하는 흐름을 구현했다.

1. 디바이스 상태를 받아 슬롯 상태와 복약 기록을 갱신한다.
2. `TAKEN`과 `MISSED` 결과를 포함한 통합 복약 이벤트를 발행한다.
3. 트랜잭션 커밋 뒤 비동기 이벤트 핸들러가 FCM 알림을 보낸다.

알림 발송 실패가 상태·기록 저장을 막지 않도록 분리했고, `MISSED` 기록의 중복 저장·이벤트 발행을 검증하는 테스트도 추가했다. 알림 생성에 필요한 엔티티는 fetch join으로 한 번에 읽어 불필요한 조회를 줄였다.

## 핵심 경험 3 — 스케줄 기반 복약 알림의 중복을 Redis 원자 연산으로 방지

[PR #50](https://github.com/Ongi-Team/ongi-server/pull/50)에서 매분 현재 시각의 복약 스케줄을 조회하는 알림 스케줄러를 구현했다.

- KST 기준 시각으로 대상 약을 조회하고 이벤트를 발행한다.
- Redis `SET NX`로 당일 동일 약의 발송 이력을 원자적으로 기록한다.
- Blue-Green 배포 중 인스턴스가 겹쳐도 이미 발송한 알림은 건너뛰어 중복 FCM 발송을 방지한다.
- 알림 발송은 커밋 후 비동기로 수행한다.

**면접용 한 문장:** Redis `SET NX`를 이용해 분산 배포 환경에서도 복약 알림이 하루에 한 번만 발송되도록 구현했습니다.

## 핵심 경험 4 — 보호자 홈 화면을 위한 통합 조회 API 제공

[PR #60](https://github.com/Ongi-Team/ongi-server/pull/60)에서 특정 날짜의 전체 복약 스케줄과 실제 복약 기록을 합쳐 반환하는 API를 만들었다.

- 로그인한 보호자 기준으로 어르신을 찾고, 프론트엔드가 elder ID를 전달하지 않아도 되게 했다.
- 전체 스케줄과 해당 날짜의 기록을 `medicineId`로 병합해 미복약 항목도 표시했다.
- 하루에 같은 약의 기록이 여러 건이면 가장 최근 기록을 선택했다.
- 복약 기록 존재·전체 미복약·디바이스 슬롯 없음의 테스트를 추가했다.

이후 [PR #63](https://github.com/Ongi-Team/ongi-server/pull/63)에서 디바이스 스케줄 조회를, [#64](https://github.com/Ongi-Team/ongi-server/pull/64)에서 디바이스 전용 경로의 중복 관리를 정리했다.

## 운영·기반 작업

- [PR #2](https://github.com/Ongi-Team/ongi-server/pull/2)에서 프로젝트 환경을 설정했고, [#5](https://github.com/Ongi-Team/ongi-server/pull/5), [#15](https://github.com/Ongi-Team/ongi-server/pull/15), [#32](https://github.com/Ongi-Team/ongi-server/pull/32), [#56](https://github.com/Ongi-Team/ongi-server/pull/56)에서 인증·로그인 흐름을 보완했다.
- [PR #11](https://github.com/Ongi-Team/ongi-server/pull/11)에서 Blue-Green 배포를 구성했다. JRE 이미지 전환, 컨테이너 메모리 제한, Docker 리소스 정리, Nginx HTTPS 설정, GitHub Actions·CodeDeploy 파이프라인을 포함했다.
- [PR #45](https://github.com/Ongi-Team/ongi-server/pull/45)에서 Flyway 초기 마이그레이션을 추가했고, [#54](https://github.com/Ongi-Team/ongi-server/pull/54)에서 `LocalDateTime` 직렬화 설정 누락을 수정했다.

## 사용 기술

`Java 17` · `Spring Boot` · `Spring Security` · `JWT` · `JPA` · `MySQL` · `Redis` · `Flyway` · `Firebase FCM` · `Docker` · `GitHub Actions` · `CodeDeploy` · `Nginx`

## PR 근거

전체 작성 PR은 [GitHub 필터](https://github.com/Ongi-Team/ongi-server/pulls?q=is%3Apr+author%3Apooreumjung)에서 확인할 수 있다.
