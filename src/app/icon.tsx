import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/** Monogram favicon — ivory "YS" on ink. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#16130f",
          color: "#fbf9f6",
          fontSize: 34,
          letterSpacing: "-0.02em",
          fontWeight: 500,
        }}
      >
        YS
      </div>
    ),
    size,
  );
}
