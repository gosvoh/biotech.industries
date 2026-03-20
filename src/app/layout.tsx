import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Footer from "@/components/footer";
import AntdConfigProvider from "./AntdConfigProvider";
import { generateMeta } from "@/lib/meta";

const inter = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = generateMeta(
  "ИТМО Биотех",
  "Создаем инновации в биотех-индустрии",
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <AntdRegistry>
          <AntdConfigProvider>
            <Header />
            {children}
            <Footer />
          </AntdConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
