import { generateOGImage } from "@/lib/meta";
import coursesInfo from "../coursesInfo";

export const runtime = "nodejs";

export const alt = coursesInfo.foodtech.title;
export const size = {
  width: 1920,
  height: 960,
};

export const contentType = "image/png";

export default async function Image() {
  return generateOGImage(alt);
}
