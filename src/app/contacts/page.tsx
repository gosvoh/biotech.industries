import Image from "next/image";
import Glow1 from "@public/glow 1.png";
import Link from "next/link";
import dynamic from "next/dynamic";
import Button from "@/components/ui/custom/button";
import type { Metadata } from "next";
import { generateMeta } from "@/lib/meta";

const newMeta = {
  title: "ИТМО Биотех - Контакты",
  description: "ИТМО Биотех - Свяжитесь с нами, если у вас остались вопросы",
};

export const metadata: Metadata = generateMeta(
  "ИТМО Биотех - Контакты",
  "Свяжитесь с нами, если у вас остались вопросы",
);

const YandexMap = dynamic(async () => import("@/components/yandex.map"));

export default function Contacts() {
  return (
    <main>
      <section className="fcol gap-16 relative overflow-x-clip md:overflow-y-clip max-w-none px-0 pb-0">
        <div className="fcol gap-8 md:gap-16 lg:grid lg:items-center lg:grid-rows-2 lg:grid-cols-2 lg:grid-flow-col wrapper w-full">
          <h1 className="text-xl xs:text-2xl md:text-4xl">
            Свяжитесь с нами, если у вас остались вопросы
          </h1>
          <div className="fcol gap-6 text-2xl 3xl:text-4xl">
            <p>
              Санкт-Петербург
              <br />
              Ломоносова ул., 9
            </p>
            <Link className="font-bold md:hidden" href="mailto:biotech@itmo.ru">
              biotech@itmo.ru
            </Link>
          </div>
          <Link
            className="hidden md:block md:text-4xl xl:text-5xl 3xl:text-6xl w-fit"
            href="mailto:biotech@itmo.ru"
          >
            biotech@itmo.ru
          </Link>
          <Button className="mt-8 md:mt-0" />
        </div>
        <Image
          src={Glow1}
          alt=""
          className="absolute top-0 right-0 -z-10 translate-x-1/2 -translate-y-1/2 max-w-none w-[250%] md:w-full min-w-full"
        />
        <YandexMap className="w-full aspect-square max-h-[600px] mt-16" />
      </section>
    </main>
  );
}
