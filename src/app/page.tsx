import Button from "@/components/ui/custom/button";
import Card from "@/components/ui/custom/card";
import InformCard from "@/components/ui/custom/inform.card";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section id="top" className="fcol gap-16 pt-[290px]">
        <div className="fcol gap-8">
          <h1>Biotech Industries</h1>
          <p>Создаем инновации в биотех-индустрии</p>
        </div>
        <Button className="w-full">Обсудить проект</Button>
      </section>
      <section className="fcol gap-16">
        <h2 className="text-center">О нас</h2>
        <div className="fcol gap-10">
          <InformCard bigText="30" text="экспертов" />
          <InformCard bigText="90" text="лет в биотехнологии" />
          <InformCard bigText="10" text="лабораторий" />
          <InformCard bigText="16" text="докторов наук" />
        </div>
      </section>
      <section id="capabilities" className="fcol gap-16">
        <h2 className="text-center">Наши возможности</h2>
        <div className="fcol gap-10">
          <Link href="/technologies">
            <Card smallText="01" text="Технологии и исследования" />
          </Link>
          <Card smallText="02" text="Консультации для бизнеса" />
          <Card smallText="03" text="Курсы для биотех-специалистов" />
          <Card smallText="04" text="Организация мероприятий" />
        </div>
      </section>
      <section className="fcol gap-16">
        <h2 className="text-center">Партнеры</h2>
        <div className="grid grid-cols-2 gap-5">
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} className="w-full aspect-square" />
          ))}
        </div>
      </section>
    </main>
  );
}
