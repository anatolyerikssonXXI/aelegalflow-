import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0a0a",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Top border line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "5px",
            background: "#C9A84C",
          }}
        />

        {/* Logo mark — AE letters */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              border: "2px solid #C9A84C",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#C9A84C",
              fontSize: "28px",
              fontWeight: 700,
              letterSpacing: "2px",
            }}
          >
            AE
          </div>
        </div>

        {/* Main title */}
        <div
          style={{
            color: "#C9A84C",
            fontSize: "72px",
            fontWeight: 700,
            letterSpacing: "3px",
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: "20px",
          }}
        >
          AE Legal Flow
        </div>

        {/* Gold divider */}
        <div
          style={{
            width: "120px",
            height: "2px",
            background: "#C9A84C",
            marginBottom: "28px",
            opacity: 0.6,
          }}
        />

        {/* Subtitle RU */}
        <div
          style={{
            color: "#e5e5e5",
            fontSize: "30px",
            fontWeight: 400,
            textAlign: "center",
            marginBottom: "12px",
            letterSpacing: "1px",
          }}
        >
          Юридические консультации в Швеции
        </div>

        {/* Subtitle EN */}
        <div
          style={{
            color: "#888",
            fontSize: "20px",
            fontWeight: 400,
            textAlign: "center",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          Migration Law · ECHR · Swedish Law
        </div>

        {/* Bottom border */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: "linear-gradient(90deg, transparent, #C9A84C, transparent)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
