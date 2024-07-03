import BiotechTextLogo from "@public/Biotech-Logotype.svg";
import { ExternalLinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "./ui/custom/button";
import dynamic from "next/dynamic";

const YandexMap = dynamic(async () => import("@/components/yandex.map"), {
  ssr: false,
});

export default function Footer() {
  return (
    <footer className="fcol">
      <div className="fcol gap-16 lg:grid lg:grid-rows-2 lg:grid-cols-2 lg:grid-flow-col wrapper w-full">
        <h2 className="text-left md:text-4xl xl:text-5xl">Контакты</h2>

        <div className="fcol gap-6 md:text-3xl 2xl:text-4xl">
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
          className="font-bold hidden md:block md:text-4xl xl:text-5xl"
          href="mailto:biotech@itmo.ru"
        >
          biotech@itmo.ru
        </Link>
        <Button className="w-full md:w-fit">Обсудить проект</Button>
      </div>

      <YandexMap className="w-full aspect-square max-h-[600px] mt-16" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-2xl md:text-3xl wrapper py-20">
        <Image
          src={BiotechTextLogo}
          alt="Biotech"
          className="w-[165px] md:w-[400px]"
        />
        <div className="fcol gap-6 md:gap-12 md:row-span-2">
          <Link href="#" className="footer-link">
            <ExternalLinkIcon className="text-brand" />
            Технологии и исследования
          </Link>
          <Link href="#" className="footer-link">
            <ExternalLinkIcon className="text-brand" />
            Консультации для бизнеса
          </Link>
          <Link href="#" className="footer-link">
            <ExternalLinkIcon className="text-brand" />
            Курсы для биотех-специалистов
          </Link>
          <Link href="#" className="footer-link">
            <ExternalLinkIcon className="text-brand" />
            Организация мероприятий
          </Link>
        </div>
        <div className="fcol gap-6">
          <p>
            Санкт-Петербург
            <br />
            Ломоносова ул., 9
          </p>
          <Link className="font-bold" href="mailto:biotech@itmo.ru">
            biotech@itmo.ru
          </Link>
        </div>
      </div>
    </footer>
  );
}
