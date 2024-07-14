import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Footer from "@/components/footer";
import AntdConfigProvider from "./AntdConfigProvider";

const inter = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
});

const newMeta = {
  title: "Biotech.Industries",
  description: "Biotech.Industries - Создаем инновации в биотех-индустрии",
};

export const metadata: Metadata = {
  ...newMeta,
  icons: "favicon.ico",
  metadataBase: new URL("https://biotech.industries.cedne.ru"),
  creator: "Aleksey Vokhmin",
  openGraph: {
    type: "website",
    locale: "ru_RU",

    ...newMeta,
  },
  twitter: {
    card: "summary_large_image",

    ...newMeta,
    site: "@biotech.industries",
    creator: "@gosvoh",
  },
};

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
