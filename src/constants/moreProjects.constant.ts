import type { MoreProject } from "@/types/moreProjects";

export const MORE_PROJECTS_COPY = {
  expandLabel: "프로젝트 더보기",
  collapseLabel: "접기",
} as const;

// Periods follow actual development, not club cohort dates.
export const moreProjects: MoreProject[] = [
  {
    title: "교육기획팀 운영 도구",
    meta: "KUSITMS 34기 · 교육기획팀장",
    description:
      "세션마다 반복하던 운영 수작업을 줄인 도구 모음. 구글폼 응답을 실시간으로 읽어 응답률·미응답자·팀별 분포를 보여 주는 대시보드 6종과 운영 허브 구축, 기업 컨택 메일 자동화로 327건 발송 실패 0건. 팀원이 만든 좌석 배치 엔진을 허브에 통합",
    tags: ["Next.js", "Google Sheets CSV", "Node.js", "Nodemailer", "Vercel"],
    featured: true,
  },
  {
    title: "KOMME",
    meta: "2026.07 – 08 · 백엔드 단독 개발",
    description:
      "관광·지도 API를 조합한 지역·관심사 기반 방문 코스 생성. 외부 호출과 DB 트랜잭션 분리, Apple·Google OAuth(코드 교환·JWKS 검증) 구현, 테스트 클래스 83개 작성",
    tags: ["Spring Boot", "MySQL", "Redis", "Flyway"],
    links: [{ label: "GitHub", href: "https://github.com/ryeongkk/KOMME-BE" }],
  },
  {
    title: "Ongi (온기)",
    meta: "2026.04 – 07 · 백엔드 메인 구현",
    description:
      "IoT 어르신 복약관리 서비스. Blue-Green 배포 중 인스턴스가 겹쳐도 Redis SET NX로 복약 알림 중복 발송 방지, 커밋 후 비동기 FCM 발송으로 알림 실패와 기록 저장 분리",
    tags: ["Spring Boot", "Redis", "FCM", "CodeDeploy"],
    links: [{ label: "GitHub", href: "https://github.com/Ongi-Team/ongi-server" }],
  },
  {
    title: "SSUPICK",
    meta: "2026.04 – 05 · Backend Developer",
    description:
      "축제 기간 AI 아바타 소개팅 서비스. 결제 재시도 시 외부 API 재호출 방지, INSERT IGNORE와 조건부 atomic UPDATE로 결제·쿠폰 중복 요청 처리",
    tags: ["Spring Boot", "MySQL", "PortOne", "Gemini", "S3"],
    links: [{ label: "GitHub", href: "https://github.com/SSUpick/SSUPICK_BE" }],
  },
  {
    title: "ROOME",
    meta: "2025.09 – 2026.01 · Backend Developer",
    description: "AI 인테리어 추천 서비스. 시나리오 챗봇의 대화 상태 Redis 관리, SQS 기반 이메일 인증 발송 비동기 처리",
    tags: ["Spring Boot", "Spring AI", "Redis", "SQS", "S3"],
    links: [{ label: "GitHub", href: "https://github.com/ITA-Roome/roome-be" }],
  },
  {
    title: "GAT",
    meta: "2025.08 – 12 · Backend Developer",
    description: "팀 매칭 서비스. Kotlin/Spring 기반 인증·개인화 기능 개발, FastAPI 기반 GPT 팀 추천 API와 정기 매칭 스케줄러 구현",
    tags: ["Kotlin", "Spring Boot", "FastAPI", "OpenAI"],
    links: [{ label: "GitHub", href: "https://github.com/GAT2025/GAT_BE" }],
  },
  {
    title: "SSU:Keting",
    meta: "2025.03 – 06 · Backend Developer",
    description:
      "대학 축제 소개팅·티켓 서비스. PASS 본인인증 기반 사용자 식별, 예약·입장권·관리자 기능과 배포 자동화 구현",
    tags: ["Java", "Spring Boot", "Swagger", "PASS 본인인증"],
    links: [{ label: "GitHub", href: "https://github.com/SSUketing/app-backend" }],
  },
];
