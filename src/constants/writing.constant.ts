export const WRITING_COPY = {
  section: { title: "Writing" },
  allPostsLabel: "블로그 전체 보기",
  allPostsHref: "https://pooreumjung.tistory.com/",
} as const;

// Post data itself is no longer hardcoded here — it's fetched live from the
// Tistory RSS feed at request time (with hourly ISR revalidation). See
// src/lib/tistory.ts and src/app/page.tsx.
