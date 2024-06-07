import HeaderButton from "./header.button";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between items-center gap-4">
      <a
        href="#"
        className={[
          "bg-primary-white text-primary-black",
          "text-base md:text-lg lg:text-xl xl:text-2xl",
          "px-[20px] py-[10px]",
          "md:px-[30px] md:py-[12px]",
          "lg:px-[40px] lg:py-[12px]",
          "xl:px-[67px] xl:py-[12px]",
        ].join(" ")}
      >
        Лого
      </a>
      <div className="flex flex-row gap-2 md:gap-4 lg:gap-6 xl:gap-10">
        <HeaderButton href="#">О нас</HeaderButton>
        <HeaderButton href="#">Наши возможности</HeaderButton>
        <HeaderButton href="#">Экспертный состав</HeaderButton>
        <HeaderButton href="#">Клиенты и партнеры</HeaderButton>
        <HeaderButton href="#">Ответы на вопросы</HeaderButton>
        <HeaderButton href="#">Контакты</HeaderButton>
      </div>
    </div>
  );
}
