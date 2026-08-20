import type { Project } from "@/types/projects";

export const projects: Project[] = [
  {
    title: "EAT-SSU",
    period: "Backend · Spring Boot",
    activePeriod: "2026.01 - 운영 중",
    description: "누적 다운로드 수 6,000+, 숭실대학교 학식 서비스",
    highlight: "Gradle 중복 빌드 제거로 CI 빌드 시간 50% 단축",
    highlightMetric: "50%",
    image: "/eat-ssu-v2.png",
    imageFit: "cover",
    links: [{ label: "GitHub", href: "https://github.com/EAT-SSU/Server" }],
    stack: ["Spring Boot", "MySQL", "Flyway", "Prometheus", "Grafana", "Micrometer", "GitHub Actions", "Docker", "Nginx","AWS"],
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
      { text: "AWS 프리티어 만료로 RDS 데이터를 다른 계정으로 이전", href: "https://pooreumjung.tistory.com/574" },
      { text: "Gradle 중복 빌드 제거로 CI 빌드 시간 절반 단축", href: "https://pooreumjung.tistory.com/584" },
      {
        text: "배포 전 실제 DB로 Flyway 마이그레이션 리허설 실행해 운영 장애 사전 방지",
        href: "https://pooreumjung.tistory.com/608",
      },      
      {
        text: "메모리 제한된 EC2 환경에 Grafana Cloud·Alloy 기반 모니터링 구축",
        href: "https://pooreumjung.tistory.com/587",
      },      
      { text: "PR 시점에 테스트를 자동 실행하는 CI 워크플로우 신설", href: "https://pooreumjung.tistory.com/588" },
      {
        text: "배포 스크립트를 포트 기반 컨테이너 관리로 개선해 운영 안정성 확보",
        href: "https://pooreumjung.tistory.com/585",
      },
      { text: "로그인 성공/실패 지표 Micrometer 카운터 추가" },
      { text: "운영 중인 DB에 Flyway 도입 및 베이스라인 적용" },
      { text: "빌드/배포 job 분리로 CI/CD 파이프라인 개선" },      
      { text: "예외 로직 분리, Swagger 문서 분리 등 패키지 구조 리팩토링" },
      { text: "NPE, Flyway 마이그레이션 누락 등 운영 중 발생한 버그 수정" },
    ],
    wrapup:
      "실사용자가 있는 운영 서비스다 보니, 새 기능을 추가하는 것보다 이미 동작하는 걸 깨뜨리지 않는 게 더 중요하다는 걸 체감했습니다. 문제가 생기면 감으로 짐작하기보다 지표부터 확인하고 원인을 좁혀가는 습관이 생겼고, 작은 변경 하나에도 운영에 미칠 영향을 먼저 생각하게 됐습니다.",
  },
  {
    title: "SEMOSAN",
    period: "KUSITMS 33rd · Backend",
    activePeriod: "2026.04 - 진행 중",
    description: "요즘 등산러를 위한 등산 메이트 서비스",
    highlight: "KUSITMS 33기 밋업데이 최우수상 수상",
    highlightMetric: "최우수상",
    image: "/semosan-v2.png",
    imageFit: "cover",
    links: [{ label: "GitHub", href: "https://github.com/SEMOSAN/SEMOSAN_BE" }],
    stack: [
      "Spring Boot",
      "Spring Security",
      "JPA",
      "MySQL",
      "Flyway",
      "JWT",
      "Kakao OAuth",
      "FCM",
      "APNs",
      "JUnit5",
      "JaCoCo",
      "GitHub Actions",
      "Spring Boot Actuator",
      "Discord Webhook",
      "Gemini Code Review",
      "CodeRabbit",
      "Claude Code",
    ],
    intro: "KUSITMS 33기 등산 서비스로, 등산 코스 추천부터 등산 기록, 커뮤니티까지 아우르는 앱입니다.",
    features: [
      "레벨별 맞춤 등산 코스 추천",
      "등산 기록 및 실시간 라이브 액티비티",
      "자유게시판·세모피드 등 커뮤니티 기능",
      "게시글 신고/차단, 좋아요·이모지 반응",
      "등산 알림을 위한 FCM/APNs 푸시",
    ],
    contribution:
      "초기 아키텍처 세팅부터 인증, 등산/커뮤니티 도메인, 푸시 알림 인프라, 리팩토링, 테스트 커버리지까지 폭넓게 담당했습니다.",
    contributionPoints: [
      {
        text: "산 추천, 등산 기록, 라이브 액티비티 등 등산·트래킹 도메인 개발, Redis 배치 조회로 스케줄러 성능 21.7배 개선",
        href: "https://pooreumjung.tistory.com/609",
      },
      {
        text: "산 상세 조회 전용 read model과 성능 리포트 테스트를 도입해 쿼리 7개→2개, 평균 응답 29.5ms→4.6ms 개선",
        href: "https://pooreumjung.tistory.com/610",
      },
      {
        text: "커버리지 보강 및 JaCoCo 기반 테스트 커버리지 90% CI 게이트 도입",
        href: "https://pooreumjung.tistory.com/607",
      },
      {
        text: "Spring 순환 참조로 인한 배포 장애 해결",
        href: "https://pooreumjung.tistory.com/577",
      },
      {
        text: "iOS 푸시 미수신 이슈를 연쇄적으로 추적·해결, FCM data-only 메시지 전환으로 포그라운드 알림 지연 해결",
        href: "https://pooreumjung.tistory.com/578",
      },
      {
        text: "소셜 로그인 구현부터 탈퇴 유저 JWT 우회 방지까지 인증/인가 및 보안 강화",        
      },
      {
        text: "마이페이지, 온보딩, 회원탈퇴, 프로필 등 유저 도메인 개발",        
      },      
      {
        text: "신고/차단, 대댓글, 좋아요·이모지 반응 등 커뮤니티(자유게시판·세모피드) 기능 개발",        
      },      
      {
        text: "중복 로직 통합, 트랜잭션 분리, 네이밍 통일 등 코드 품질 리팩토링",        
      },      
      {
        text: "디스코드 에러 알림, Gemini/CodeRabbit 기반 AI 코드리뷰, Spring Boot 4.1 마이그레이션 스파이크 등 개발 생산성 툴링",        
      },
      {
        text: "BaseEntity, 글로벌 응답/예외 구조, Flyway 등 초기 아키텍처 설계"
      },
    ],
    wrapup:
      "여러 도메인을 넘나들며 개발하다 보니 구조와 네이밍을 일관되게 지키는 게 왜 중요한지 체감했고, Gemini·CodeRabbit 같은 AI 코드리뷰 도구를 도입해 리뷰 병목을 줄이는 시도도 해봤습니다. 그 결과 KUSITMS 33기 밋업데이에서 최우수상을 수상했습니다.",
  },
  {
    title: "Areumdap",
    period: "UMC 9th · Backend",
    activePeriod: "2025.12 - 2026.02",
    description: "질문을 통해 나를 알아가는 자기이해 서비스",
    highlight: "UMC 데모데이 77개 팀 중 2등 수상",
    highlightMetric: "2등",
    image: "/areumdap-v2.png",
    imageFit: "cover",
    links: [{ label: "GitHub", href: "https://github.com/AreumDap/Areumdap-backend" }],
    stack: ["Spring Boot", "JPA", "MySQL", "OAuth", "Docker", "Blue-Green Deploy", "GitHub Actions","Nginx","CodeDeploy"],
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
      {
        text: "백엔드 파트 리더로서 GitHub Flow 기반 브랜치 전략, 코드 리뷰 프로세스, API 명세서, 프로젝트 구조 등을 정의해 협업 기준 수립",
      },
      {
        text: "이메일·소셜(카카오)·네이버 로그인을 반복적으로 구현하고 안정화 (로그인 방식 변경, JWT 예외 응답 커스터마이징, 버그 수정 등)",
      },
      {
        text: "이메일 인증코드 발송을 SQS 기반 비동기 처리로 전환해 서버 부하 분산",        
      },
      { text: "프로젝트 환경설정부터 Blue-Green 배포, main 브랜치 전환까지 배포 파이프라인 구축" },
      { text: "온보딩 저장, 유저 프로필, 캐릭터 성장 히스토리 등 유저·캐릭터 도메인 개발" },
      { text: "운영서버 디스코드 알림 연동, Device Token 로직 리팩토링·최적화" },
    ],
    wrapup:
      "Spring Boot Senior로 이메일/소셜/네이버 로그인을 반복 안정화하고 Blue-Green 배포 파이프라인을 구성했으며, UMC 데모데이 77개 팀 중 2등을 수상했습니다.",
  },
];
