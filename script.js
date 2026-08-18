// Shared brand/action icons, reused by both the hero link row and the
// contact link row so each SVG only has to be written once.
const socialIcons = {
  github:
    '<svg viewBox="0 0 16 16" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/></svg>',
  blog:
    '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg>',
  linkedin:
    '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>',
  email:
    '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>',
};

const profile = {
  name: "정푸름",
  summary:
    "팀원들과 함께 성장해 나가는 백엔드 개발자 정푸름입니다.",
  links: [
    { label: "GitHub", icon: socialIcons.github, href: "https://github.com/pooreumjung", primary: true },
    { label: "Blog", icon: socialIcons.blog, href: "https://pooreumjung.tistory.com/" },
    {
      label: "LinkedIn",
      icon: socialIcons.linkedin,
      href: "https://www.linkedin.com/in/%ED%91%B8%EB%A6%84-%EC%A0%95-abb77a2b8/",
    },
    { label: "Email", icon: socialIcons.email, href: "mailto:pooreumjung02@naver.com" },
  ],
  contacts: [
    { label: "GitHub", icon: socialIcons.github, href: "https://github.com/pooreumjung", primary: true },
    { label: "Email", icon: socialIcons.email, href: "mailto:pooreumjung02@naver.com" },
    {
      label: "LinkedIn",
      icon: socialIcons.linkedin,
      href: "https://www.linkedin.com/in/%ED%91%B8%EB%A6%84-%EC%A0%95-abb77a2b8/",
    },
  ],
};

const experiences = [
  {
    period: "2026.01 ~ Present",
    roles: ["Server Developer"],
    title: "Team EAT-SSU",
    links: [{ label: "Server", href: "https://github.com/EAT-SSU/Server" }],
    points: ["숭실대학교 학식 서비스 서버 유지보수"],
  },
  {
    period: "2026.07 ~ Present",
    roles: ["Backend Developer", "교육기획팀장"],
    title: "KUSITMS 34th",
    points: [
      "LG전자, 버티 등 기업 산학협력 프로젝트 기획 총괄",
      "정기 세션 커리큘럼 기획",
    ],
  },
  {
    period: "2026.04 ~ 2026.07",
    roles: ["백엔드 개발로 참여"],
    title: "영 이노베이터 드림 프로젝트 2026",
    links: [{ label: "Ongi Server", href: "https://github.com/Ongi-Team/ongi-server" }],
    points: ["Ongi 프로젝트 서버 개발 진행"],
  },
  {
    period: "2026.02 ~ 2026.06",
    roles: ["Backend Developer"],
    title: "KUSITMS 33rd",
    links: [{ label: "SEMOSAN_BE", href: "https://github.com/SEMOSAN/SEMOSAN_BE" }],
    points: ["LG전자 닷컴 개선 프로젝트 진행", "세모산 프로젝트 백엔드 개발 진행"],
  },
  {
    period: "2025.09 ~ 2026.02",
    roles: ["Spring Boot Senior"],
    title: "University Makeus Challenge (UMC) 9th",
    links: [{ label: "Areumdap Backend", href: "https://github.com/AreumDap/Areumdap-backend" }],
    points: ["Areumdap 프로젝트 백엔드 개발 진행"],
  },
  {
    period: "2024.10 ~ 2025.05",
    roles: ["Backend Developer"],
    title: "Sigma Technology",
    points: ["Spring Boot와 NestJS를 이용한 서비스 개발"],
  },
  {
    period: "2021.12 ~ 2022.11",
    roles: ["President"],
    title: "SSU CSE Student Council",
    points: ["컴퓨터학부 학생회장으로 조직 운영 및 커뮤니케이션 담당"],
  },
];

const awards = [
  {
    title: "KUSITMS 33rd Meetup Day",
    issuer: "밋업데이 최우수상",
    period: "2026.06",
    project: "SEMOSAN",
    links: [{ label: "SEMOSAN", href: "https://github.com/SEMOSAN/SEMOSAN_BE" }],
  },
  {
    title: "UMC 9th Demoday",
    issuer: "데모데이 최우수상",
    period: "2026.02",
    project: "Areumdap",
    links: [{ label: "Areumdap", href: "https://github.com/AreumDap/Areumdap-backend" }],
  },
];

const certifications = [
  {
    title: "정보처리기사",
    subtitle: "Engineer Information Processing",
    period: "2026.06",
  },
  {
    title: "TOPCIT Level 3",
    subtitle: "Test Of Practical Competency in ICT",
    period: "2026.06",
  },
  {
    title: "SQLD",
    subtitle: "SQL Developer",
    period: "2026.03",
  },
  {
    title: "ADsP",
    subtitle: "Advanced Data Analytics Semi-Professional",
    period: "2026.02",
  },
];

const projects = [
  {
    title: "EAT-SSU Server",
    period: "Backend · Spring Boot",
    year: "2026",
    status: "운영 중",
    statusActive: true,
    description:
      "숭실대학교 학식 서비스 서버 유지보수 및 운영 안정화",
    highlight:
      "서버 이전, Prometheus/Grafana 모니터링, 로그인 성공/실패 지표, CI/CD 개선",
    image: "./assets/eat-ssu-v2.png",
    imageFit: "cover",
    links: [{ label: "GitHub", href: "https://github.com/EAT-SSU/Server" }],
    stack: [
      "Spring Boot",
      "JPA",
      "MySQL",
      "Flyway",
      "Prometheus",
      "Grafana Cloud",
      "Micrometer",
      "GitHub Actions",
    ],
    intro:
      "2022년 컴퓨터학부 팀 프로젝트에서 출발한 숭실대학교 학식 리뷰 앱으로, iOS·Android로 서비스 중입니다. 학생식당·도담식당·푸드코트·기숙사 식당 등 학내 식당 메뉴를 한눈에 비교하고 리뷰로 정보를 공유하며, 운영시간과 위치까지 확인할 수 있습니다.",
    features: [
      "날짜별 학생식당 메뉴·평점 조회",
      "메뉴 리뷰 작성 및 사진 첨부",
      "제휴 매장 할인 혜택 안내 (카카오맵·네이버지도 연동)",
      "식당 위치·영업시간 정보 제공",
    ],
    contribution: "숭실대 학식 서비스 서버 유지보수를 담당하며 운영 안정성을 책임졌습니다.",
    contributionPoints: [
      "Grafana Cloud·Prometheus 기반 모니터링 구축, 로그인 성공/실패 지표화",
      "PR 자동 테스트, 빌드/배포 job 분리 등 CI/CD 파이프라인 개선",
      "영어·일본어·베트남어 다국어(i18n) 지원 추가",
      "예외 로직 분리, Swagger 문서 분리 등 구조 리팩토링",
      "NPE, Flyway 마이그레이션 누락 등 운영 중 발생한 버그 수정",
    ],
    wrapup:
      "운영 중인 서비스에 Grafana Cloud 기반 모니터링과 로그인 성공/실패 지표를 도입하고, CI/CD 파이프라인을 개선하며 다국어(영/일/베) 지원을 추가했습니다.",
  },
  {
    title: "Areumdap",
    period: "UMC 9th · Backend",
    year: "2026",
    status: "완료",
    statusActive: false,
    description:
      "UMC 9기 백엔드 파트 리드로 참여한 질문 기반 자기이해 서비스",
    highlight:
      "백엔드 파트 리드, Blue-Green 배포 구축, UMC 데모데이 77개 팀 중 2등 수상",
    image: "./assets/areumdap.png",
    imageFit: "cover",
    links: [{ label: "GitHub", href: "https://github.com/AreumDap/Areumdap-backend" }],
    stack: [
      "Spring Boot",
      "JPA",
      "MySQL",
      "OAuth",
      "Blue-Green Deploy",
      "Docker",
      "GitHub Actions",
    ],
    intro:
      "UMC 9기 백엔드 파트 리드로 참여한 질문 기반 자기이해 서비스입니다. 질문에 답하며 스스로를 탐색하고, 그 답변이 캐릭터로 성장하는 경험을 제공합니다.",
    features: [
      "이메일·카카오·네이버 소셜 로그인 지원",
      "질문에 답하며 자신을 탐색하는 온보딩 콘텐츠",
      "답변에 따라 성장하는 캐릭터 히스토리 제공",
      "마이페이지에서 프로필·닉네임 관리",
    ],
    contribution: "UMC 9기 백엔드 파트 리드로 참여해 프로젝트 전반의 아키텍처와 개발을 이끌었습니다.",
    contributionPoints: [
      "이메일·소셜·네이버 로그인 반복 안정화 (인증 관련 PR 9건)",
      "Blue-Green 배포 파이프라인 구축, main 브랜치 배포 전환",
      "운영서버 디스코드 알림, Device Token 로직 최적화",
      "백엔드 파트 리드로 아키텍처 전반 총괄",
    ],
    wrapup:
      "Spring Boot Senior로 이메일/소셜/네이버 로그인을 반복 안정화하고 Blue-Green 배포 파이프라인을 구성했으며, UMC 데모데이 77개 팀 중 2등을 수상했습니다.",
  },
  {
    title: "SSUPICK",
    period: "SSUpick · Backend",
    year: "2026",
    status: "완료",
    statusActive: false,
    description:
      "2주 스프린트로 구축한 AI 이상형 소개팅 서비스 백엔드",
    highlight:
      "초기 세팅, 카카오 인증, 결제, AI 이미지 생성, 관리자 기능까지 단기간 구현",
    image: "./assets/ssupick.png",
    imageFit: "cover",
    links: [{ label: "GitHub", href: "https://github.com/SSUpick/SSUPICK_BE" }],
    stack: [
      "Spring Boot",
      "JPA",
      "MySQL",
      "OAuth",
      "Payment API",
      "CodeDeploy",
      "S3",
      "Grok",
      "Gemini Image",
    ],
    intro:
      "AI 캐릭터 이미지 기반 아바타 소개팅 웹 서비스입니다. 실사진 노출 없이 AI 변환 이미지로 프로필 카드를 등록·조회하는 축제 기간 MVP 서비스입니다.",
    features: [
      "카카오톡 로그인으로 간편 가입",
      "AI로 이상형 이미지 생성",
      "인앱 결제 기능",
      "마이페이지·온보딩·회원탈퇴 등 유저 관리",
    ],
    contribution: "2주 스프린트 동안 서비스 초기 뼈대를 빠르게 구축했습니다.",
    contributionPoints: [
      "초기 프로젝트 세팅 및 Blue-Green 배포 구축",
      "카카오 인증, 결제, AI 이미지 생성 API 연동 등 핵심 기능 단기간 구현",
      "관리자 기능 구현, 503 에러 등 운영 이슈 대응",
    ],
    wrapup:
      "2주라는 짧은 기간에 인증, 결제, AI 이미지 생성 기능을 포함한 서비스 초기 뼈대를 빠르게 구축했습니다.",
  },
  {
    title: "SEMOSAN",
    period: "KUSITMS 33rd · Backend",
    year: "2026",
    status: "진행 중",
    statusActive: true,
    description:
      "KUSITMS 33기 산행 서비스 백엔드 리드",
    highlight:
      "초기 아키텍처, 인증, 등산·커뮤니티 도메인, FCM/APNs 푸시, JaCoCo 품질 게이트",
    image: "./assets/semosan-v2.png",
    imageFit: "cover",
    links: [{ label: "GitHub", href: "https://github.com/SEMOSAN/SEMOSAN_BE" }],
    stack: [
      "Spring Boot",
      "JPA",
      "PostgreSQL",
      "Flyway",
      "FCM",
      "APNs",
      "JaCoCo",
      "K8s",
      "Argo CD",
      "MinIO",
      "WebSocket",
      "Redis Stream",
    ],
    intro:
      "KUSITMS 33기 산행 서비스로, 등산 코스 추천부터 등산 기록, 커뮤니티까지 아우르는 앱입니다. 초기 아키텍처 설계부터 전체 도메인 개발까지 백엔드를 리드했습니다.",
    features: [
      "레벨별 맞춤 등산 코스 추천",
      "등산 기록 및 실시간 라이브 액티비티",
      "자유게시판·세모피드 등 커뮤니티 기능",
      "게시글 신고/차단, 좋아요·이모지 반응",
      "등산 알림을 위한 FCM/APNs 푸시",
    ],
    contribution: "산행 서비스의 초기 아키텍처부터 전체 도메인 개발까지 리드했습니다.",
    contributionPoints: [
      "BaseEntity, 글로벌 응답/예외 구조, Flyway 등 초기 아키텍처 설계",
      "소셜 로그인, JWT 보안 강화 등 인증/인가 구현",
      "iOS 푸시 미수신 이슈 등 FCM/APNs 인프라 안정화",
      "JaCoCo 기반 테스트 커버리지 CI 게이트 도입",
    ],
    wrapup:
      "초기 아키텍처 설계부터 인증, 등산·커뮤니티 도메인, FCM/APNs 푸시 인프라까지 개발하고, JaCoCo 기반 테스트 커버리지 게이트를 도입해 코드 품질을 관리했습니다. KUSITMS 33기 밋업데이에서 최우수상을 수상했습니다.",
  },
  {
    title: "Ongi",
    period: "Young Innovator Dream Project 2026 · Backend",
    year: "2026",
    status: "완료",
    statusActive: false,
    description: "어르신 복약 관리를 위한 자동 디스펜서 연동 서비스 백엔드",
    highlight:
      "복약 일정, 보호자 공유, 디스펜서 연동 흐름에 맞춘 API와 예외 케이스 정리",
    image: "./assets/ongi.png",
    imageFit: "wide",
    links: [{ label: "GitHub", href: "https://github.com/Ongi-Team/ongi-server" }],
    stack: ["Spring Boot", "JPA", "MySQL", "Docker", "Mosquitto"],
    intro: "어르신 복약 관리를 위한 자동 디스펜서 연동 서비스입니다.",
    features: ["복약 일정 관리", "보호자와 복약 현황 공유", "자동 디스펜서 연동"],
    contribution:
      "영 이노베이터 드림 프로젝트 2026에 백엔드 개발로 참여해 복약 일정과 디스펜서 연동 API를 개발했습니다.",
    contributionPoints: [
      "복약 일정 관리, 보호자 공유 API 개발",
      "디스펜서 연동 흐름 설계 및 예외 케이스 정리",
    ],
  },
];

const icons = {
  external:
    '<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M6.5 2.5H2.5v11h11v-4M9.5 2.5h4v4M13.2 2.8 7 9" stroke-linecap="round" stroke-linejoin="round"/></svg>',
};

const skillGroups = [
  {
    title: "Backend",
    items: ["Java", "Spring Boot", "JPA", "REST API", "JUnit5"],
  },
  {
    title: "Database",
    items: ["MySQL", "PostgreSQL", "Redis", "Flyway"],
  },
  {
    title: "Infrastructure",
    items: ["Docker", "AWS", "K8s", "Argo CD", "GitHub Actions"],
  },
  {
    title: "Observability",
    items: ["Prometheus", "Grafana Cloud", "Micrometer", "Actuator"],
  },
];

const writings = [
  {
    date: "2026.08.14",
    category: "Back-End / 개인 공부",
    title: "[Spring Boot / 스프링 부트] - JPA 영속성 컨텍스트",
    text:
      "JPA가 엔티티를 관리하는 방식과 1차 캐시, 변경 감지, 쓰기 지연 흐름을 정리한 글",
    tags: ["Spring Boot", "JPA", "Persistence Context"],
    href: "https://pooreumjung.tistory.com/606",
  },
  {
    date: "2026.08",
    category: "Back-End / 잇슈",
    title: "[EAT-SSU / 잇슈] - RDS 다운 원인을 찾아 떠난 트러블슈팅 기록 #1",
    text:
      "운영 중인 EAT-SSU 서비스에서 발생한 RDS 중단 원인을 추적하며 정리한 트러블슈팅 기록",
    tags: ["EAT-SSU", "RDS", "Troubleshooting"],
    href: "https://pooreumjung.tistory.com/605",
  },
  {
    date: "2026.08",
    category: "Back-End / 개인 공부",
    title: "[Spring Boot / 스프링 부트] - Spring Boot의 JDBC, JdbcTemplate, JPA",
    text:
      "JDBC, JdbcTemplate, JPA가 어떤 계층 관계로 이어지는지 Spring Boot 관점에서 정리한 글",
    tags: ["Spring Boot", "JDBC", "JdbcTemplate", "JPA"],
    href: "https://pooreumjung.tistory.com/604",
  },
  {
    date: "2026.08",
    category: "Back-End / 개인 공부",
    title: "[Spring Boot / 스프링 부트] - 세모산 코드에 트랜잭션 적용해서 이해하기",
    text:
      "세모산 프로젝트 코드를 기준으로 Spring 트랜잭션이 어떻게 적용되는지 정리한 글",
    tags: ["Spring Boot", "Transaction", "SEMOSAN"],
    href: "https://pooreumjung.tistory.com/603",
  },
];

const createButton = ({ label, href, icon, primary = false }) => {
  const anchor = document.createElement("a");
  anchor.className = `button${primary ? " primary" : ""}${icon ? " icon-only" : ""}`;
  anchor.href = href;
  if (icon) {
    anchor.setAttribute("aria-label", label);
    anchor.title = label;
    anchor.innerHTML = icon;
  } else {
    anchor.textContent = label;
  }
  if (href.startsWith("http")) {
    anchor.target = "_blank";
    anchor.rel = "noreferrer";
  }
  return anchor;
};

// Renders `items` as <article> elements (each stamped with `className`
// and filled via `template(item, index)`) into the element matched by
// `selector`. Used for every "data array -> repeated card markup"
// section on the page so each one only has to describe its own markup.
const renderList = (selector, items, className, template) => {
  const container = document.querySelector(selector);
  items.forEach((item, index) => {
    const article = document.createElement("article");
    article.className = className;
    article.innerHTML = template(item, index);
    container.append(article);
  });
};

document.querySelector("#profile-summary").textContent = profile.summary;

const profileLinks = document.querySelector("#profile-links");
const contactLinks = document.querySelector("#contact-links");
profile.links.forEach((link) => profileLinks.append(createButton(link)));
profile.contacts.forEach((link) => contactLinks.append(createButton(link)));

renderList(
  "#about-certification-list",
  certifications,
  "about-certification-card",
  (certification) => `
    <div>
      <h4>${certification.title}</h4>
      <p>${certification.subtitle}</p>
    </div>
    <span>${certification.period}</span>
  `,
);

renderList(
  "#experience-list",
  experiences,
  "experience-item reveal",
  (experience) => `
    <div class="experience-body">
      <div class="experience-head">
        <h3>${experience.title}</h3>
        ${
          experience.links
            ? `<div class="experience-links">
                ${experience.links
                  .map(
                    (link) =>
                      `<a href="${link.href}" target="_blank" rel="noreferrer" aria-label="${experience.title} ${link.label} 저장소 보기">↗</a>`,
                  )
                  .join("")}
              </div>`
            : ""
        }
        <span class="experience-period">${experience.period}</span>
      </div>
      <ul>
        ${experience.roles.map((role) => `<li class="experience-role">${role}</li>`).join("")}
        ${experience.points.map((point) => `<li>${point}</li>`).join("")}
      </ul>
    </div>
  `,
);

renderList(
  "#project-list",
  projects,
  "project-card reveal",
  (project, index) => `
    ${
      project.image
        ? `<div class="project-banner project-image-banner image-${project.imageFit || "cover"}">
            <img class="project-image-main" src="${project.image}" alt="${project.title} 대표 이미지" loading="lazy" />
          </div>`
        : `<div class="project-banner tone-${(index % 5) + 1}">
            <span class="project-banner-eyebrow">${project.period}</span>
            <span class="project-banner-title">${project.title}</span>
          </div>`
    }
    <div class="project-body">
      <div class="project-meta-row">
        <span class="project-year">${project.year}</span>
        <span class="project-status${project.statusActive ? " is-active" : ""}">${project.status}</span>
      </div>
      <h3>${project.title}</h3>
      <p class="project-desc">${project.description}</p>
      ${
        project.highlight
          ? `<div class="project-highlight"><p>${project.highlight}</p></div>`
          : ""
      }
      <div class="project-tag-row">
        ${project.stack.map((tag) => `<span class="project-tag">${tag}</span>`).join("")}
      </div>
      <div class="project-footer-row">
        <span class="project-role-label">${project.period}</span>
        ${
          project.links
            ? `<div class="project-actions">
                ${project.links
                  .map(
                    (link) =>
                      `<a href="${link.href}" target="_blank" rel="noreferrer">${link.label}${icons.external}</a>`,
                  )
                  .join("")}
              </div>`
            : ""
        }
      </div>
    </div>
  `,
);

renderList(
  "#about-skill-list",
  skillGroups,
  "about-skill-card",
  (skill) => `
    <h4>${skill.title}</h4>
    <div class="about-skill-tags">
      ${skill.items.map((item) => `<span>${item}</span>`).join("")}
    </div>
  `,
);

renderList(
  "#writing-list",
  writings,
  "writing-card reveal",
  (item) => `
    <div class="writing-meta">
      <span>${item.date}</span>
      <span>${item.category}</span>
    </div>
    <a class="writing-link" href="${item.href}" target="_blank" rel="noreferrer" aria-label="${item.title} 글 보기">
      <div class="writing-content">
        <h3>${item.title}</h3>
        <p>${item.text}</p>
        <div class="writing-tags">
          ${item.tags.map((tag) => `<span>${tag}</span>`).join("")}
        </div>
      </div>
      <span class="writing-arrow" aria-hidden="true">↗</span>
    </a>
  `,
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.18 },
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

document.querySelector("#year").textContent = new Date().getFullYear();

// Project detail modal: clicking a card (but not a link inside it) opens
// an overlay with the project's full write-up, built from the same
// `projects` data used for the card itself.
const projectModalOverlay = document.querySelector("#project-modal-overlay");

const closeProjectModal = () => {
  projectModalOverlay.classList.remove("is-open");
  projectModalOverlay.setAttribute("aria-hidden", "true");
  projectModalOverlay.innerHTML = "";
  document.body.classList.remove("modal-open");
};

const openProjectModal = (project) => {
  projectModalOverlay.innerHTML = `
    <div class="project-modal" role="dialog" aria-modal="true" aria-label="${project.title}">
      <button class="project-modal-close" type="button" aria-label="닫기">✕</button>
      <div class="project-modal-scroll">
        <h3>${project.title}</h3>
        <div class="project-modal-tags">
          ${project.stack.map((tag) => `<span class="project-tag">${tag}</span>`).join("")}
        </div>
        <section class="project-modal-section">
          <h4>프로젝트 소개</h4>
          <p>${project.intro}</p>
        </section>
        <section class="project-modal-section">
          <h4>주요 기능</h4>
          <ul>${project.features.map((feature) => `<li>${feature}</li>`).join("")}</ul>
        </section>
        <section class="project-modal-section">
          <h4>나의 기여</h4>
          <p>${project.contribution}</p>
          ${
            project.contributionPoints
              ? `<ul>${project.contributionPoints.map((point) => `<li>${point}</li>`).join("")}</ul>`
              : ""
          }
        </section>
        ${
          project.wrapup
            ? `<section class="project-modal-section">
                <h4>마무리</h4>
                <p>${project.wrapup}</p>
              </section>`
            : ""
        }
        <div class="project-modal-links"></div>
      </div>
    </div>
  `;

  if (project.links) {
    const linksContainer = projectModalOverlay.querySelector(".project-modal-links");
    project.links.forEach((link) =>
      linksContainer.append(createButton({ ...link, icon: socialIcons.github })),
    );
  }

  projectModalOverlay.classList.add("is-open");
  projectModalOverlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  projectModalOverlay.querySelector(".project-modal-close").addEventListener("click", closeProjectModal);
};

projectModalOverlay.addEventListener("click", (event) => {
  if (event.target === projectModalOverlay) closeProjectModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && projectModalOverlay.classList.contains("is-open")) {
    closeProjectModal();
  }
});

document.querySelectorAll(".project-card").forEach((card, index) => {
  card.setAttribute("tabindex", "0");
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `${projects[index].title} 상세 보기`);

  const openThisModal = () => openProjectModal(projects[index]);

  card.addEventListener("click", (event) => {
    if (event.target.closest("a")) return;
    openThisModal();
  });

  card.addEventListener("keydown", (event) => {
    if (event.target.closest("a")) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openThisModal();
    }
  });
});

// Hero mouse-follow sway: the hero copy nudges toward the cursor with a
// slow eased transition (set in CSS), so it settles into place like it's
// floating on water rather than snapping straight to the pointer.
const heroSection = document.querySelector(".hero");
const heroCopy = document.querySelector(".hero-copy");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (heroSection && heroCopy && !prefersReducedMotion) {
  const maxShift = 16;

  heroSection.addEventListener("mousemove", (event) => {
    const rect = heroSection.getBoundingClientRect();
    const relX = (event.clientX - rect.left) / rect.width - 0.5;
    const relY = (event.clientY - rect.top) / rect.height - 0.5;
    heroCopy.style.setProperty("--mx", (relX * maxShift * 2).toFixed(2));
    heroCopy.style.setProperty("--my", (relY * maxShift * 2).toFixed(2));
  });

  heroSection.addEventListener("mouseleave", () => {
    heroCopy.style.setProperty("--mx", 0);
    heroCopy.style.setProperty("--my", 0);
  });
}

// Scroll progress bar: fills left-to-right as the page is scrolled,
// tracking how far through the document the reader currently is.
const scrollProgress = document.querySelector("#scroll-progress");

if (scrollProgress) {
  let ticking = false;

  const updateScrollProgress = () => {
    const scrollTop = window.scrollY;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const percent = scrollable > 0 ? (scrollTop / scrollable) * 100 : 0;
    scrollProgress.style.width = `${percent}%`;
    ticking = false;
  };

  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(updateScrollProgress);
      ticking = true;
    }
  });

  updateScrollProgress();
}
