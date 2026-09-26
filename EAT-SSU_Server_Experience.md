# EAT-SSU Server — 기여 경험 정리

> 기준: GitHub `pooreumjung`이 작성한 PR, 2026-09-05 조회. 총 54건 중 52건 병합(미병합 2건 포함). 릴리스 브랜치 병합 PR은 기능 기여와 구분해 해석한다.

## 프로젝트에서 맡은 역할

식당·학식 서비스 백엔드에서 **배포 안정성, 관측성, 보안, 품질 관리와 다국어 기능**을 개선했다. 특히 운영 DB 마이그레이션을 배포 전에 검증하고, 장애 알림에서 해당 요청의 로그까지 바로 추적할 수 있도록 연결하는 운영 흐름을 만들었다.

## 핵심 경험 1 — DB 마이그레이션을 “배포 전에 실패”하게 만들기

### 문제

애플리케이션 컨테이너를 교체한 뒤 Flyway 마이그레이션 오류가 발견되면 서비스 가용성과 복구가 모두 어려워질 수 있었다. 운영 DB 변경은 한 번 실패하면 영향 범위가 크므로, 단순 CI 통과보다 실제 배포 환경에서의 검증이 필요했다.

### 실행

- [PR #443](https://github.com/EAT-SSU/Server/pull/443)에서 EC2 내부에서 실제 RDS에 Flyway를 먼저 실행하도록 CD를 바꿨다. 실패 시 `set -e`로 컨테이너 교체 이전에 배포가 멈춰 기존 서비스가 계속 동작하게 했다.
- [PR #445](https://github.com/EAT-SSU/Server/pull/445)에서 **새 migration 파일이 추가된 배포에만** RDS 덤프 → 임시 MySQL 복원 → Flyway 리허설을 수행하도록 만들었다. 읽기 부하를 줄이기 위해 `mysqldump --single-transaction --quick`을 사용하고, 단계별 타임아웃·종료 시 정리(trap)를 추가했다.
- [PR #461](https://github.com/EAT-SSU/Server/pull/461)에서 MySQL 초기화용 임시 서버가 소켓 준비 확인을 먼저 통과해 복원이 실패하던 레이스 컨디션을 발견했다. TCP 연결 확인으로 준비 조건을 바꾸고, dev/prod에 복제돼 있던 리허설 스크립트는 공통 셸 스크립트로 추출했다.

### 결과와 배운 점

- “DB 변경 검증 실패가 컨테이너 교체로 이어지지 않도록” 배포 순서를 설계했다.
- CI 러너가 RDS에 직접 접근하지 않고 기존 EC2 보안 경계를 유지했다.
- 운영 자동화도 정상 경로뿐 아니라 준비 상태, 타임아웃, 중단·정리 경로를 함께 설계해야 한다는 기준을 만들었다.

**면접용 한 문장:** 운영 DB migration은 애플리케이션 기동 시점에 맡기지 않고, 배포 전 복제 DB 리허설과 실패 차단 단계로 분리해 가용성 위험을 낮췄습니다.

## 핵심 경험 2 — 메트릭·로그·알림을 하나의 장애 대응 흐름으로 연결

### 실행

- [PR #377](https://github.com/EAT-SSU/Server/pull/377), [#379](https://github.com/EAT-SSU/Server/pull/379), [#381](https://github.com/EAT-SSU/Server/pull/381)에서 Spring Actuator를 앱 포트와 분리하고, EC2 loopback에만 바인딩해 Grafana Alloy가 수집하되 외부 접근은 막았다. 환경별 `application` 태그도 추가해 대시보드에서 dev/prod를 구분했다.
- [PR #466](https://github.com/EAT-SSU/Server/pull/466)에서 Logback 파일 롤링(일별·100MB, 3일/1GB 보관), 컨테이너 볼륨 마운트, Alloy의 Loki 수집 설정을 연결해 애플리케이션 로그를 Grafana Cloud로 보냈다. 기존 CloudWatch 경로는 유지해 전환 위험을 줄였다.
- [PR #468](https://github.com/EAT-SSU/Server/pull/468)에서 Slack 5xx 알림에 MDC의 `requestId`와 **오류 시각 기준 ±5분** Grafana Explore 딥링크를 넣었다. 클릭 시점이 늦어도 장애 구간을 잃지 않게 절대 시간 범위를 사용했고, Grafana 설정이 없으면 링크만 생략하도록 안전하게 처리했다.
- [PR #470](https://github.com/EAT-SSU/Server/pull/470)에서 4xx 비즈니스 예외를 서버 장애 알림에서 제외하고 5xx·미처리 예외만 남겨 알림 노이즈를 줄였다. 기존 404 알림 테스트를 5xx 기준으로 바꾸고, 4xx 미발송도 검증했다.
- [PR #432](https://github.com/EAT-SSU/Server/pull/432)에서 로그인 성공/실패 Micrometer 카운터를 추가해 인증 흐름도 관측 가능하게 했다.

### 결과와 배운 점

- 메트릭, 로그, 알림을 각각 설치하는 데서 끝내지 않고 **알림 → 요청 단위 로그 → 원인 확인**으로 이어지는 MTTR 단축 경로를 만들었다.
- 관측용 엔드포인트도 외부 노출하지 않는다는 보안 원칙을 적용했다.

**면접용 한 문장:** 장애 알림에 requestId 기반 Loki 링크를 붙여 “알림을 받은 사람이 로그를 찾는 시간”을 줄이는 관측성 흐름을 구축했습니다.

## 핵심 경험 3 — 운영 보안과 배포 파이프라인 개선

- [PR #472](https://github.com/EAT-SSU/Server/pull/472): dev/prod에서 외부 공개돼 있던 Swagger UI와 OpenAPI 문서에 우선순위가 높은 별도 `SecurityFilterChain`과 Basic Auth를 적용했다. local은 기존처럼 무인증을 유지하고, 계정은 환경 변수·GitHub Secret으로 주입했다.
- [PR #372](https://github.com/EAT-SSU/Server/pull/372): 인증 API 응답 body를 로그에서 제외하고, 관리자 비밀번호 필드에도 마스킹을 적용했다. 응답 마스킹·일반 API·필드 마스킹 테스트를 추가했다.
- [PR #369](https://github.com/EAT-SSU/Server/pull/369): 배포 스크립트의 전체 컨테이너 강제 삭제를 서비스 이름 기반 삭제로 바꿔 다른 컨테이너까지 중단될 위험을 제거했다. 레거시 컨테이너는 포트 기준으로 한 번 정리하고, restart 정책도 추가했다.
- [PR #366](https://github.com/EAT-SSU/Server/pull/366): GitHub Actions와 Dockerfile에서 중복되던 Gradle 빌드를 한 번으로 줄였다. JAR를 이미지에 복사하고 JRE 베이스 이미지로 바꿔 빌드 시간·이미지 표면을 줄였다.
- [PR #419](https://github.com/EAT-SSU/Server/pull/419): CI/CD 단일 job을 build와 deploy로 분리하고, 테스트 통과 산출물만 artifact로 전달해 배포하게 했다.
- [PR #458](https://github.com/EAT-SSU/Server/pull/458), [#454](https://github.com/EAT-SSU/Server/pull/454): JaCoCo 리포트 생성과 도메인 전반 테스트 보강으로 품질을 CI에서 확인할 기반을 만들었다.

## 핵심 경험 4 — 사용자 언어에 따른 응답 설계

[PR #358](https://github.com/EAT-SSU/Server/pull/358)에서 한국어·영어·일본어·베트남어 사용자 언어 설정과 조회/수정 API를 구현했다. 단과대·학과·제휴 식당 데이터에 번역 컬럼과 Flyway migration을 추가하고, 번역값이 없을 때 한국어로 fallback하도록 설계했다. 마이페이지 응답의 언어별 반환도 테스트했다.

이 작업으로 “번역 문자열을 화면에서 바꾸는 일”이 아니라, **사용자 설정·DB 스키마·도메인 응답·fallback·마이그레이션**을 함께 다뤘다.

## 구조 개선 및 기타 기여

- [PR #427](https://github.com/EAT-SSU/Server/pull/427): Swagger 명세를 ControllerDocs 인터페이스로 분리해 컨트롤러 구현과 API 문서의 관심사를 분리.
- [PR #429](https://github.com/EAT-SSU/Server/pull/429): 7개 도메인의 DTO를 request/response로 재배치하고 참조 import를 일괄 정리(108개 파일 변경). 내부 값 객체는 루트 DTO에 남겨 기계적 분류를 피했다.
- [PR #398](https://github.com/EAT-SSU/Server/pull/398), [#396](https://github.com/EAT-SSU/Server/pull/396): Flyway migration 누락·스키마 하드코딩 문제를 복구.
- [PR #390](https://github.com/EAT-SSU/Server/pull/390): nullable 평점 생성 시 NPE를 방지.
- [PR #422](https://github.com/EAT-SSU/Server/pull/422): 제휴 매장의 지도 URL 모델·응답에 추가.
- [PR #389](https://github.com/EAT-SSU/Server/pull/389): PR 생성 시 테스트를 실행하는 CI 워크플로 도입.

## 포트폴리오에 쓸 수 있는 역량 키워드

`Spring Boot` · `Java` · `GitHub Actions` · `Docker` · `AWS EC2/RDS` · `Flyway` · `MySQL` · `Grafana Cloud / Alloy / Loki` · `Micrometer / Actuator` · `Slack Webhook` · `Spring Security` · `JaCoCo` · `운영 자동화` · `관측성` · `배포 안정성`

## PR 근거

대표 PR은 위에 연결했고, 전체 작성 PR은 [GitHub 필터](https://github.com/EAT-SSU/Server/pulls?q=is%3Apr+author%3Apooreumjung)에서 확인할 수 있다. 이 문서에서는 단순 develop→main 릴리스 병합 PR을 성과로 중복 계산하지 않았다.
