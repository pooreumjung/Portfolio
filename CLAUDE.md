# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

정푸름의 백엔드 개발자 포트폴리오 사이트 (https://www.pooreum.site). Next.js 15 App Router + React 19 + TypeScript + Panda CSS + Framer Motion, pnpm, Vercel 배포. 한 페이지짜리 사이트이며 사이트 문구는 한국어다.

## Commands

```bash
pnpm install        # prepare 훅이 panda codegen을 실행해 styled-system/ 을 생성한다
pnpm dev            # http://localhost:3000
pnpm build
pnpm lint           # eslint (next/core-web-vitals + next/typescript)
npx tsc --noEmit    # 타입 체크 (별도 스크립트 없음)
pnpm panda codegen  # 토큰·recipe를 바꾼 뒤 styled-system/ 재생성
```

테스트와 포매터(prettier)는 설정돼 있지 않다. 변경 검증은 `npx tsc --noEmit`, `pnpm lint`, 그리고 브라우저 확인이다.

## Architecture

**데이터 흐름.** `src/app/page.tsx`(서버 컴포넌트)가 `src/lib/tistory.ts`로 Tistory RSS를 가져와(ISR, 1시간 재검증, 실패 시 빈 배열) `ClientHome.tsx`에 넘긴다. `ClientHome`은 클라이언트 컴포넌트로, 섹션들을 `next/dynamic`으로 불러와 순서대로 배치한다. 섹션 순서를 바꾸거나 섹션을 추가·제거하는 곳은 여기다. Writing 섹션만 서버에서 받은 데이터를 쓰고, 나머지는 전부 정적 상수다.

**섹션 하나는 다섯 파일에 걸쳐 있다.** 섹션 `X`를 고칠 때는 아래를 함께 본다.

| 위치 | 내용 |
| --- | --- |
| `src/components/sections/X.tsx` | 마크업. 내용이나 스타일 값을 직접 쓰지 않는다 |
| `src/constants/x.constant.ts` (+ 일부 `x.copy.ts`) | 화면에 나오는 모든 내용과 UI 문구 |
| `src/types/x.ts` | 상수의 타입 |
| `src/styles/styles/x.styles.ts` | Panda `css()` 클래스 (`fooStyles` 이름으로 export) |
| `src/styles/animations/x.animations.ts` | framer-motion 수치·variants |

내용만 바꾸는 작업은 대부분 `src/constants/`만 수정하면 된다. 필드를 추가하면 `src/types/`도 같이 고친다.

**스타일.** 인라인 스타일이나 CSS 파일 대신 Panda CSS를 쓴다. 디자인 토큰(색·글자 크기·브레이크포인트 `sm 520 / md 860 / lg 1120`)은 `panda.config.ts`에 있고, `styled-system/`은 codegen 산출물이라 git에 없으며 직접 수정하지 않는다. `Button`·`Card`·내비게이션은 `src/styles/recipes/`의 recipe를 쓰는데, 내비게이션 recipe는 런타임 상태로 variant가 바뀌어 `staticCss`로 전 조합을 강제 생성한다. 새 recipe가 런타임에만 정해지는 variant를 쓰면 같은 처리가 필요하다.

**경로 별칭** (`tsconfig.json`): `@/*` → `src/*`, `@sections/*`, `@ui/*`, `@layout/*`, `@hooks/*`, `@styles/*`, `@/styled-system/*` → `./styled-system/*`.

**Projects 섹션의 두 종류 카드.** 대표 프로젝트(`projects.constant.ts`)는 이미지 카드 + "자세히 보기" 모달(`ProjectModal`)이고, 나머지(`moreProjects.constant.ts`)는 `MoreProjects` 컴포넌트가 텍스트 카드로 그린다. `MoreProjects`는 독립 섹션이 아니라 `Projects` 안에서 "프로젝트 더보기" 토글로 펼쳐진다.

**About 섹션의 높이 맞춤.** 2열 그리드에서 오른쪽 칸(Education·Certifications·Skills)은 `space-between`으로 늘어나 왼쪽 칸 하단과 맞춰진다. 오른쪽 내용이 왼쪽보다 길어지면 어긋나므로, 자격증이나 Skills 태그를 추가한 뒤에는 화면에서 하단 정렬을 확인한다.

## Content rules

사이트 내용은 이력서 역할을 하므로 사실과 수치가 근거 문서와 맞아야 한다.

- 레포 루트의 `*_Experience.md`는 프로젝트별 기여 정리(PR 근거 포함)이며 사이트에 쓰는 문구·수치의 출처다. 사이트 코드에서 참조하지는 않는다.
- 근거 문서에 없는 수치·성과·기술 스택을 만들어 넣지 않는다. 팀원이 한 작업은 본인 작업처럼 쓰지 않는다 (예: KUSITMS 34기 좌석 배치 엔진은 팀원 구현이고 본인은 허브 통합만 했다).
- 프로젝트 기간은 동아리 기수 기간이 아니라 실제 개발 기간으로 적는다.
- 외부 링크(GitHub 등)는 공개 저장소인지 확인한 뒤 건다.

## Other notes

- `script.js`는 Next.js로 옮기기 전 정적 사이트의 잔재로, 현재 빌드에서 쓰이지 않는다.
- 리스트 `key`는 제목만으로 잡지 않는다. Experience에는 같은 제목(`SSU CSE Student Council`)의 항목이 두 개 있어 제목+기간을 쓴다.
