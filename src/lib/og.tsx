import { ImageResponse } from "next/og";

export const generateOGImage = async (title: string) => {
  const manrope = fetch(new URL("@public/manrope.ttf", import.meta.url)).then(
    (res) => res.arrayBuffer()
  );

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: "url(https://biotech.industries.cedne.ru/cover.png)",
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
          data: await manrope,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
};
