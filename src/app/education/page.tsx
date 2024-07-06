import Breadcrumbs from "@/components/ui/custom/breadcrumbs";
import Glow1 from "@public/glow 1.png";
import Lightning from "@public/Lightning.svg";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Smoke from "@public/smoke.png";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Contacts from "@/components/contacts";
import Bookmark from "@public/Bookmark.svg";
import BookmarkGlowMobile from "@public/BookmarkGlowMobile.svg";

const CourseCard = ({
  title,
  date,
}: {
  title: React.ReactNode;
  date: string;
}) => (
  <div
    className={cn(
      "fcol gap-8 p-10 border border-white/60 bg-black relative",
      "rounded-[20px] md:rounded-[30px]",
      "overflow-hidden",
      "hover:border-brand2 hover:shadow-[0px_4px_100px_-50px_hsl(var(--brand2))] transition-all duration-300"
    )}
  >
    <div className="fcol gap-3 md:gap-4 z-[1]">
      <p className="text-brand text-base md:text-2xl">
        Курс повышения квалификации
      </p>
      <h3>{title}</h3>
    </div>
    <div className="fcol md:flex-row gap-3 z-[1] md:gap-[180px]">
      <div className="fcol gap-1 md:gap-2">
        <p className="text-base md:text-2xl">Формат проведения</p>
        <p className="font-bold text-xl md:text-3xl">Дистанционный</p>
      </div>
      <div className="inline-flex items-center gap-8 font-bold text-lg md:text-2xl">
        <ArrowUpRight className="text-brand2 w-8 h-8" />
        {date}
      </div>
    </div>
    <Image
      src={Smoke}
      alt=""
      className="absolute opacity-20 md:-translate-y-1/2 left-0 top-0 md:top-1/2 object-cover h-full"
    />
  </div>
);

export default function Education() {
  return (
    <main>
      <section className="fcol gap-16 relative overflow-x-clip md:overflow-y-hidden max-w-none px-0">
        <Breadcrumbs
          items={[
            { title: "Главная", href: "/" },
            { title: "Наши возможности", href: "/#capabilities" },
            {
              title: "Курсы для биотех-специалистов",
            },
          ]}
        />
        <div className="fcol gap-8 wrapper">
          <Image
            src={Lightning}
            alt=""
            className="md:absolute top-1/2 right-[10%] -z-10 md:translate-x-1/2 md:-translate-y-1/2 max-w-none md:max-h-[75%] rotate-[12.17deg] aspect-square w-1/3"
          />
          <div className="xl:max-w-[70%] fcol gap-8">
            <h1>Курсы для биотех-специалистов</h1>
            <p>
              Наша команда не только разрабатывает технологии и проводит
              исследования, но и делится знаниями
            </p>
          </div>
        </div>
        <Image
          src={Glow1}
          alt=""
          className="absolute top-0 right-0 -z-10 translate-x-1/2 -translate-y-1/2 max-w-none w-[250%] md:w-full min-w-full"
        />
      </section>
      <section className="fcol gap-16">
        <h2>Наши курсы</h2>
        <div className="fcol gap-8">
          <h3 className="border-b-2 border-brand2 pb-3">Предстоящие курсы</h3>
          <Link href="#">
            <CourseCard
              title="Светлое лагерное пиво: сырьё, технология, качество"
              date="16 сентября - 21 октября"
            />
          </Link>
        </div>
        <div className="fcol gap-8">
          <h3 className="border-b-2 border-brand2 pb-3">Архивные курсы</h3>
          <Link href="#">
            <CourseCard
              title="Технологические аспекты использования дрожжей в пивоварении"
              date="Архивный курс"
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
      <section className="hidden lg:block bg-secondary overflow-hidden px-0 max-w-none">
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
          <div className="fcol gap-8 basis-1/2">
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
