import type { Highlight } from "@/types/highlights";

export const HIGHLIGHTS_COPY = {
  section: {
    title: "Highlights",
    subtitle: "누적 다운로드 6,000+ 서비스 운영 · 최우수상 2회 (KUSITMS 33기 밋업데이, UMC 9기 데모데이)",
  },
  problemLabel: "문제",
  actionLabel: "한 일",
} as const;

export const highlights: Highlight[] = [
  {
    value: "98.3%",
    label: "JDBC batch 전환으로 GPS 저장 시간 단축",
    detail: "100건 기준 521ms → 8.8ms",
    problem: "IDENTITY 전략 탓에 saveAll()이 좌표마다 INSERT",
    action: "ID 전략·나머지 JPA 코드는 유지, 저장 경로만 교체",
    project: "SEMOSAN",
  },
  {
    value: "21.7배",
    label: "MGET 일괄 조회로 세션 만료 조회 개선",
    detail: "19.7ms → 0.9ms, 500세션 기준",
    problem: "만료 후보 세션마다 Redis GET을 따로 호출",
    action: "빈 목록은 호출 생략, 50·100·500개로 벤치마크",
    project: "SEMOSAN",
  },
  {
    value: "약 40배",
    label: "pg_trgm 인덱스로 산 검색 개선",
    detail: "3글자 이상 검색, 61.7ms → 1.5ms",
    problem: "%keyword% LIKE 검색이 인덱스를 타지 못함",
    action: "2글자 검색의 Seq Scan 선택까지 확인",
    project: "SEMOSAN",
  },
  {
    value: "50%",
    label: "중복 빌드 제거로 CI 빌드 시간 단축",
    detail: "Docker 이미지도 약 200MB 감소",
    problem: "Actions에서 만든 JAR를 Dockerfile이 다시 빌드",
    action: "JAR를 이미지에 복사, JRE 베이스로 전환",
    project: "EAT-SSU",
  },
  {
    value: "1.7초",
    label: "장애 알림 비동기화로 에러 응답 지연 제거",
    detail: "에러 응답에 붙던 Slack 전송 시간",
    problem: "Slack 장애 알림을 동기로 보내 에러 응답이 지연",
    action: "TaskDecorator로 requestId를 비동기 스레드에 전파",
    project: "EAT-SSU",
  },
  {
    value: "327건",
    label: "기업 컨택 메일 발송 자동화, 실패 0건",
    detail: "발송 작업 약 6시간 → 약 32분",
    problem: "기업 300여 곳에 컨택 메일을 한 통씩 수작업 발송",
    action: "dry-run 검토·일부 시험 발송 후 순차 발송, 결과 로그 기록",
    project: "KUSITMS 34기",
  },
];
