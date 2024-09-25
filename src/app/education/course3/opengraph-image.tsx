import { generateOGImage } from "@/lib/meta";

export const runtime = "edge";

export const alt = "Микробиология пивоварения";
export const size = {
  width: 1920,
  height: 960,
};

export const contentType = "image/png";

export default async function Image() {
  return generateOGImage(alt);
}
