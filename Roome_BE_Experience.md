# Roome BE — 기여 경험 정리

> 기준: GitHub `pooreumjung`이 작성한 PR, 2026-09-08 조회. 총 20건 모두 병합.

## 프로젝트에서 맡은 역할

인테리어 상품·레퍼런스 탐색과 AI 추천 대화 서비스의 백엔드에서 **공통 기반, 인증, 사용자 대시보드, 레퍼런스·문의 도메인, AI 대화 상태 관리**를 담당했다. 초기 구조를 만든 뒤 기능 구현에 그치지 않고, 이메일 발송을 비동기화하고 대화 상태를 Redis에 분리해 사용 흐름을 운영 가능한 형태로 보완했다.

## 핵심 경험 1 — 이메일 인증 발송을 요청 경로에서 분리

[PR #116](https://github.com/ITA-Roome/roome-be/pull/116)에서 동기식 이메일 인증 코드 발송을 SQS Standard 기반 비동기 처리로 전환했다. API 요청은 메시지를 큐에 전달하고, 별도 consumer가 발송을 처리하도록 분리했다. Redis 기반 중복 처리 방지와 큐 설정을 함께 추가해, 같은 인증 요청이 반복될 때의 중복 발송도 제어했다.

**면접용 한 문장:** 사용자 요청 처리 중 이메일 전송을 직접 수행하던 구조를 SQS consumer로 분리하고 Redis 중복 방지를 더해, 인증 발송 흐름을 비동기화했습니다.

## 핵심 경험 2 — AI 추천 시나리오 대화와 상태 유지 구현

- [PR #63](https://github.com/ITA-Roome/roome-be/pull/63): Spring AI·OpenAI 연동, 상품 추천과 인테리어 레퍼런스 추천을 위한 시나리오 대화 API, 도메인별 prompt builder를 구현했다.
- [PR #65](https://github.com/ITA-Roome/roome-be/pull/65): 대화가 요청마다 끊기지 않도록 `ChatSession` 상태를 Redis에 저장했다. 대화 처리 뒤 상태 저장을 공통 Redis 서비스로 분리했다.
- [PR #94](https://github.com/ITA-Roome/roome-be/pull/94): 챗봇 흐름을 후속 기획에 맞춰 보완했다.

이 작업으로 외부 AI 호출만 연결하는 데서 끝내지 않고, **프롬프트·추천 도메인·대화 상태**를 함께 다뤘다.

## 핵심 경험 3 — 레퍼런스와 개인화 대시보드 도메인 구현

- [PR #40](https://github.com/ITA-Roome/roome-be/pull/40): 레퍼런스 등록·목록 조회·좋아요/스크랩 흐름을 구현했다. 이미지 등록은 multipart 요청을 받아 S3 업로드와 이미지 엔티티 생성을 연결했다.
- [PR #34](https://github.com/ITA-Roome/roome-be/pull/34): 상품 좋아요·스크랩 토글, 좋아요/스크랩/최근 본 상품 목록으로 구성된 사용자 대시보드를 구현했다. 관리자 API도 별도 컨트롤러로 정리했다.
- [PR #93](https://github.com/ITA-Roome/roome-be/pull/93): 상품·레퍼런스 목록과 상세, 사용자 좋아요·스크랩 목록 응답에 상태값을 일관되게 추가했다.
- [PR #105](https://github.com/ITA-Roome/roome-be/pull/105), [#107](https://github.com/ITA-Roome/roome-be/pull/107): 레퍼런스 등록과 사용자가 업로드한 레퍼런스 목록 조회를 보완했다.

## 핵심 경험 4 — 공통 기반·인증·문의 흐름 설계

- [PR #2](https://github.com/ITA-Roome/roome-be/pull/2): `BaseEntity`, 표준 API 응답·상태 코드, 전역 예외 처리, Swagger 설정 등 프로젝트 공통 기반을 만들었다.
- [PR #7](https://github.com/ITA-Roome/roome-be/pull/7): 이메일 인증, 회원가입·로그인·로그아웃·토큰 재발급·비밀번호 변경·온보딩 저장을 포함한 인증 흐름을 구현했다. 허용 URL을 인증/Swagger 범위로 분리해 보안 설정의 중복도 줄였다.
- [PR #45](https://github.com/ITA-Roome/roome-be/pull/45): 사용자 문의 등록·조회와 관리자 답변·검색 기능을 구현했다. QueryDSL과 `PageableExecutionUtils`로 관리자/사용자 목록의 페이징을 구성했다.
- [PR #81](https://github.com/ITA-Roome/roome-be/pull/81): 여러 도메인이 사용자 FK를 참조하는 구조를 고려해 회원 탈퇴를 soft delete로 변경하고 인증 흐름을 함께 조정했다.
- [PR #10](https://github.com/ITA-Roome/roome-be/pull/10), [#91](https://github.com/ITA-Roome/roome-be/pull/91): 이메일 unique 제약과 중복 확인 API, 닉네임 길이 검증을 추가해 가입 입력을 보완했다.

## 포트폴리오에 쓸 수 있는 역량 키워드

`Spring Boot` · `Java` · `Spring Security / JWT` · `Spring AI / OpenAI` · `Redis` · `AWS SQS` · `AWS S3` · `JPA` · `QueryDSL` · `Swagger` · `비동기 처리` · `인증` · `AI 추천 대화` · `도메인 설계`

## PR 근거

대표 PR은 위에 연결했고, 전체 작성 PR은 [GitHub 필터](https://github.com/ITA-Roome/roome-be/pulls?q=is%3Apr+author%3Apooreumjung)에서 확인할 수 있다.
