import { PickRequairedPartial } from "@/lib/utils";
import { CourseProps } from "./course";

const coursesInfo: {
  [course: string]: PickRequairedPartial<CourseProps, "title" | "format" | "price", "date">;
} = {
  course1: {
    title: "Светлое лагерное пиво: сырьё, технология, качество",
    // date: "26 ноября 2025 года (при условии набора группы)",
    format: "Дистанционный",
    price: 110,
  },
  course2: {
    title: "Технологические аспекты использования дрожжей в пивоварении",
    // date: "3 марта 2026 года (при условии набора группы)",
    format: "Очно-заочный",
    price: "84 500",
  },
  course3: {
    title: "Микробиология пивоварения",
    // date: "3 марта 2026 года (при условии набора группы)",
    format: "Очно-заочный",
    price: "84 500",
  },
  foodtech: {
    title: "ФУДТЕХ",
    // date: "Октябрь 2025 года (при условии набора группы)",
    format: "Дистанционный",
    price: 294
  },
} as const;

export default coursesInfo;
