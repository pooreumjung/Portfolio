# SSU:Keting Backend — 기여 경험 정리

> 기준: GitHub `pooreumjung`이 작성한 PR 15건, 2026-09-16 조회. 프로젝트 기간은 2025-03-27 ~ 2025-06-25이다.

## 프로젝트에서 맡은 역할

대학 축제 소개팅·티켓 서비스의 백엔드에서 **본인 인증, 로그인, 예약·입장권, 공지, 관리자, 배포** 기능을 담당했다. 짧은 행사형 서비스에 필요한 핵심 사용자 흐름과 운영 기능을 순차적으로 구현했다.

## 핵심 경험 1 — 본인 인증과 로그인 흐름 구현

- [PR #4](https://github.com/SSUketing/app-backend/pull/4), [#5](https://github.com/SSUketing/app-backend/pull/5), [#6](https://github.com/SSUketing/app-backend/pull/6)에서 PASS 본인 인증 기능을 구현했다.
- [PR #7](https://github.com/SSUketing/app-backend/pull/7)에서 Swagger 로그인 문서를 보완했고, [#22](https://github.com/SSUketing/app-backend/pull/22)에서 로그인 기능을 추가했다.
- 사용자 식별이 필요한 예약·입장권 기능의 신뢰 경계를 본인 인증과 로그인으로 먼저 구축했다.

## 핵심 경험 2 — 예약·입장권·관리자 기능을 서비스 흐름으로 연결

- [PR #16](https://github.com/SSUketing/app-backend/pull/16)에서 예약 기능을, [#19](https://github.com/SSUketing/app-backend/pull/19)에서 입장권 기능을 구현했다.
- [PR #17](https://github.com/SSUketing/app-backend/pull/17)에서 공지사항 조회 API를 추가해 행사 안내를 제공했다.
- [PR #20](https://github.com/SSUketing/app-backend/pull/20)에서 관리자 기능을 구현했다.
- 2025년 5월 기준 공지, 로그인, 본인 인증, 관리자, 예약, 사용자, 입장권 API를 main 브랜치에 통합했다([PR #13](https://github.com/SSUketing/app-backend/pull/13)).

**면접용 한 문장:** 행사 서비스에서 본인 인증을 기반으로 예약·입장권·공지·관리자 기능을 연결해 사용자와 운영자 흐름을 구현했습니다.

## 핵심 경험 3 — 배포 환경과 공통 설정 정비

- [PR #11](https://github.com/SSUketing/app-backend/pull/11)에서 프로젝트 설정을 정리했다.
- [PR #21](https://github.com/SSUketing/app-backend/pull/21)에서 배포 기능을 추가했다.
- Swagger의 사용자 컨트롤러 예외 응답 설명을 보완해 API 계약을 명확히 했다([PR #14](https://github.com/SSUketing/app-backend/pull/14)).

## 사용 기술

`Spring Boot` · `Java` · `Swagger` · `PASS 본인 인증` · `예약` · `입장권` · `관리자 API` · `배포 자동화`

## PR 근거

전체 작성 PR은 [GitHub 필터](https://github.com/SSUketing/app-backend/pulls?q=is%3Apr+author%3Apooreumjung)에서 확인할 수 있다.
