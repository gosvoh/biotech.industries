import Link from "next/link";
import Button from "./ui/custom/button";
import dynamic from "next/dynamic";

const YandexMap = dynamic(async () => import("@/components/yandex.map"), {
  ssr: false,
});

export default function Contacts() {
  return (
    <section className="fcol gap-8 px-0" id="contacts">
      <div className="fcol gap-16 lg:grid lg:grid-rows-2 lg:grid-cols-2 lg:grid-flow-col wrapper w-full">
        <h2 className="text-left md:text-4xl xl:text-5xl">Контакты</h2>

        <div className="fcol gap-6 md:text-3xl 2xl:text-4xl">
          <p>
            Санкт-Петербург
            <br />
            Ломоносова ул., 9
          </p>
          <Link className="font-bold md:hidden" href="mailto:biotech@itmo.ru">
            biotech@itmo.ru
          </Link>
        </div>
        <Link
          className="font-bold hidden md:block md:text-4xl xl:text-5xl"
          href="mailto:biotech@itmo.ru"
        >
          biotech@itmo.ru
        </Link>
        <Button className="w-full md:w-fit">Обсудить проект</Button>
      </div>

      <YandexMap className="w-full aspect-square max-h-[600px] mt-16" />
    </section>
  );
}
