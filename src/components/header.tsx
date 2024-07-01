// "use client";

import Image from "next/image";
import HeaderButton from "./header.button";
import BiotechTextLogo from "@public/Biotech-Logotype.svg";
import { cn } from "@/lib/utils";
// import { Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

// const MobileMenu = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <Button
//         icon={<MenuOutlined />}
//         ghost
//         type="text"
//         onClick={() => setOpen(true)}
//         style={{ color: "white" }}
//       />
//       <Drawer
//         placement="top"
//         open={open}
//         onClose={() => setOpen(false)}
//         styles={{ header: { display: "none" } }}
//       >
//         <p>Some contents...</p>
//         <p>Some contents...</p>
//         <p>Some contents...</p>
//       </Drawer>
//     </>
//   );
// };

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side={"top"} className="h-full">
        <SheetHeader>
          <SheetTitle>
            <Image src={BiotechTextLogo} alt="Biotech" className="w-[165px]" />
          </SheetTitle>
          <SheetDescription>
            <div className="flex flex-col gap-2 items-start">
              <Link href="#">Ссылка 1</Link>
              <Link href="#">Ссылка 2</Link>
              <Link href="#">Ссылка 3</Link>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default function Header() {
  return (
    <header className="w-full flex flex-row justify-between items-center gap-4 wrapper fixed bg-default z-10">
      <a href="#" className={cn("w-[165px]")}>
        <Image src={BiotechTextLogo} alt="Biotech" />
      </a>
      <MobileMenu />
      {/* <div className="flex flex-row gap-2 md:gap-4 lg:gap-6 xl:gap-10">
        <HeaderButton href="#">О нас</HeaderButton>
        <HeaderButton href="#">Наши возможности</HeaderButton>
        <HeaderButton href="#">Экспертный состав</HeaderButton>
        <HeaderButton href="#">Клиенты и партнеры</HeaderButton>
        <HeaderButton href="#">Ответы на вопросы</HeaderButton>
        <HeaderButton href="#">Контакты</HeaderButton>
      </div> */}
    </header>
  );
}
