import type { ExperienceItem } from "@/types/experience";

export const experiences: ExperienceItem[] = [
  {
    period: "2026.01 ~ Present",
    roles: ["Server Developer"],
    title: "Team EAT-SSU",
    links: [{ label: "Server", href: "https://github.com/EAT-SSU/Server" }],
    points: [
      "숭실대학교 학식 서비스 서버 개발 및 유지보수",
      "배포 전 마이그레이션 리허설 게이트 구축, 1GB 서버 모니터링·알림 구성, CI 빌드 약 50% 단축",
    ],
  },
  {
    period: "2026.07 ~ Present",
    roles: ["교육기획팀장"],
    title: "KUSITMS 34th",
    points: [
      "정기 세션 커리큘럼 기획",
      "LG전자, 버티 등 기업 산학협력 프로젝트 기획 총괄",
      "기업 컨택 메일 발송 자동화(Node.js): 327건 발송 실패 0건, 발송 작업 약 6시간 → 약 32분",
      "구글폼 응답 대시보드 6종과 운영 허브 구축(Next.js): 응답률·미응답자·팀별 분포를 실시간 집계해 팀빌딩 3회와 투표·회고에 사용",
    ],
  },
  {
    period: "2026.04 ~ 2026.07",
    roles: ["백엔드 메인 구현 (PR 32건 중 29건)"],
    title: "영 이노베이터 드림 프로젝트 2026",
    links: [{ label: "Ongi Server", href: "https://github.com/Ongi-Team/ongi-server" }],
    points: ["Ongi 프로젝트 서버 개발 진행"],
  },
  {
    period: "2026.02 ~ 2026.06",
    roles: ["Backend Developer"],
    title: "KUSITMS 33rd",
    links: [{ label: "SEMOSAN_BE", href: "https://github.com/SEMOSAN/SEMOSAN_BE" }],
    points: ["LG전자 닷컴 개선 프로젝트 진행", "세모산 프로젝트 백엔드 개발 진행", "밋업데이 최우수상 수상"],
  },
  {
    period: "2025.09 ~ 2026.02",
    roles: ["Spring Boot Senior"],
    title: "University Makeus Challenge (UMC) 9th",
    links: [{ label: "Areumdap Backend", href: "https://github.com/AreumDap/Areumdap-backend" }],
    points: ["Spring Boot 스터디 리드", "Areumdap 프로젝트 백엔드 리드 (백엔드 5명)"],
  },
  {
    period: "2025.09 ~ 2026.01",
    roles: ["Backend Developer"],
    title: "IT's TIME 8th",
    points: ["ROOME 프로젝트 백엔드 개발 진행"],
  },
  {
    period: "2021.12 ~ 2022.11",
    roles: ["President"],
    title: "SSU CSE Student Council",
    points: ["학생회 조직 운영 및 학부 구성원 소통 총괄", "수강신청 전공 정원 부족을 데이터로 학사에 설득해 증원"],
  },
  {
    period: "2021.03 ~ 2021.11",
    roles: ["사무국원"],
    title: "SSU CSE Student Council",
    points: ["학생회 사무 및 감사 자료 관리"],
  },
];
