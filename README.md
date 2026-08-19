# Backend Portfolio

백엔드 개발자 포트폴리오. Next.js 15 + TypeScript + Panda CSS + Framer Motion 기반.

## 기술 스택

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Panda CSS** — 제로 런타임 CSS-in-JS, 토큰 기반 디자인 시스템, Recipe 시스템
- **Framer Motion** — 스크롤 리빌 애니메이션, 모달, 로딩 인트로
- **pnpm**

## 프로젝트 구조

```
src/
├── app/                 # Next.js App Router (layout, page, ClientHome)
├── components/
│   ├── layout/           # Navigation, Footer
│   ├── sections/          # Hero, About, Experience, Projects, Awards, Writing, Contact
│   └── ui/                 # 공통 컴포넌트 (Button, Card, 모달, 아이콘 등)
├── constants/            # 섹션별 데이터 (.constant.ts) + UI 카피 (.copy.ts)
├── types/                 # 섹션별 타입 정의
├── hooks/                  # useScrollAnimation, useSmoothScroll 등
├── contexts/               # LoaderContext
├── utils/                   # 아이콘 매핑
└── styles/
    ├── animations/          # 섹션별 framer-motion variants
    ├── styles/               # 섹션별 Panda css() 클래스
    └── recipes/              # Panda recipe 정의 (button, card, navigation)
```

## 수정 방법

`src/constants/*.constant.ts` 파일에서 본인 정보(경력, 프로젝트, 수상, 글 등)를 수정하세요.
섹션별로 타입은 `src/types/`, 이미지는 `public/`에 있습니다.

## 로컬 실행

```bash
pnpm install
pnpm dev
```

`http://localhost:3000` 에서 확인할 수 있습니다.

## 빌드

```bash
pnpm build
pnpm start
```

## Vercel 배포

1. GitHub에 이 저장소를 push합니다.
2. Vercel에서 `New Project`를 선택하고 이 저장소를 import합니다.
3. Framework Preset이 `Next.js`로 자동 감지됩니다 (Build Command / Output Directory 모두 기본값 사용).
4. Deploy를 누릅니다.

> 이전에 정적 사이트(빌드 없음)로 배포했던 프로젝트라면, Vercel 프로젝트 설정의
> Build & Development Settings에 남아있는 수동 오버라이드(빈 Build Command,
> Output Directory `.` 등)가 없는지 최초 배포 후 확인하세요.
