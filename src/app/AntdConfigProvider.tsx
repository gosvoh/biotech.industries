"use client";

import { ConfigProvider, theme } from "antd";
import ruLocale from "antd/locale/ru_RU";

export default function AntdConfigProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConfigProvider
      locale={ruLocale}
      theme={{
        algorithm: theme.darkAlgorithm,
        cssVar: true,
        token: {
          colorPrimary: "#D7FB8E",
          colorTextLightSolid: "#000",
        },
        components: {
          Checkbox: {
            colorWhite: "#000",
          },
          Modal: {
            contentBg: "hsl(var(--secondary-background))",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
