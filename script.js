const profile = {
  name: "정푸름",
  summary:
    "팀원들과 함께 성장해 나가는 백엔드 개발자 정푸름입니다.",
  links: [
    {
      label: "GitHub",
      icon: '<svg viewBox="0 0 16 16" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/></svg>',
      href: "https://github.com/pooreumjung",
      primary: true,
    },
    {
      label: "Blog",
      icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg>',
      href: "https://pooreumjung.tistory.com/",
    },
    {
      label: "LinkedIn",
      icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>',
      href: "https://www.linkedin.com/in/%ED%91%B8%EB%A6%84-%EC%A0%95-abb77a2b8/",
    },
    {
      label: "Email",
      icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>',
      href: "mailto:pooreumjung02@naver.com",
    },
  ],
  contacts: [
    { label: "GitHub", href: "https://github.com/pooreumjung", primary: true },
    { label: "Email", href: "mailto:pooreumjung02@naver.com" },
    { label: "Blog", href: "https://pooreumjung.tistory.com/" },
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
    image: "./assets/eat-ssu.jpeg",
    imageFit: "portrait",
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
  },
];

const icons = {
  github:
    '<svg viewBox="0 0 16 16" width="15" height="15" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/></svg>',
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

document.querySelector("#profile-summary").textContent = profile.summary;

const profileLinks = document.querySelector("#profile-links");
const contactLinks = document.querySelector("#contact-links");
profile.links.forEach((link) => profileLinks.append(createButton(link)));
profile.contacts.forEach((link) => contactLinks.append(createButton(link)));

const aboutCertificationList = document.querySelector("#about-certification-list");
certifications.forEach((certification) => {
  const article = document.createElement("article");
  article.className = "about-certification-card";
  article.innerHTML = `
    <div>
      <h4>${certification.title}</h4>
      <p>${certification.subtitle}</p>
    </div>
    <span>${certification.period}</span>
  `;
  aboutCertificationList.append(article);
});

const experienceList = document.querySelector("#experience-list");
experiences.forEach((experience) => {
  const article = document.createElement("article");
  article.className = "experience-item reveal";
  article.innerHTML = `
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
  `;
  experienceList.append(article);
});


const projectList = document.querySelector("#project-list");
projects.forEach((project, index) => {
  const article = document.createElement("article");
  article.className = "project-card reveal";
  article.innerHTML = `
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
  `;
  projectList.append(article);
});

const skillList = document.querySelector("#about-skill-list");
skillGroups.forEach((skill) => {
  const article = document.createElement("article");
  article.className = "about-skill-card";
  article.innerHTML = `
    <h4>${skill.title}</h4>
    <div class="about-skill-tags">
      ${skill.items.map((item) => `<span>${item}</span>`).join("")}
    </div>
  `;
  skillList.append(article);
});

const writingList = document.querySelector("#writing-list");
writings.forEach((item) => {
  const article = document.createElement("article");
  article.className = "writing-card reveal";
  article.innerHTML = `
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
  `;
  writingList.append(article);
});

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
