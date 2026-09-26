import { ImageResponse } from "next/og";

export const alt = "Jung PooReum — Backend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Latin-only copy: the default next/og font has no Hangul glyphs.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 88px",
          background: "#f7f8ff",
          color: "#17213a",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#2563eb", fontWeight: 600 }}>pooreum.site</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, fontWeight: 800, letterSpacing: -2 }}>Jung PooReum</div>
          <div style={{ fontSize: 40, color: "#5f6b85", marginTop: 12 }}>Backend Developer</div>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#1e3a8a" }}>
          EAT-SSU · SEMOSAN · Areumdap — deploy safety, observability, performance
        </div>
      </div>
    ),
    size,
  );
}
