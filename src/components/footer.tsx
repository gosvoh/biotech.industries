import BiotechTextLogo from "@public/Biotech-Logotype.svg";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-16 text-2xl md:text-3xl wrapper py-20 bg-secondary">
        <Image
          src={BiotechTextLogo}
          alt="Biotech"
          className="w-[165px] md:w-[400px]"
        />
        <div className="fcol gap-6 md:gap-12 md:row-span-2">
          <Link href="/technologies" className="footer-link">
            <ArrowUpRight className="text-brand" />
            Технологии и исследования
          </Link>
          <Link href="/consultations" className="footer-link">
            <ArrowUpRight className="text-brand" />
            Консультации для бизнеса
          </Link>
          <Link href="/education" className="footer-link">
            <ArrowUpRight className="text-brand" />
            Курсы для биотех-специалистов
          </Link>
          <Link href="/event" className="footer-link">
            <ArrowUpRight className="text-brand" />
            Организация мероприятий
          </Link>
        </div>
        <div className="fcol gap-6">
          <p>Санкт-Петербург, Ломоносова ул., 9</p>
          <Link className="font-bold" href="mailto:biotech@itmo.ru">
            biotech@itmo.ru
          </Link>
          <Link
            className="hover:text-brand2/80 hover:underline"
            target="_blank"
            href="/personal_data_policy.pdf"
          >
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
}
