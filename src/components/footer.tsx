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
      <div className="fcol gap-16 wrapper">
        <h2 className="text-left">Контакты</h2>
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
        <Button className="w-full">Обсудить проект</Button>
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
            <ExternalLinkIcon />
            Технологии и исследования
          </Link>
          <Link href="#" className="footer-link">
            <ExternalLinkIcon />
            Консультации для бизнеса
          </Link>
          <Link href="#" className="footer-link">
            <ExternalLinkIcon />
            Курсы для биотех-специалистов
          </Link>
          <Link href="#" className="footer-link">
            <ExternalLinkIcon />
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
