import { ImageResponse } from "next/og";

export const alt = "Ashik Ahmmed Shuvo, Senior Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0b1020",
          color: "#f8fafc",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 28,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#a5b4fc",
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              backgroundColor: "#4f46e5",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: 0,
            }}
          >
            AS
          </div>
          Portfolio
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.05 }}>
            Ashik Ahmmed Shuvo
          </div>
          <div style={{ marginTop: 20, fontSize: 32, color: "#e2e8f0" }}>
            Senior Software Engineer
          </div>
          <div style={{ marginTop: 16, fontSize: 26, color: "#94a3b8" }}>
            Full-stack TypeScript · Vue/Nuxt · React/Next.js · NestJS · LLM integration
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
