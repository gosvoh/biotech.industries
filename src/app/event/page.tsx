import Depth from "@public/Depth.svg";
import Image from "next/image";
import Contacts from "@/components/contacts";
import Worm from "@public/Worm.svg";
import Button from "@/components/ui/custom/button";
import { cn } from "@/lib/utils";
import { PlusSquareFilled } from "@ant-design/icons";
import Link from "next/link";
import Glow2 from "@public/glow 2.png";
import { ExternalLink } from "lucide-react";
import Carousel from "@/components/carousel";
import { Schema } from "@/components/schema";
import FirstSection from "@/components/first.section";

const PlusList = ({
  items,
}: {
  items: {
    title: string;
    description: string;
  }[];
}) => (
  <div role="list" className="fcol gap-5">
    {items.map((item, i) => (
      <div
        role="listitem"
        className="flex flex-row items-start list-none"
        key={`plus-list-item-${i}`}
      >
        <PlusSquareFilled className="!text-brand text-[42px] md:text-[78px]" />
        <div className="fcol gap-[10px] bg-secondary md:bg-transparent px-6 py-5 md:pt-0">
          <h4>{item.title}</h4>
          <p className="text-base md:text-2xl">{item.description}</p>
        </div>
      </div>
    ))}
  </div>
);

const EventList = ({
  items,
}: {
  items: {
    href: React.ComponentProps<typeof Link>["href"];
    linkTitle: string;
    description: string;
  }[];
}) => (
  <ul className="list-disc list-inside fcol gap-4 ml-4">
    {items.map((item, i) => (
      <li key={`event-item-${i}`}>
        <Link
          target="_blank"
          href={item.href}
          className="text-brand2 underline"
        >
          {item.linkTitle}
        </Link>{" "}
        {item.description}
      </li>
    ))}
  </ul>
);

const PriceAndEvents = ({
  price,
  events,
}: {
  price: number;
  events: React.ComponentProps<typeof EventList>["items"];
}) => (
  <div className="fcol gap-8 xl:flex-row xl:justify-between wrapper">
    <section className="fcol gap-4 w-fit xl:max-w-[50%]">
      <h3 className="text-3xl md:text-4xl">Стоимость</h3>
      <p className="price">
        от <span>{price}</span> тыс. руб.
      </p>
      <p className="self-end">Призовой фонд включен</p>
      <Button className="hidden md:block mt-16" />
    </section>
    <section className="fcol gap-8 flex-1 xl:max-w-[40%]">
      <h3 className="text-3xl md:text-4xl">Проведенные мероприятия</h3>
      <EventList items={events} />
      <Button className="mt-8 md:hidden" />
    </section>
  </div>
);

export default function Event() {
  return (
    <main>
      <FirstSection
        image={Depth}
        title="Организация мероприятий"
        subtitle="Наша команда организует мероприятие по вашему запросу"
        breadcrumbs={[
          { title: "Главная", href: "/" },
          { title: "Наши возможности", href: "/#capabilities" },
          {
            title: "Организация мероприятий",
          },
        ]}
      />

      <section className="max-w-none px-0 fcol gap-16 md:gap-[240px] md:border-y-2 md:border-white overflow-hidden md:bg-secondary">
        <section className="fcol gap-8 xl:flex-row xl:justify-between wrapper">
          <div className="fcol gap-3 flex-1 relative xl:max-w-3/8">
            <h2 className="z-[1]">Марафон идей</h2>
            <p className="z-[1]">
              Результат мероприятия - ряд инновационных идей, предложенных
              молодыми учеными согласно поставленной задаче
            </p>
            <Image
              src={Glow2}
              alt=""
              className="absolute top-1/3 left-0 -translate-x-1/2 -translate-y-1/2 w-[150%] max-w-none opacity-40 hidden md:block"
            />
          </div>
          <div className="fcol gap-6 flex-1 xl:max-w-1/2">
            <h3>Плюсы</h3>
            <PlusList
              items={[
                {
                  title: "Нестандартный подход",
                  description:
                    "Молодые специалисты помогут найти инновационные идеи для технологий и продуктов",
                },
                {
                  title: "Динамичный формат",
                  description: "Традиционно марафон идей длится до 2-х недель ",
                },
                {
                  title: "Реализация идеи",
                  description:
                    "Выбранная вами идея может быть передана в разработку команде Biotech.Industries",
                },
              ]}
            />
          </div>
        </section>

        <section className="relative overflow-x-clip">
          <div className="fcol gap-6 md:gap-16 wrapper">
            <div className="fcol gap-2 z-[1]">
              <h3>Схема взаимодействия</h3>
              <p className="text-lg md:text-3xl">
                Команда Biotech.Industries организует марафон идей под ключ
              </p>
            </div>
            <Schema
              color="brand2"
              className="text-lg md:text-3xl z-[1]"
              items={[
                "Обсуждение запроса и формирование кейсов",
                "Определение формата проведения",
                "Подготовка и проведение марафона идей командой Biotech.Industries",
              ]}
            />
          </div>
          <Image
            src={Worm}
            alt=""
            className={cn(
              "absolute top-1/2 -right-16 w-1/2 h-fit rotate-[28.54deg] -translate-y-1/2",
              "md:rotate-180 md:w-1/5"
            )}
          />
        </section>

        <PriceAndEvents
          price={300}
          events={[
            {
              href: "https://vk.com/wall-203191795_629",
              linkTitle: "Марафон идей",
              description: "от компании VIOLA",
            },
          ]}
        />
      </section>

      <section
        id="hack"
        className="max-w-none px-0 fcol gap-16 md:gap-[240px] md:border-b-2 md:border-white overflow-hidden"
      >
        <section className="fcol gap-8 xl:flex-row xl:justify-between wrapper">
          <div className="fcol gap-3 flex-1 relative xl:max-w-3/8">
            <h2>Хакатон</h2>
            <p>
              Параллельная работа нескольких научных групп, основной задачей
              которой является создание прототипа продукта
            </p>
            <Image
              src={Glow2}
              alt=""
              className="absolute top-1/3 left-0 -z-10 -translate-x-1/2 -translate-y-1/2 w-[150%] max-w-none opacity-40 hidden md:block"
            />
          </div>
          <div className="fcol gap-6 flex-1 xl:max-w-1/2">
            <h3>Плюсы</h3>
            <PlusList
              items={[
                {
                  title: "Решение технической задачи",
                  description:
                    "Комплексный подход молодых ученых по решению задачи и разработке MVP продукта",
                },
                {
                  title: "Привлечение новых сотрудников",
                  description:
                    "Самые талантливые ученые могут стать частью вашей компании",
                },
                {
                  title: "Повышение узнаваемости компании",
                  description:
                    "Формирование образа инновационной и динамично развивающейся компании",
                },
              ]}
            />
          </div>
        </section>

        <section className="relative overflow-x-clip">
          <div className="fcol gap-6 md:gap-16 wrapper">
            <div className="fcol gap-2 z-[1]">
              <h3>Схема взаимодействия</h3>
              <p className="text-lg md:text-3xl">
                Команда BioTech.Industries организует хакатон под ключ
              </p>
            </div>
            <Schema
              color="brand2"
              className="text-lg md:text-3xl z-[1]"
              items={[
                "Обсуждение запроса и формулирование задачи",
                "Определение формата проведения",
                "Подготовка и проведение хакатона командой Biotech.Industries",
                "Презентация новых идей, технологий и продуктов, готовых к внедрению",
              ]}
            />
          </div>
          <Image
            src={Worm}
            alt=""
            className={cn(
              "absolute top-1/2 -right-16 w-1/2 h-fit rotate-[28.54deg] -translate-y-1/2",
              "md:rotate-180 md:w-1/5"
            )}
          />
        </section>

        <PriceAndEvents
          price={500}
          events={[
            {
              href: "https://vk.com/wall-203191795_1315",
              linkTitle: "Хакатон",
              description: '"Балтийский берег"',
            },
            {
              href: "https://vk.com/wall-203191795_272",
              linkTitle: "БиоХакатон",
              description: "by САДЫ ПЛЕСКАВЫ",
            },
            {
              href: "https://vk.com/wall-203191795_487",
              linkTitle: "Хакатон",
              description: '"Продажа крафтовых напитков" by САДЫ ПЛЕСКАВЫ',
            },
            {
              href: "https://vk.com/wall-203191795_899",
              linkTitle: "Хакатон",
              description: "от компании INARCTICA by BioTech ITMO",
            },
          ]}
        />
      </section>

      <section className="max-w-none px-0 md:bg-secondary">
        <div className="wrapper fcol gap-8 md:gap-16 xl:gap-32">
          <div className="fcol gap-8 xl:flex-row xl:justify-between">
            <div className="fcol gap-3 flex-1 relative xl:max-w-[50%] md:text-2xl">
              <h2 className="z-[1]">Конференция</h2>
              <p className="z-[1]">
                Команда Biotech.Industries организует для вас мероприятие под
                ключ.
              </p>
              <p className="z-[1]">
                В декабре 2023 года мы провели международную биотехнологическую
                конференцию «BIOCON 2023» в г. Альметьевск.
              </p>
              <p className="z-[1]">
                Основные секции BIOCON — пленарные доклады в стиле TED,
                параллельные сессии, научный баттл, мастер-классы, а также
                мероприятия для нетворкинга и культурного отдыха. Среди
                пленарных спикеров – титулованные ученые со всего мира.
              </p>
              <Image
                src={Glow2}
                alt=""
                className="absolute top-1/3 left-0 -translate-x-1/2 -translate-y-1/2 w-[150%] max-w-none opacity-40 hidden md:block"
              />
            </div>
            <div className="md:fcol gap-6 font-bold xl:max-w-3/8 flex-1 hidden">
              <Link
                href="https://biocon.international"
                className="text-brand2 underline inline-flex items-center gap-6"
                target="_blank"
              >
                <ExternalLink />
                Ссылка на конференцию
              </Link>
              <p className="text-4xl">Стоимость</p>
              <p className="text-5xl text-brand">По запросу</p>
              <Button className="mt-8" />
            </div>
            <div className="fcol gap-8 md:hidden font-bold py-16">
              <p className="text-3xl">Стоимость</p>
              <p className="text-4xl text-brand">По запросу</p>
            </div>
          </div>

          <Carousel />
        </div>
      </section>
      <Contacts />
    </main>
  );
}
