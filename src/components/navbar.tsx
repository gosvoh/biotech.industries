import HeaderButton from "./header.button";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between items-center">
      <a
        href="#"
        className="bg-primary-white text-primary-black px-[67px] py-[12px]"
      >
        Лого
      </a>
      <div className="flex flex-row gap-10">
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
