import Star from "@public/Star.svg";
import Image, { StaticImageData } from "next/image";
import Meledina from "@public/Meledina.png";
import Eremeeva from "@public/Eremeeva.png";
import Ivanova from "@public/Ivanova.png";
import Hanturgaev from "@public/Hanturgaev.png";
import Fedorov from "@public/Fedorov.png";
import Ishevsky from "@public/Ishevsky.png";
import Contacts from "@/components/contacts";
import FirstSection from "@/components/first.section";

const Expert = ({
  image,
  name,
  desc,
}: {
  image: StaticImageData;
  name: string;
  desc: React.ReactNode;
}) => (
  <div className="fcol xl:flex-row gap-4 md:gap-32 3xl:gap-[230px] xl:items-center">
    <Image
      src={image}
      alt={name}
      className="w-1/2 h-fit aspect-square max-w-[405px]"
    />
    <div className="fcol gap-[inherit] md:gap-8">
      <h3 className="text-brand2">{name}</h3>
      <p>{desc}</p>
    </div>
  </div>
);

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
        <Expert
          image={Meledina}
          name="Т.В. Меледина"
          desc={<>Эксперт в области биотехнологии дрожжей, солода и пива</>}
        />
        <Expert
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
        <Expert
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
        <Expert
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
        <Expert
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
        <Expert
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
