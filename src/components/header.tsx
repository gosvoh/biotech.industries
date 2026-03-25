"use client";

import Image from "next/image";
import BiotechTextLogo from "@public/BiotechLogoType.svg";
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
  { href: "/#about", text: "О нас" },
  { href: "/#capabilities", text: "Наши возможности" },
  { href: "/contacts", text: "Контакты" },
];

const MobileMenu = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button size="icon" variant="ghost" className="md:hidden">
        <MenuIcon className="w-10 h-10" />
      </Button>
    </SheetTrigger>
    <SheetContent side={"top"} className="h-full">
      <SheetHeader className="fcol gap-20">
        <SheetTitle className="flex flex-row justify-between items-center">
          <Link href="/">
            <Image src={BiotechTextLogo} alt="ИТМО Биотех" className="w-32" />
          </Link>
          <SheetClose>
            <X className="w-10 h-10" />
            <span className="sr-only">Close</span>
          </SheetClose>
        </SheetTitle>
        <SheetDescription className="sr-only">
          Разделы сайта
        </SheetDescription>
        <nav className="flex flex-col gap-8 items-start">
          {links.map(({ href, text }, i) => (
            <SheetClose asChild key={`link-${i}`}>
              <Link className="text-left" href={href}>
                {text}
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetHeader>
    </SheetContent>
  </Sheet>
);

const DesktopMenu = () => (
  <nav className="hidden md:inline-flex gap-6 text-left">
    {links.map(({ href, text }, i) => (
      <Link key={`link-${i}`} href={href}>
        {text}
      </Link>
    ))}
  </nav>
);

export default function Header() {
  return (
    <header className="w-full py-10 sticky top-0 bg-default z-10">
      <div className="flex flex-row justify-between items-center gap-4 wrapper">
        <Link href="/">
          <Image src={BiotechTextLogo} alt="Biotech" className="w-32" />
        </Link>
        <MobileMenu />
        <DesktopMenu />
      </div>
    </header>
  );
}
