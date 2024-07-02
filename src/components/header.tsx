import Image from "next/image";
import BiotechTextLogo from "@public/Biotech-Logotype.svg";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { MenuIcon, X } from "lucide-react";
import Link from "next/link";
import React from "react";

const links: {
  href: React.ComponentPropsWithoutRef<typeof Link>["href"];
  text: string;
}[] = [
  { href: "/#top", text: "О нас" },
  { href: "/#capabilities", text: "Наши возможности" },
  { href: "/#contacts", text: "Контакты" },
];

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost">
          <MenuIcon className="w-10 h-10" />
        </Button>
      </SheetTrigger>
      <SheetContent side={"top"} className="h-full">
        <SheetHeader className="fcol gap-20">
          <SheetTitle className="flex flex-row justify-between items-center">
            <Image src={BiotechTextLogo} alt="Biotech" className="w-[165px]" />
            <SheetClose>
              <X className="w-10 h-10" />
              <span className="sr-only">Close</span>
            </SheetClose>
          </SheetTitle>
          <SheetDescription>
            <div className="flex flex-col gap-8 items-start text-3xl font-bold">
              {links.map(({ href, text }, i) => (
                <SheetClose asChild key={`link-${i}`}>
                  <Link href={href}>{text}</Link>
                </SheetClose>
              ))}
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default function Header() {
  return (
    <header className="w-full flex flex-row justify-between items-center gap-4 wrapper p-10 sticky top-0 bg-default z-10">
      <a href="#" className={cn("w-[165px]")}>
        <Image src={BiotechTextLogo} alt="Biotech" />
      </a>
      <MobileMenu />
    </header>
  );
}
