import type { Profile } from "@/types/hero";

export const profile: Profile = {
  name: "정푸름",
  summary: "문제의 본질을 끝까지 파고드는 백엔드 개발자 정푸름입니다.",
  links: [
    { label: "GitHub", icon: "github", href: "https://github.com/pooreumjung" },
    { label: "Blog", icon: "blog", href: "https://pooreumjung.tistory.com/" },
    {
      label: "LinkedIn",
      icon: "linkedin",
      href: "https://www.linkedin.com/in/%ED%91%B8%EB%A6%84-%EC%A0%95-abb77a2b8/",
    },
    { label: "Email", icon: "email", href: "mailto:pooreumjung02@naver.com" },
  ],
  contacts: [
    { label: "GitHub", icon: "github", href: "https://github.com/pooreumjung" },
    { label: "Email", icon: "email", href: "mailto:pooreumjung02@naver.com" },
    {
      label: "LinkedIn",
      icon: "linkedin",
      href: "https://www.linkedin.com/in/%ED%91%B8%EB%A6%84-%EC%A0%95-abb77a2b8/",
    },
  ],
};

export const HERO_COPY = {
  title: "Backend Developer",
  mobileProjectsCta: "프로젝트 보기",
} as const;
