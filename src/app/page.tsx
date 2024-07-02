import Button from "@/components/ui/custom/button";
import Card from "@/components/ui/custom/card";
import InformCard from "@/components/ui/custom/inform.card";
import { Skeleton } from "@/components/ui/skeleton";
import dynamic from "next/dynamic";
import Link from "next/link";

const YandexMap = dynamic(async () => import("@/components/yandex.map"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="text-2xl">
      <section className="fcol gap-16 pt-[290px]">
        <div className="fcol gap-8">
          <h1>Biotech Industries</h1>
          <p>Создаем инновации в биотех-индустрии</p>
        </div>
        <Button className="text-2xl w-full">Обсудить проект</Button>
      </section>
      <section className="fcol gap-16">
        <h2>О нас</h2>
        <div className="fcol gap-10">
          <InformCard bigText="30" text="экспертов" />
          <InformCard bigText="90" text="лет в биотехнологии" />
          <InformCard bigText="10" text="лабораторий" />
          <InformCard bigText="16" text="докторов наук" />
        </div>
      </section>
      <section className="fcol gap-16">
        <h2>Наши возможности</h2>
        <div className="fcol gap-10">
          <Card smallText="01" text="Технологии и исследования" />
          <Card smallText="02" text="Консультации для бизнеса" />
          <Card smallText="03" text="Курсы для биотех-специалистов" />
          <Card smallText="04" text="Организация мероприятий" />
        </div>
      </section>
      <section className="fcol gap-16">
        <h2>Партнеры</h2>
        <div className="grid grid-cols-2 gap-5">
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} className="w-full aspect-square" />
          ))}
        </div>
      </section>
      <section className="p-0">
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
          <Button className="text-2xl w-full">Обсудить проект</Button>
        </div>
        <YandexMap className="w-full aspect-square max-h-[600px] mt-16" />
      </section>
    </main>
  );
}
