import Button from "@/components/ui/custom/button";
import Card from "@/components/ui/custom/card";
import InformCard from "@/components/ui/custom/inform.card";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section id="top" className="pt-[290px] md:py-[231px]">
        <div className="fcol gap-16 ml-auto w-fit">
          <div className="fcol gap-8 md:w-fit">
            <h1>Biotech Industries</h1>
            <p className="md:text-4xl">Создаем инновации в биотех-индустрии</p>
          </div>
          <Button className="w-full md:w-fit">Обсудить проект</Button>
        </div>
      </section>
      <section className="fcol gap-16 md:gap-20">
        <h2 className="text-center">О нас</h2>
        <div className="fcol gap-10 md:gap-5 md:grid md:grid-cols-2 xl:grid-cols-4">
          <InformCard bigText="30" text="экспертов" />
          <InformCard bigText="90" text="лет в биотехнологии" />
          <InformCard bigText="10" text="лабораторий" />
          <InformCard bigText="16" text="докторов наук" />
        </div>
      </section>
      <section id="capabilities" className="fcol gap-16">
        <h2 className="text-center">Наши возможности</h2>
        <div className="fcol gap-10 md:gap-5 lg:grid lg:grid-cols-8 lg:grid-rows-2">
          <Link href="/technologies" className="lg:col-span-5">
            <Card smallText="01" text="Технологии и исследования" />
          </Link>
          <Link href="#" className="lg:col-span-3">
            <Card smallText="02" text="Консультации для бизнеса" />
          </Link>
          <Link href="#" className="lg:col-span-3">
            <Card smallText="03" text="Курсы для биотех-специалистов" />
          </Link>
          <Link href="#" className="lg:col-span-5">
            <Card smallText="04" text="Организация мероприятий" />
          </Link>
        </div>
      </section>
      <section className="fcol gap-16">
        <h2 className="text-center">Партнеры</h2>
        <div className="grid grid-cols-2 gap-5 md:flex md:flex-wrap md:justify-center">
          {Array.from({ length: 7 }).map((_, i) => (
            <Skeleton
              key={i}
              className="w-full md:max-w-[395px] md:min-w-[290px] lg:min-w-[350px] aspect-square md:aspect-auto md:h-[180px] flex-1"
            />
          ))}
        </div>
      </section>
    </main>
  );
}
