/* eslint-disable react/jsx-key */

import Breadcrumbs from "@/components/ui/custom/breadcrumbs";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Smoke from "@public/smoke.png";
import Lines from "@public/Lines.svg";
import { ArrowUpRight, ExternalLinkIcon } from "lucide-react";
import Dawn from "@public/Dawn.svg";
import React from "react";
import Dude from "@public/humans/Dude.png";
import Zoom from "@public/zoom.png";
import GlowRound from "@public/GlowRound.svg";
import { HumanCard } from "@/components/human.card";
import { Schema } from "@/components/schema";
import Contacts from "@/components/contacts";
import type Button from "@/components/ui/custom/button";
import Arrow from "@public/Arrow.svg";

export default function Course({
  breadcrumb,
  title,
  description,
  format,
  date,
  youWillLearn,
  results,
  forWhom,
  teachers,
  programTitle,
  program,
  pros,
  price,
  link,
  buttonProps,
}: {
  breadcrumb: string;
  title: string;
  description: string;
  format: "Дистанционный" | "Очно-заочный";
  date: string;
  youWillLearn: React.ReactNode[];
  results: React.ReactNode[];
  forWhom: string;
  teachers: {
    image: StaticImageData;
    name: string;
    position: string;
    description: string;
  }[];
  programTitle: string;
  program: {
    title: string;
    description: string;
  }[];
  pros: {
    icon: StaticImageData;
    description: string;
  }[];
  price: number | { fixed: boolean; value: number };
  link: React.ComponentPropsWithoutRef<typeof Link>["href"];
  buttonProps?: React.ComponentPropsWithoutRef<typeof Button>;
}) {
  return (
    <main>
      <section className="fcol gap-16 relative overflow-x-clip md:overflow-y-hidden max-w-none px-0">
        <Breadcrumbs
          items={[
            { title: "Главная", href: "/" },
            { title: "Наши возможности", href: "/#capabilities" },
            {
              title: "Курсы для биотех-специалистов",
              href: "/education",
            },
            { title: breadcrumb },
          ]}
        />
        <div className="fcol gap-8 wrapper">
          <div className="xl:max-w-[70%] fcol gap-4">
            <p className="text-brand text-lg md:text-2xl">
              Курс повышения квалификации
            </p>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>

        <div className="fcol md:flex-row gap-6 z-[1] md:gap-8 lg:gap-24 xl:gap-[180px] wrapper md:items-center">
          <div className="fcol gap-1 md:gap-2">
            <p className="text-base md:text-2xl">Формат проведения</p>
            <p className="font-bold text-xl md:text-3xl">Дистанционный</p>
          </div>
          <div className="fcol gap-1 md:gap-2">
            <p className="text-base md:text-2xl">Даты проведения</p>
            <div className="inline-flex items-center gap-4 md:gap-5 lg:gap-6 xl:gap-7 2xl:gap-8 font-bold text-lg md:text-2xl">
              <ArrowUpRight className="text-brand2 w-8 h-8" />
              {date}
            </div>
          </div>
        </div>

        <Image
          src={Smoke}
          alt=""
          className="hidden md:block absolute opacity-20 -z-10 md:-translate-y-1/2 left-0 top-0 md:top-1/2 object-cover h-full w-full mix-blend-hard-light"
        />
        <Image
          src={Lines}
          alt=""
          className={cn(
            "absolute -rotate-[18.6deg] top-[15%] -right-10 -z-10 translate-x-1/3 -translate-y-1/2 object-cover",
            "xl:rotate-0 xl:top-1/2 xl:right-20 xl:h-[250%]"
          )}
        />
      </section>

      <section className="md:bg-secondary relative max-w-none px-0 overflow-hidden">
        <div className="wrapper space-y-16">
          <h2 className="z-[1]">Вы научитесь</h2>
          <div className="fcol gap-5 xl:flex-row xl:max-w-3/4 z-[1]">
            {youWillLearn.map((item, i) => (
              <React.Fragment key={`youWillLearn-${i}`}>{item}</React.Fragment>
            ))}
          </div>
        </div>
        <Image
          src={Dawn}
          alt=""
          className={cn(
            "absolute right-0 md:right-10 top-0 h-full aspect-square",
            "translate-x-1/2 max-h-[30vh] md:max-h-none"
          )}
        />
      </section>

      <section className="relative max-w-none px-0 overflow-hidden">
        <div className="space-y-16">
          <Image
            src={Arrow}
            alt=""
            className="wrapper xl:hidden w-1/3 h-auto text-brand2 ml-0"
          />
          <h2 className="wrapper">По итогам прохождения курса вы сможете</h2>
          <div className="relative">
            <div className="wrapper">
              <div className="fcol gap-5 xl:flex-row xl:max-w-3/4 z-[1] ml-auto">
                {results.map((item, i) => (
                  <React.Fragment key={`youWillLearn-${i}`}>
                    {item}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <Image
              src={Arrow}
              alt=""
              className="hidden xl:block absolute top-0 -z-10 -left-10 h-full aspect-square text-brand2"
            />
          </div>
        </div>
      </section>

      <section className="md:bg-secondary max-w-none px-0">
        <div className="wrapper fcol gap-16 xl:flex-row xl:justify-between xl:items-center">
          <div className="fcol gap-8 xl:gap-16 xl:max-w-1/2 flex-1">
            <h2 className="text-balance">
              На <span className="uppercase text-brand2">кого</span> рассчитан
              курс
            </h2>
            <Image
              src={Dude}
              alt=""
              className="w-1/2 h-fit aspect-square max-w-[405px] xl:hidden"
            />
            <p>{forWhom}</p>
          </div>
          <Image
            src={Dude}
            alt=""
            className="w-full h-fit aspect-square max-w-1/4 hidden xl:block flex-1"
          />
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="xl:hidden">Формат</h2>
        <div className="fcol gap-8 md:gap-16 xl:flex-row xl:justify-between xl:items-center">
          <div className="relative xl:max-w-1/2 w-full">
            <Image src={Zoom} alt="" className="w-full h-auto" />
            <Image
              src={GlowRound}
              alt=""
              className="-z-10 absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square w-full max-w-none"
            />
          </div>
          <div className="xl:max-w-3/8 space-y-10">
            <h2 className="hidden xl:block">Формат</h2>
            <p className="">
              {format === "Дистанционный"
                ? "Заочный с применением дистанционных образовательных технологий (Zoom)"
                : "Очно-заочный с применением дистанционных образовательных технологий (Zoom)"}
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-16">
        <h2>Разработчики и преподаватели курса</h2>
        {teachers.map((teacher, i) => (
          <HumanCard
            key={`teacher-${i}`}
            image={teacher.image}
            name={teacher.name}
            position={teacher.position}
            desc={teacher.description}
          />
        ))}
      </section>

      <section className="space-y-16">
        <h2>{programTitle}</h2>
        <Schema
          color="brand2"
          className="xl:max-w-3/4"
          listItemClassName="hover:bg-secondary p-5 transition-colors duration-300"
          items={program.map((item) => (
            <div className="space-y-3 md:space-y-4">
              <p className="font-bold">{item.title}</p>
              <p>{item.description}</p>
            </div>
          ))}
        />
      </section>

      <section className="space-y-16">
        <h2>Преимущества курса</h2>
        <div className="fcol gap-5 xl:flex-row flex-wrap">
          {pros.map((pro, i) => (
            <div
              className="p-10 space-y-8 rounded-lg border border-white xl:min-w-[405px] flex-1"
              key={`pros-${i}`}
            >
              <Image
                src={pro.icon}
                alt=""
                className="aspect-square w-40 h-40"
              />
              <p>{pro.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="fcol gap-16 xl:flex-row xl:justify-between xl:items-center">
        <div className="fcol gap-3 xl:max-w-1/2">
          <h2>Стоимость участия</h2>
          <p className="price">
            {typeof price === "object" && !price.fixed ? "от " : ""}
            <span className="">
              {typeof price === "object" ? price.value : price}
            </span>{" "}
            тыс. руб.
          </p>
        </div>
        <div className="p-10 rounded-lg space-y-6 border border-brand2 xl:max-w-3/8">
          <p>
            Для предварительной регистрации и получения подробной информации о
            курсе заполните пожалуйста форму
          </p>
          <Link
            href={link}
            className="text-brand2 font-bold text-2xl underline inline-flex items-center gap-6"
          >
            <ExternalLinkIcon />
            Оставить заявку
          </Link>
        </div>
      </section>

      <Contacts buttonProps={buttonProps} />
    </main>
  );
}
