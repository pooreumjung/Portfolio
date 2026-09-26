import type { MoreProject } from "@/types/moreProjects";

export const MORE_PROJECTS_COPY = {
  section: { title: "More Projects", subtitle: "위 세 프로젝트 외에 서로 다른 조건에서 만든 서비스와 도구입니다." },
} as const;

// Periods follow actual development, not club cohort dates.
export const moreProjects: MoreProject[] = [
  {
    title: "좌석 배치 엔진",
    meta: "KUSITMS 34기 · 교육기획팀장",
    description:
      "네트워킹 세션마다 수작업으로 하던 48명 좌석 배치를 OR-Tools CP-SAT으로 자동화했습니다. 같은 팀 회피·재회 최소화 등 조건 6가지를 제약으로 두고 그리디·seed 10개와 비교해, 수작업 약 1시간을 5분 이내로 줄이고 세션 내 재회 0쌍을 만들었습니다. 실제 세션 3회에 사용했습니다.",
    tags: ["Python", "OR-Tools CP-SAT", "pytest", "Next.js"],
    featured: true,
  },
  {
    title: "KOMME",
    meta: "2026.07 – 08 · 백엔드 단독 개발",
    description:
      "관광·지도 API를 조합해 지역·관심사 기반 방문 코스를 생성. 외부 호출과 DB 트랜잭션을 분리하고, Apple·Google OAuth(코드 교환·JWKS 검증)와 테스트 클래스 83개로 마무리",
    tags: ["Java 21", "Spring Boot", "MySQL", "Redis", "Flyway", "Docker"],
  },
  {
    title: "Ongi (온기)",
    meta: "2026.04 – 07 · 백엔드 메인 구현",
    description:
      "IoT 어르신 복약관리 서비스. Blue-Green 배포로 인스턴스가 겹쳐도 Redis SET NX로 복약 알림 중복 발송을 막고, 커밋 후 비동기 FCM으로 발송 실패가 기록 저장을 막지 않게 함",
    tags: ["Spring Boot", "Redis", "FCM", "CodeDeploy"],
  },
  {
    title: "SSUPICK",
    meta: "2026.04 – 05 · Backend Developer",
    description:
      "축제 기간 AI 아바타 소개팅 서비스. 결제 재시도 시 외부 API 재호출을 막고, INSERT IGNORE와 조건부 atomic UPDATE로 결제·쿠폰 중복 요청을 처리",
    tags: ["Spring Boot", "MySQL", "PortOne", "Gemini", "S3"],
  },
  {
    title: "ROOME",
    meta: "2025.09 – 2026.01 · Backend Developer",
    description: "AI 인테리어 추천 서비스. 시나리오 챗봇의 대화 상태를 Redis로 관리하고, SQS로 이메일 인증 발송을 비동기화",
    tags: ["Spring Boot", "Spring AI", "Redis", "SQS", "S3"],
  },
  {
    title: "GAT",
    meta: "2025.08 – 12 · Backend Developer",
    description: "팀 매칭 서비스. Kotlin/Spring으로 인증·개인화 기능을 만들고, FastAPI로 GPT 팀 추천 API와 정기 매칭 스케줄러를 구현",
    tags: ["Kotlin", "Spring Boot", "FastAPI", "OpenAI"],
  },
  {
    title: "SSU:Keting",
    meta: "2025.03 – 06 · Backend Developer",
    description:
      "대학 축제 소개팅·티켓 서비스. PASS 본인인증으로 신뢰할 수 있는 사용자 식별 기반을 만들고, 예약·입장권·관리자 기능과 배포 자동화를 구현",
    tags: ["PASS 본인인증"],
  },
];
