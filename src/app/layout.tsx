import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-noto-sans-kr",
  display: "swap",
});

const description =
  "실사용자 서비스의 배포·모니터링·성능 문제를 측정하고 개선해 온 백엔드 개발자 정푸름의 포트폴리오입니다.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pooreum.site"),
  title: "정푸름 | Backend Developer",
  description,
  openGraph: {
    type: "website",
    url: "/",
    siteName: "정푸름 포트폴리오",
    title: "정푸름 | Backend Developer",
    description,
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "정푸름 | Backend Developer",
    description,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={notoSansKR.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
