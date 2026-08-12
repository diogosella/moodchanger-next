import { ImageResponse } from "next/og";
import { brand, logoDataUri } from "@/lib/og";

export const size = { width: 256, height: 256 };
export const contentType = "image/png";

/**
 * Browser-tab icon: the yellow FloLabs mark on the brand ink square, so it stays
 * legible against both light and dark tab strips.
 */
export default async function Icon() {
  const logo = await logoDataUri();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: brand.ink,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- satori renders plain <img> */}
        <img src={logo} width={196} height={196} alt="" />
      </div>
    ),
    size,
  );
}
