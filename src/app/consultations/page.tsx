import Star from "@public/Star.svg";
import Meledina from "@public/humans/Meledina.png";
import Eremeeva from "@public/humans/Eremeeva.png";
import Ivanova from "@public/humans/Ivanova.png";
import Hanturgaev from "@public/humans/Hanturgaev.png";
import Fedorov from "@public/humans/Fedorov.png";
import Ishevsky from "@public/humans/Ishevsky.png";
import Contacts from "@/components/contacts";
import FirstSection from "@/components/first.section";
import { HumanCard } from "@/components/human.card";
import type { Metadata } from "next";

const newMeta = {
  title: "Biotech.Industries - Консультации для бизнеса",
  description:
    "Biotech.Industries - Не можете найти ошибку в рецептуре нового продукта? Нужна помощь в подборе необходимого оборудования? Эксперты Biotech.Industries готовы делиться опытом и помогать в решении ваших задач",
};

export const metadata: Metadata = {
  ...newMeta,
  openGraph: { ...newMeta },
  twitter: { ...newMeta },
};

export default function Consultations() {
  return (
    <main>
      <FirstSection
        image={Star}
        title="Консультации для бизнеса"
        subtitle="Не можете найти ошибку в рецептуре нового продукта? Нужна помощь в подборе необходимого оборудования? Эксперты Biotech.Industries готовы делиться опытом и помогать в решении ваших задач"
        breadcrumbs={[
          { title: "Главная", href: "/" },
          { title: "Наши возможности", href: "/#capabilities" },
          {
            title: "Консультации для бизнеса",
          },
        ]}
      />
      <section className="fcol gap-20 wrapper">
        <HumanCard
          image={Meledina}
          name="Т.В. Меледина"
          desc={<>Эксперт в области биотехнологии дрожжей, солода и пива</>}
        />
        <HumanCard
          image={Eremeeva}
          name="Н.Б. Еремеева"
          desc={
            <>
              Эксперт в области извлечения биоактивных компонентов из
              растительного сырья, разработки функциональных и
              специализированных продуктов питания, упаковки и хранения сырья и
              готовых продуктов, разработке биоразлогаемых материалов.
              Специалист в области нутрициологии
            </>
          }
        />
        <HumanCard
          image={Ivanova}
          name="В.А. Иванова"
          desc={
            <>
              Эксперт в области микробиологии напитков брожения, качества и
              безопасности пищевых продуктов, микробного синтеза полисахаридов,
              санитарии и гигиены пищевых производств
            </>
          }
        />
        <HumanCard
          image={Hanturgaev}
          name="А.Г. Хантургаев"
          desc={
            <>
              Эксперт в области разработки инновационных технологий переработки
              растительного сырья, организации производства под ключ,
              конструирования инновационных продуктов здорового питания,
              разработке и утверждении НТД на производимую продукцию
            </>
          }
        />
        <HumanCard
          image={Fedorov}
          name="А.В. Федоров"
          desc={
            <>
              Эксперт в области пищевых систем, процессах переноса массы и
              энергии в многокомпонентных многофазных средах, включая области
              фазовых превращений
            </>
          }
        />
        <HumanCard
          image={Ishevsky}
          name="А.Л. Ишевский"
          desc={
            <>
              Эксперт в области хранения и переработки сырья животного
              происхождения, сенсорного анализа, пищевой химии, качества и
              безопасности сырья и продуктов питания
            </>
          }
        />
      </section>
      <Contacts />
    </main>
  );
}
