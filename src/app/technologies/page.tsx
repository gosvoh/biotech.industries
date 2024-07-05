import Button from "@/components/ui/custom/button";
import Glow1 from "@public/glow 1.png";
import Image from "next/image";
import Star from "@public/Soft Star.svg";
import Worm from "@public/Worm.svg";
import { cn } from "@/lib/utils";
import Contacts from "@/components/contacts";

const Schema = ({
  color,
  items,
  title,
  className,
}: {
  color: "brand" | "brand2";
  title: string;
  items: string[];
  className?: string;
}) => (
  <div className={cn("fcol gap-8", className)}>
    <h4 className={`border-b border-${color} pb-3`}>{title}</h4>
    <div role="list">
      {items.map((item, i) => (
        <p className={color} role="listitem" key={`schema-item-${i}`}>
          {item}
        </p>
      ))}
    </div>
  </div>
);

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
    <h4 className="text-brand2">{title}</h4>
    <ol className="list-disc list-inside fcol gap-4 ml-4">
      {items.map((item, i) => (
        <li key={`tech-item-${i}`}>{item}</li>
      ))}
    </ol>
  </div>
);

export default function Technologies() {
  return (
    <main>
      <section className="fcol gap-16 pt-[290px] md:pt-[231px] relative overflow-hidden max-w-none px-0">
        <div className="wrapper">
          <div className="fcol gap-8 md:max-w-[75%]">
            <h2>Разработка технологий и проведение научных исследований</h2>
            <p>
              Наша команда биотехнологов разработает законченное решение по
              вашему запросу
            </p>
          </div>
        </div>
        <Image
          src={Glow1}
          alt=""
          className="absolute top-0 right-0 -z-10 translate-x-1/2 -translate-y-1/2 max-w-none w-[250%] md:w-full min-w-full"
        />
        <Image
          src={Star}
          alt=""
          className="absolute left-10 md:left-auto top-10 md:top-1/2 md:-translate-y-1/2 -rotate-[6.06deg] md:-right-32 -z-10 aspect-square h-1/3 md:h-2/5 xl:h-4/5 w-fit"
        />
      </section>
      <section className="md:bg-secondary md:relative overflow-hidden max-w-none px-0">
        <div className="fcol gap-16 md:flex-row wrapper">
          <h3 className="relative z-[1] md:flex-1">
            Схема взаимодействия
            <Image
              src={Worm}
              alt=""
              className="absolute top-0 -right-16 -z-10 h-full w-fit md:hidden"
            />
          </h3>
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
              className="z-[1]"
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
        <div className="wrapper fcol gap-16 lg:flex-row">
          <div className="fcol gap-16 flex-1">
            <div className="fcol gap-4">
              <h3>Разработанные технологии</h3>
              <p>
                Если задача заключается в решении какой-либо проблемы,
                рекомендуем провести{" "}
                <span className="text-brand2">хакатон</span> вместе с
                Biotech.Industries
              </p>
            </div>
            <Button className="w-full md:w-fit">Обсудить проект</Button>
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
      <section className="fcol gap-16 lg:flex-row">
        <div className="fcol gap-16 flex-1">
          <div className="fcol gap-4">
            <h3>Проведенные исследования</h3>
            <p>
              Если задача заключается в решении какой-либо проблемы, рекомендуем
              провести <span className="text-brand2">хакатон</span> вместе с
              Biotech.Industries
            </p>
          </div>
          <Button className="w-full md:w-fit">Обсудить проект</Button>
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
