import Button from "@/components/ui/custom/button";
import Image from "next/image";
import Star from "@public/Soft Star.svg";
import Worm from "@public/Worm.svg";
import { cn } from "@/lib/utils";
import Contacts from "@/components/contacts";
import Link from "next/link";
import { Schema } from "@/components/schema";
import FirstSection from "@/components/first.section";
import type { Metadata } from "next";

const newMeta = {
  title:
    "Biotech.Industries - Разработка технологий и проведение научных исследований",
  description:
    "Biotech.Industries - Наша команда биотехнологов разработает законченное решение по вашему запросу",
};

export const metadata: Metadata = {
  ...newMeta,
  openGraph: { ...newMeta },
  twitter: { ...newMeta },
};

const TechList = ({
  title,
  items,
  className,
}: {
  title: string;
  items: string[];
  className?: string;
}) => (
  <div className={cn("fcol gap-4", className)}>
    <h3 className="text-brand2">{title}</h3>
    <ul className="list-disc list-inside fcol gap-4 ml-4 md:text-2xl">
      {items.map((item, i) => (
        <li key={`tech-item-${i}`}>{item}</li>
      ))}
    </ul>
  </div>
);

export default function Technologies() {
  return (
    <main>
      <FirstSection
        image={Star}
        title="Разработка технологий и проведение научных исследований"
        subtitle="Наша команда биотехнологов разработает законченное решение по вашему запросу"
        breadcrumbs={[
          { title: "Главная", href: "/" },
          { title: "Наши возможности", href: "/#capabilities" },
          {
            title: "Разработка технологий и проведение научных исследований",
          },
        ]}
      />
      <section className="md:bg-secondary md:relative overflow-hidden max-w-none px-0">
        <div className="fcol gap-16 xl:flex-row wrapper">
          <h2 className="relative z-[1] md:flex-1">
            Схема взаимодействия
            <Image
              src={Worm}
              alt=""
              className="absolute top-0 -right-16 -z-10 h-full w-fit md:hidden"
            />
          </h2>
          <div className="fcol gap-16 md:flex-1">
            <Schema
              color="brand2"
              title="Есть техническое задание"
              className="z-[1]"
              items={[
                "Обсуждение технического задания",
                "Формирование проектной группы с участием экспертов Biotech.Industries",
                "Согласование коммерческого предложения",
                "Разработка технологии / проведение исследования",
              ]}
            />
            <Schema
              color="brand"
              title="Нет технического задания"
              className="z-[1] border-brand"
              items={[
                "Проведение установочной встречи с командой Biotech.Industries",
                "Подготовка и утверждение ТЗ",
                "Согласование коммерческого предложения",
                "Разработка технологии / проведение исследования",
              ]}
            />
          </div>
        </div>

        <Image
          src={Worm}
          alt=""
          className={cn(
            "absolute left-[5%] md:bottom-[10%] xl:bottom-[15%] z-0 w-fit hidden md:block rotate-[50.67deg]",
            "w-4/5 xl:w-[70%] max-h-none max-w-none",
            "-translate-x-1/2 translate-y-1/2"
          )}
        />
      </section>
      <section className="border-y-2 border-white max-w-none px-0">
        <div className="wrapper fcol gap-16 xl:flex-row">
          <div className="fcol gap-8 md:gap-16 flex-1">
            <div className="fcol gap-4">
              <h2>Разработанные технологии</h2>
              <p className="md:text-2xl">
                Если задача заключается в решении какой-либо проблемы,
                рекомендуем провести{" "}
                <Link href="/event#hack" className="text-brand2 underline">
                  хакатон
                </Link>{" "}
                вместе с Biotech.Industries
              </p>
            </div>
            <Button />
          </div>
          <div className="fcol gap-16 flex-1">
            <div className="fcol gap-8">
              <TechList
                title="Пищевые продукты"
                items={[
                  "Функциональный напиток для лиц, страдающих артериальной гипертензией",
                  "Рецептура безглютеновой продукции с клетчаткой подорожника (псиллиум)",
                  "Желейные конфеты с использованием гидролизата морского коллагена",
                  "Зефир с добавлением ламинарии на основе пектина из топинамбура",
                  "Суп из рыбных субпродуктов с использованием пророщенного зерна",
                  "Ферментированный пищевой продукт на основе сои (натто, тофу, соевый соус)",
                ]}
              />
              <TechList
                title="Ингредиенты"
                items={[
                  "Растительный белок из жмыха масляничных культур (подсолнечник, лён, конопля)",
                  "Биологически активный экстракт скорлупы грецкого ореха",
                  "Солезаменитель для применения в пищевой промышленности",
                  "Технический биоэтанол из многолетних травянистых растений",
                  "Пектин и инулин из топинамбура с использованием пищевых кислот",
                  "Антиоксидантный комплекс из бурых водорослей",
                  "Дрожжевой автолизат из остаточных дрожжей",
                  "Кормовой витамин B12",
                  "Гидролиз высокобелкового растительного сырья и выбор пищевой основы для введения гидролизатов",
                ]}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="fcol gap-16 xl:flex-row">
        <div className="fcol gap-8 md:gap-16 flex-1">
          <div className="fcol gap-4">
            <h2>Проведенные исследования</h2>
            <p className="md:text-2xl">
              Если задача заключается в решении какой-либо проблемы, рекомендуем
              провести{" "}
              <Link href="/event#hack" className="text-brand2 underline">
                хакатон
              </Link>{" "}
              вместе с Biotech.Industries
            </p>
          </div>
          <Button />
        </div>
        <TechList
          className="flex-1"
          title="Ресурсосбережение, рационализация, совершенствование процессов"
          items={[
            "Увеличение концентрации биологически активных веществ в пищевых продуктах путем применения технологии микроинкапсулирования",
            "Использование пивной дробины для создания биоразлагаемой посуды",
            "Определение концентрации вещества в сырье",
          ]}
        />
      </section>
      <Contacts />
    </main>
  );
}
