import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { person } from "@/data/yoshita";

export const alt = `${person.name} — ${person.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Typographic OG card — no stock photography, just the identity,
 * positioning and practice areas on the ivory/ink palette.
 *
 * The display face is read from disk (rather than fetched) so the image
 * builds offline and matches the site's serif identity.
 */
export default async function OpenGraphImage() {
  const fontDir = join(process.cwd(), "src/app/_og");
  const [serif, serifItalic] = await Promise.all([
    readFile(join(fontDir, "InstrumentSerif-Regular.ttf")),
    readFile(join(fontDir, "InstrumentSerif-Italic.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fbf9f6",
          padding: "72px 80px",
          fontFamily: "Instrument Serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span
            style={{
              fontSize: 24,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "#6e1f2e",
            }}
          >
            {person.name}
          </span>
          <span style={{ fontSize: 22, color: "#6f675c", letterSpacing: "0.12em" }}>
            {person.location.toUpperCase()}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ height: 1, background: "#d6cdc0", marginBottom: 44, display: "flex" }} />
          <span style={{ fontSize: 96, color: "#16130f", lineHeight: 1.02, letterSpacing: "-0.02em" }}>
            Corporate &amp; Commercial
          </span>
          <span
            style={{
              fontSize: 96,
              color: "#6e1f2e",
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
              fontStyle: "italic",
            }}
          >
            Legal Professional
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <span style={{ fontSize: 30, color: "#3b3630" }}>{person.qualification}</span>
          <span style={{ fontSize: 26, color: "#6f675c" }}>{person.practiceLine}</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Instrument Serif", data: serif, style: "normal", weight: 400 },
        { name: "Instrument Serif", data: serifItalic, style: "italic", weight: 400 },
      ],
    },
  );
}
