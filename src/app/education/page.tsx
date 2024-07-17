import Lines from "@public/Lines.svg";
import Lightning from "@public/Lightning.svg";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Smoke from "@public/smoke.png";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Contacts from "@/components/contacts";
import Bookmark from "@public/Bookmark.svg";
import BookmarkGlowMobile from "@public/BookmarkGlowMobile.svg";
import FirstSection from "@/components/first.section";
import type { Metadata } from "next";
import { generateMeta } from "@/lib/meta";

export const metadata: Metadata = generateMeta(
  "Biotech.Industries - Курсы для биотех-специалистов",
  "Наша команда не только разрабатывает технологии и проводит исследования, но и делится знаниями"
);

const CourseCard = ({
  title,
  date,
  format,
}: {
  title: React.ReactNode;
  date: string;
  format: "Дистанционный" | "Очно-заочный";
}) => (
  <div
    className={cn(
      "fcol gap-8 p-10 border border-white/60 bg-black relative",
      "rounded-[20px] md:rounded-[30px]",
      "overflow-clip",
      "hover:border-brand2 hover:shadow-[0px_4px_100px_-50px_hsl(var(--brand2))] transition-all duration-300",
      "group"
    )}
  >
    <div className="fcol gap-3 md:gap-4 z-[1]">
      <p className="text-brand text-base md:text-2xl">
        Курс повышения квалификации
      </p>
      <h3>{title}</h3>
    </div>
    <div className="fcol md:flex-row gap-3 z-[1] md:gap-8 lg:gap-24 xl:gap-[180px]">
      <div className="fcol gap-1 md:gap-2">
        <p className="text-base md:text-2xl">Формат проведения</p>
        <p className="font-bold text-xl md:text-3xl">{format}</p>
      </div>
      <div className="inline-flex items-center gap-4 md:gap-5 lg:gap-6 xl:gap-7 2xl:gap-8 font-bold text-lg md:text-2xl">
        <ArrowUpRight className="text-brand2 w-8 h-8" />
        {date}
      </div>
    </div>
    <Image
      src={Smoke}
      alt=""
      className="absolute opacity-20 md:-translate-y-1/2 left-0 top-0 md:top-1/2 object-cover h-full mix-blend-hard-light"
    />
    <Image
      src={Lines}
      alt=""
      className={cn(
        "hidden xl:block absolute translate-x-1/3 -translate-y-1/2 right-10 top-1/2 h-[250%] max-h-none max-w-none opacity-50",
        "group-hover:opacity-100 transition-all duration-300 object-cover"
      )}
    />
  </div>
);

export default function Education() {
  return (
    <main>
      <FirstSection
        image={Lightning}
        title="Курсы для биотех-специалистов"
        subtitle="Наша команда не только разрабатывает технологии и проводит исследования, но и делится знаниями"
        breadcrumbs={[
          { title: "Главная", href: "/" },
          { title: "Наши возможности", href: "/#capabilities" },
          {
            title: "Курсы для биотех-специалистов",
          },
        ]}
      />
      <section className="fcol gap-16">
        <h2>Наши курсы</h2>
        <div className="fcol gap-8">
          <h3 className="border-b-2 border-brand2 pb-3 md:text-3xl">
            Предстоящие курсы
          </h3>
          <Link href="/education/course1">
            <CourseCard
              title={
                <>
                  Светлое лагерное пиво: <br className="hidden md:inline" />
                  сырьё, технология, качество
                </>
              }
              date="16 сентября - 21 октября"
              format="Дистанционный"
            />
          </Link>
        </div>
        <div className="fcol gap-8">
          <h3 className="border-b-2 border-brand2 pb-3 md:text-3xl">
            Архивные курсы
          </h3>
          <Link href="/education/course2">
            <CourseCard
              title={
                <>
                  Технологические аспекты использования{" "}
                  <br className="hidden md:inline" />
                  дрожжей в пивоварении
                </>
              }
              date="Архивный курс"
              format="Очно-заочный"
            />
          </Link>
        </div>
      </section>
      <section className="fcol gap-16 max-w-none px-0 lg:hidden overflow-x-clip">
        <h2 className="text-4xl wrapper z-[1]">Не нашли нужный курс?</h2>
        <div className="relative row-span-2 col-start-1 w-1/3 mx-auto">
          <Image src={Bookmark} alt="" className="w-full rotate-[10.03deg]" />
          <Image
            src={BookmarkGlowMobile}
            alt=""
            className={cn(
              "w-[500%] max-w-none h-auto absolute top-1/2 left-1/2",
              "-translate-x-1/2 -translate-y-1/2"
            )}
          />
        </div>
        <p className="wrapper text-2xl z-[1]">
          Biotech.Industries создаст и проведет обучающий курс специально для
          вашей команды
        </p>
      </section>
      <section className="hidden lg:block bg-secondary overflow-clip px-0 max-w-none">
        <div className="wrapper flex flex-row justify-between items-center">
          <div className="relative row-span-2 col-start-1 w-1/6 mx-auto -translate-x-1/2">
            <Image src={Bookmark} alt="" className="w-full rotate-[10.03deg]" />
            <Image
              src={BookmarkGlowMobile}
              alt=""
              className={cn(
                "w-[500%] max-w-none h-auto absolute top-1/2 left-1/2",
                "-translate-x-1/2 -translate-y-1/2"
              )}
            />
          </div>
          <div className="fcol gap-8 basis-1/2 2xl:p-8">
            <h2 className="text-5xl">Не нашли нужный курс?</h2>
            <p className="text-3xl">
              Biotech.Industries создаст и проведет обучающий курс специально
              для вашей команды
            </p>
          </div>
        </div>
      </section>
      <Contacts />
    </main>
  );
}
