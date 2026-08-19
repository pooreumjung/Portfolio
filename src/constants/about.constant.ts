import type { Certification, SkillGroup } from "@/types/about";

export const ABOUT_COPY = {
  name: "Jung Poo Reum",
  role: "Backend & Infrastructure Engineer.",
  intro: [
    "안녕하세요. 백엔드와 인프라를 개발하는 정푸름입니다.",
    "아이디어를 실제 서비스로 구현하는 과정을 즐깁니다. 백엔드 아키텍처, 분산 시스템, 데이터베이스, 클라우드 인프라에 관심이 있습니다.",
    "실제 서비스를 개발하고 운영해본 경험을 바탕으로, 소프트웨어 시스템을 더 잘 설계하고 만들고 운영하는 방법을 꾸준히 고민하고 있습니다.",
  ],
  photo: "/profile.jpeg",
  photoAlt: "정푸름 프로필 사진",
  certificationsTitle: "Certifications",
  skillsTitle: "Skills",
} as const;

export const certifications: Certification[] = [
  { title: "정보처리기사", subtitle: "Engineer Information Processing", period: "2026.06" },
  { title: "TOPCIT Level 3", subtitle: "Test Of Practical Competency in ICT", period: "2026.06" },
  { title: "SQLD", subtitle: "SQL Developer", period: "2026.03" },
  { title: "ADsP", subtitle: "Advanced Data Analytics Semi-Professional", period: "2026.02" },
];

export const skillGroups: SkillGroup[] = [
  { title: "Backend", items: ["Java", "Spring Boot", "JPA", "REST API", "JUnit5"] },
  { title: "Database", items: ["MySQL", "PostgreSQL", "Redis", "Flyway"] },
  { title: "Infrastructure", items: ["Docker", "AWS", "K8s", "Argo CD", "GitHub Actions", "Nginx"] },
  { title: "Observability", items: ["Prometheus", "Grafana Cloud", "Micrometer", "Actuator"] },
];
