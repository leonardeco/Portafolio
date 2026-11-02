import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Leonardo Guzmán — Desarrollador Full Stack";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const photo = await readFile(join(process.cwd(), "public", "leonardo.png"));
  const photoSrc = `data:image/png;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#050507",
          backgroundImage:
            "radial-gradient(circle at 0% 0%, rgba(234,88,12,0.35), transparent 45%), radial-gradient(circle at 100% 100%, rgba(124,92,255,0.35), transparent 45%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 680 }}>
          <div style={{ display: "flex", fontSize: 22, color: "#a1a1b5", letterSpacing: 4, textTransform: "uppercase" }}>
            Full Stack Developer · Colombia
          </div>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 700, marginTop: 24, lineHeight: 1.02, letterSpacing: -2 }}>
            Leonardo Guzmán
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#d4d4dc", marginTop: 28, lineHeight: 1.35 }}>
            React · Next.js · Angular · Node.js · FastAPI · Spring Boot
          </div>
          <div style={{ display: "flex", marginTop: 40, gap: 12 }}>
            {["SaaS", "ERP", "APIs", "IA"].map((tag) => (
              <div
                key={tag}
                style={{ display: "flex", padding: "10px 22px", borderRadius: 999, border: "1px solid rgba(255,255,255,0.18)", fontSize: 22 }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", padding: 10, borderRadius: 44, border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photoSrc} width={340} height={400} alt="" style={{ borderRadius: 36, objectFit: "cover" }} />
        </div>
      </div>
    ),
    size,
  );
}
