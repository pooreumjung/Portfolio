import type { WritingPost } from "@/types/writing";

export const WRITING_COPY = {
  section: { title: "Writing" },
  allPostsLabel: "블로그 전체 보기",
  allPostsHref: "https://pooreumjung.tistory.com/",
} as const;

export const writings: WritingPost[] = [
  {
    date: "2026.08.14",
    category: "Back-End / 개인 공부",
    title: "[Spring Boot / 스프링 부트] - JPA 영속성 컨텍스트",
    text: "JPA가 엔티티를 관리하는 방식과 1차 캐시, 변경 감지, 쓰기 지연 흐름을 정리한 글",
    tags: ["Spring Boot", "JPA", "Persistence Context"],
    href: "https://pooreumjung.tistory.com/606",
  },
  {
    date: "2026.08",
    category: "Back-End / 잇슈",
    title: "[EAT-SSU / 잇슈] - RDS 다운 원인을 찾아 떠난 트러블슈팅 기록 #1",
    text: "운영 중인 EAT-SSU 서비스에서 발생한 RDS 중단 원인을 추적하며 정리한 트러블슈팅 기록",
    tags: ["EAT-SSU", "RDS", "Troubleshooting"],
    href: "https://pooreumjung.tistory.com/605",
  },
  {
    date: "2026.08",
    category: "Back-End / 개인 공부",
    title: "[Spring Boot / 스프링 부트] - Spring Boot의 JDBC, JdbcTemplate, JPA",
    text: "JDBC, JdbcTemplate, JPA가 어떤 계층 관계로 이어지는지 Spring Boot 관점에서 정리한 글",
    tags: ["Spring Boot", "JDBC", "JdbcTemplate", "JPA"],
    href: "https://pooreumjung.tistory.com/604",
  },
  {
    date: "2026.08",
    category: "Back-End / 개인 공부",
    title: "[Spring Boot / 스프링 부트] - 세모산 코드에 트랜잭션 적용해서 이해하기",
    text: "세모산 프로젝트 코드를 기준으로 Spring 트랜잭션이 어떻게 적용되는지 정리한 글",
    tags: ["Spring Boot", "Transaction", "SEMOSAN"],
    href: "https://pooreumjung.tistory.com/603",
  },
];
