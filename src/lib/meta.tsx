import { ImageResponse } from "next/og";
import type { Metadata } from "next";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const generateOGImage = async (title: string) => {
  const [manrope, cover] = await Promise.all([
    readFile(join(process.cwd(), "public/manrope.ttf")),
    readFile(join(process.cwd(), "public/cover.png")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: `url(data:image/png;base64,${cover.toString("base64")})`,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          color: "white",
        }}
      >
        <p
          style={{
            maxWidth: "75%",
            textAlign: "center",
            marginInline: "auto",
          }}
        >
          {title}
        </p>
      </div>
    ),
    {
      width: 1920,
      height: 960,
      fonts: [
        {
          name: "Manrope",
          data: Uint8Array.from(manrope).buffer,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
};

export const generateMeta = (title: string, description: string): Metadata => ({
  title,
  description,
  icons: "favicon.ico",
  metadataBase: new URL("https://biotech.industries"),
  creator: "Aleksey Vokhmin",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    site: "@biotech.industries",
    creator: "@gosvoh",
  },
});
