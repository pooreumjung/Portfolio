# SSUPICK BE — 기여 경험 정리

> 기준: GitHub `pooreumjung`이 작성한 PR 15건, 2026-09-16 조회. 프로젝트 기간은 2026-04-27 ~ 2026-05-11이다.

## 프로젝트에서 맡은 역할

축제 기간 아바타 소개팅 서비스의 백엔드에서 **초기 공통 기반, 카카오 인증, AI 이미지 생성, 결제, 관리자 기능, 배포 환경**을 짧은 스프린트 안에 구현했다. 기능을 빠르게 연결하는 동시에 결제 중복과 쿠폰 차감처럼 정합성이 필요한 흐름은 DB 원자 연산으로 처리했다.

## 핵심 경험 1 — 인증과 사용자 온보딩 흐름 구축

- [PR #2](https://github.com/SSUpick/SSUPICK_BE/pull/2)에서 `BaseEntity`, 표준 응답·예외 처리 구조를 구성해 이후 API의 공통 계약을 만들었다.
- [PR #6](https://github.com/SSUpick/SSUPICK_BE/pull/6)에서 카카오 OAuth 로그인, 테스트 로그인, JWT access/refresh token 발급·재발급, 로그아웃과 회원 탈퇴를 구현했다. iOS·Android 기기 유형도 인증 흐름에 포함했다.
- [PR #10](https://github.com/SSUpick/SSUPICK_BE/pull/10), [#12](https://github.com/SSUpick/SSUPICK_BE/pull/12), [#16](https://github.com/SSUpick/SSUPICK_BE/pull/16)에서 사용자 정보·온보딩·마이페이지 기능을 순차적으로 보완했다.
- [PR #22](https://github.com/SSUpick/SSUPICK_BE/pull/22)에서 인증 관련 기능을 추가하고, [#18](https://github.com/SSUpick/SSUPICK_BE/pull/18)에서 탈퇴 처리 흐름을 수정했다.

**면접용 한 문장:** 카카오 OAuth와 JWT 기반 인증을 중심으로 가입·온보딩·마이페이지·탈퇴까지 사용자 생명주기를 구현했습니다.

## 핵심 경험 2 — AI 아바타 이미지 생성과 저장 흐름 구현

[PR #14](https://github.com/SSUpick/SSUPICK_BE/pull/14)에서 S3 업로더와 Gemini 기반 AI 이미지 생성 기능을 구현했다.

1. 사용자가 이미지를 업로드하면 S3에 저장하고 생성 요청에 사용한다.
2. 생성된 AI 이미지 조회·선택 API를 제공하고, `AiImage` 엔티티로 생성 이력을 관리한다.
3. 사용자별 생성 횟수는 최대 3회로 제한하고, 로그인 응답에 이미지 생성 상태를 포함했다.

외부 AI 호출·파일 저장·사용자 프로필 상태를 한 흐름으로 연결해, 실사진 대신 AI 아바타로 프로필을 구성하는 서비스 요구를 구현했다.

## 핵심 경험 3 — 결제와 쿠폰 사용의 중복 요청을 안전하게 처리

[PR #20](https://github.com/SSUpick/SSUPICK_BE/pull/20)에서 PortOne 결제 검증과 쿠폰 충전·차감 흐름을 구현했다.

- 결제 검증 전 DB에서 동일 결제 내역을 먼저 확인해 재시도 시 외부 결제 API를 다시 호출하지 않도록 했다.
- 외부 API 호출은 트랜잭션 밖에서 수행하고, 저장과 쿠폰 충전만 짧은 트랜잭션으로 분리했다.
- `INSERT IGNORE`로 중복 결제 요청을 예외가 아닌 정상 흐름으로 처리하고, 기존 결제라면 소유자를 검증해 반환했다.
- 쿠폰 증감은 조건을 둔 atomic `UPDATE`로 처리해 잔여 쿠폰이 없는 상태에서의 차감과 동시 요청 충돌을 막았다.
- 다른 사용자 프로필을 처음 열람할 때만 쿠폰을 차감하고, 재열람은 조회 시각만 갱신하도록 분리했다.

**면접용 한 문장:** PortOne 결제 재시도와 쿠폰 차감에 대해 DB 선조회·`INSERT IGNORE`·atomic update를 조합해 중복 처리와 정합성을 보장했습니다.

## 핵심 경험 4 — 운영 가능한 배포·관리 기능 완성

- [PR #8](https://github.com/SSUpick/SSUPICK_BE/pull/8)에서 Dockerfile, GitHub Actions, CodeDeploy, `appspec.yml`, Nginx를 구성해 Blue-Green 배포 파이프라인을 만들었다.
- 운영 환경은 health check, CORS, 프로필별 서버 URL을 분리했다. 관리자 기능은 [PR #27](https://github.com/SSUpick/SSUPICK_BE/pull/27)에서 추가했다.
- 배포 뒤 AI 이미지 생성 API의 503 오류를 [PR #25](https://github.com/SSUpick/SSUPICK_BE/pull/25), [#26](https://github.com/SSUpick/SSUPICK_BE/pull/26)에서 대응했다.

## 사용 기술

`Java` · `Spring Boot` · `Spring Security` · `JWT` · `JPA / MySQL` · `Kakao OAuth` · `Gemini` · `AWS S3` · `PortOne` · `Docker` · `GitHub Actions` · `CodeDeploy` · `Nginx`

## PR 근거

전체 작성 PR은 [GitHub 필터](https://github.com/SSUpick/SSUPICK_BE/pulls?q=is%3Apr+author%3Apooreumjung)에서 확인할 수 있다.
