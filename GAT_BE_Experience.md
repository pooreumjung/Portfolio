# GAT Backend — 기여 경험 정리

> 기준: GitHub `pooreumjung`이 작성·병합한 PR 11건 (2025-08 ~ 2025-12).

## 프로젝트에서 맡은 역할

팀 매칭 서비스 백엔드에서 **인증과 사용자 도메인의 초기 기능**, **서비스 배포 환경**, **사용자 취향 기반 AI 팀 추천 연동**을 구현했다. 별도 GAT_AI 서비스에서는 추천 로직·정기 매칭·배포를 직접 개발했다. 기능 개발 후에는 중복 인증 요청과 비밀번호 변경 같은 경계 조건을 수정하고, 홈 화면 추천 조회까지 연결했다.

## 핵심 경험 1 — JWT 기반 인증 흐름과 이메일 인증 구축

- [PR #6](https://github.com/GAT2025/GAT_BE/pull/6)에서 회원가입·로그인·로그아웃·회원탈퇴·아이디 중복 확인·비밀번호 변경을 구현했다. JWT Provider/Filter와 Spring Security 설정을 추가하고, `refresh_token`을 사용자 데이터에 저장해 Access Token(1시간)과 Refresh Token(7일) 기반 인증 흐름을 구성했다.
- 같은 PR에서 AWS RDS와 JDBC 연결을 설정하고 Swagger 기본 설정도 추가했다.
- [PR #11](https://github.com/GAT2025/GAT_BE/pull/11)에서 토큰 재발급, 이메일 인증 코드 요청·검증, 아이디 찾기를 추가했다. JWT의 식별자를 로그인 ID에서 사용자 ID로 바꿔 토큰 주체를 명확히 했다.
- [PR #38](https://github.com/GAT2025/GAT_BE/pull/38)에서 같은 이메일이 인증 코드를 재요청하는 경우를 보완했다. 이메일의 유일성을 DB에 보장하고, 기존 인증 레코드의 코드·인증 상태를 갱신하며 만료 시점도 `createdAt`이 아닌 마지막 갱신 시각으로 판단했다.
- [PR #41](https://github.com/GAT2025/GAT_BE/pull/41)에서 로그인과 비밀번호 변경에 서로 반대인 비밀번호 일치 조건을 분리해, 기존 비밀번호와 같은 값으로 변경하는 경우를 정확히 차단했다.

**면접용 한 문장:** JWT 인증부터 이메일 검증·토큰 재발급까지의 계정 생명주기를 구현하고, 재요청과 비밀번호 변경의 예외 조건을 보완해 인증 흐름의 정확성을 높였습니다.

## 핵심 경험 2 — 사용자 활동과 개인화 데이터 기능 구현

- [PR #18](https://github.com/GAT2025/GAT_BE/pull/18)에서 내/다른 사용자 프로필 조회, 프로필 수정, 마이페이지를 구현했다. 프로필 응답에 지원·스크랩·최근 본 글 수, 기술 스택, 리뷰 평점 요약을 함께 구성했다.
- 서비스 간 순환 참조를 피하기 위해 지원 수 조회는 서비스 호출 대신 Repository를 통해 처리했다.
- [PR #26](https://github.com/GAT2025/GAT_BE/pull/26)에서 팀 스크랩과 기술 스택 수준별 정렬을 추가하고, 기술 스택 입력을 최대 10개로 제한했다.
- [PR #45](https://github.com/GAT2025/GAT_BE/pull/45)에서 스크랩 취소·스크랩 목록·최근 본 팀 목록을 구현했다. 팀 상세를 본 시점은 기존 기록이면 갱신하고 없으면 생성해 최근 본 이력을 관리했다.

**면접용 한 문장:** 프로필·활동 이력·스크랩·최근 본 콘텐츠를 연결해 사용자의 개인화된 마이페이지와 탐색 경험을 구현했습니다.

## 핵심 경험 3 — 배포 자동화와 AI 팀 추천 기능 연결

- [PR #32](https://github.com/GAT2025/GAT_BE/pull/32)에서 Dockerfile, Docker Compose, GitHub Actions 배포 워크플로를 구성해 프론트엔드와 연동할 서버 배포 기반을 만들었다.
- [PR #55](https://github.com/GAT2025/GAT_BE/pull/55)에서 사용자가 선택한 카테고리를 바탕으로 팀을 추천하는 API를 구현했다. 팀 등록에는 인재상 입력을 추가하고 리뷰 카테고리 집계 로직도 수정했다.
- [PR #65](https://github.com/GAT2025/GAT_BE/pull/65)에서 홈 화면에 AI 추천 결과를 필터링해 조회하는 쿼리를 추가하고, 누락된 `team_tech_stack`의 팀 연결 데이터를 보완했다.
- [PR #67](https://github.com/GAT2025/GAT_BE/pull/67)에서 추천 요청의 `teamPreferences` 타입을 수정해 요청 데이터 형태를 정리했다.

**면접용 한 문장:** Docker와 GitHub Actions로 서비스 배포 기반을 마련하고, 사용자 선호도 기반 팀 추천을 홈 화면 조회까지 연결했습니다.

## GAT_AI 서비스 기여

GAT_AI는 `Python`·`FastAPI` 기반의 별도 AI 서비스이며, 이 저장소에서는 PR이 아닌 main 브랜치 직접 커밋으로 기여했다. `pooreumjung` 명의 커밋은 총 27건이다.

- [AI 팀 추천 기능 구현](https://github.com/GAT2025/GAT_AI/commit/3f957a4711e5a1f3d88d845908417ec61ff1414a): 사용자 선택값을 요청 DTO로 받고, GPT 클라이언트·서비스·Repository·응답 DTO를 연결해 팀 추천 API를 구현했다.
- [추천 프롬프트 추가](https://github.com/GAT2025/GAT_AI/commit/b00229dd1df6d3c18b4fac1ab4dd2889fdc8c8de), [응답 형식 정리](https://github.com/GAT2025/GAT_AI/commit/8d88fc3cf331fe49c674a9afd58998511e9c43f9), [camelCase 전환](https://github.com/GAT2025/GAT_AI/commit/9b79403e0f5baaec0a03710d5fd131c633351438), [선호도 없는 요청 허용](https://github.com/GAT2025/GAT_AI/commit/7bcea67a26fef41da9cc337df9ec8abb3dc69f30)으로 백엔드 연동에 맞춰 추천 입력·출력 계약을 다듬었다.
- [팀 매칭 스케줄러 구현](https://github.com/GAT2025/GAT_AI/commit/c0aabddef810a7b4ac15bd2de22ac3f4bb0c7555): 스케줄 작업, 사용자·팀 조회, GPT 추천 결과 저장을 연결해 정기 매칭 흐름을 만들었다. 이어 [의존성 주입 수정](https://github.com/GAT2025/GAT_AI/commit/dfb88b72c99cb77f0fecb9f212b2cce1d2dec6eb)과 [매칭 저장 로직](https://github.com/GAT2025/GAT_AI/commit/d8a5459cddb79b79d4d32c28e54720a964312426)을 보완했다.
- [AI 서비스 배포 구성](https://github.com/GAT2025/GAT_AI/commit/1ae66d4ce77200ed061fece9ca10418f873f2241): Dockerfile·Docker Compose·GitHub Actions 워크플로를 추가했다. 이후 [Dockerfile 실행 설정 수정](https://github.com/GAT2025/GAT_AI/commit/9eda3c233d5d2b100b231ec9081cad05e96e89d2)으로 재배포 환경을 조정했다.
- [OpenAI 토큰 한도 대응](https://github.com/GAT2025/GAT_AI/commit/05e3a6d65da574b1749d34e7d30367e734fb86e3): 최대 토큰 제약을 고려해 추천 가능한 팀 수를 조정했다.

**면접용 한 문장:** FastAPI 기반 AI 서비스에서 GPT 추천 API와 정기 매칭 스케줄러를 구현하고, Docker·GitHub Actions로 독립 배포 가능한 운영 기반까지 구성했습니다.

## GAT_BE 기여 PR 목록

| PR | 내용 |
| --- | --- |
| [#6](https://github.com/GAT2025/GAT_BE/pull/6) | JWT 인증, 회원 기능, RDS/JDBC, Swagger 설정 |
| [#11](https://github.com/GAT2025/GAT_BE/pull/11) | 토큰 재발급, 이메일 인증, 아이디 찾기 |
| [#18](https://github.com/GAT2025/GAT_BE/pull/18) | 사용자 프로필·마이페이지 조회/수정 |
| [#26](https://github.com/GAT2025/GAT_BE/pull/26) | 스크랩, 기술 스택 정렬·입력 제한 |
| [#32](https://github.com/GAT2025/GAT_BE/pull/32) | Docker·Compose·GitHub Actions 배포 |
| [#38](https://github.com/GAT2025/GAT_BE/pull/38) | 이메일 인증 재요청 로직 보완 |
| [#41](https://github.com/GAT2025/GAT_BE/pull/41) | 비밀번호 변경 검증 수정 |
| [#45](https://github.com/GAT2025/GAT_BE/pull/45) | 스크랩/최근 본 팀 목록·취소 |
| [#55](https://github.com/GAT2025/GAT_BE/pull/55) | AI 팀 추천 API, 인재상·리뷰 집계 |
| [#65](https://github.com/GAT2025/GAT_BE/pull/65) | 홈 AI 추천 필터링 쿼리 |
| [#67](https://github.com/GAT2025/GAT_BE/pull/67) | 추천 요청 DTO 타입 수정 |

## 포트폴리오 키워드

`Kotlin` · `Spring Boot` · `Spring Security` · `JWT` · `JPA` · `MySQL / AWS RDS` · `Python` · `FastAPI` · `OpenAI API` · `Docker` · `Docker Compose` · `GitHub Actions` · `Swagger` · `개인화 추천` · `인증·인가`

전체 작성 PR은 [GAT_BE 필터](https://github.com/GAT2025/GAT_BE/pulls?q=is%3Apr+author%3Apooreumjung)에서, GAT_AI의 직접 기여 커밋은 [GitHub 커밋 목록](https://github.com/GAT2025/GAT_AI/commits?author=pooreumjung)에서 확인할 수 있다.
