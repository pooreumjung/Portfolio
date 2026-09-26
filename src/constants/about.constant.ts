import type { Certification, SkillGroup } from "@/types/about";

export const ABOUT_COPY = {
  name: "Jung Poo Reum",
  role: "Backend Developer.",
  intro: [
    "실사용자가 있는 서비스를 개발하고 운영하며, 시스템을 안정적으로 만들고 지키는 방법을 꾸준히 고민해 왔습니다.",
    "감이 아니라 측정으로 병목을 찾고 개선 효과를 수치로 확인합니다. 기능 구현에서 멈추지 않고 배포·모니터링·장애 대응까지 운영 가능한 형태로 완성합니다.",
    "혼자보다 함께할 때 더 좋은 결과를 만들 수 있다고 믿고, 팀이 반복해서 겪는 불편은 도구로 바꿔 해결합니다.",
  ],
  photo: "/profile.jpeg",
  photoAlt: "정푸름 프로필 사진",
  certificationsTitle: "Certifications",
  skillsTitle: "Skills",
} as const;

export const certifications: Certification[] = [
  { title: "TOEIC Speaking IH", subtitle: "Test of English for International Communication Speaking", period: "2026.09" },
  { title: "정보처리기사", subtitle: "Engineer Information Processing", period: "2026.06" },
  { title: "TOPCIT Level 3", subtitle: "Test Of Practical Competency in ICT", period: "2026.05" },
  { title: "SQLD", subtitle: "SQL Developer", period: "2026.03" },
  { title: "ADsP", subtitle: "Advanced Data Analytics Semi-Professional", period: "2026.03" },
];

export const skillGroups: SkillGroup[] = [
  { title: "Backend", items: ["Java", "Spring Boot", "JPA", "REST API", "JUnit5"] },
  { title: "Database", items: ["MySQL", "PostgreSQL", "Redis", "Flyway"] },
  { title: "Infrastructure", items: ["Docker", "AWS", "GitHub Actions", "Nginx"] },
  { title: "Observability", items: ["Prometheus", "Grafana Cloud", "Micrometer", "Actuator"] },
];
