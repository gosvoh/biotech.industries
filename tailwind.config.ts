import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      "2xs": ["0.625rem", "0.75rem"],
      xs: ["0.75rem", "0.9rem"],
      sm: ["0.875rem", "1.05rem"],
      base: ["1rem", "1.2rem"],
      lg: ["1.125rem", "1.35rem"],
      xl: ["1.25rem", "1.5rem"],
      "2xl": ["1.5rem", "1.8rem"],
      "3xl": ["2rem", "2.4rem"],
      "4xl": ["3rem", "3.6rem"],
      "5xl": ["4.5rem", "5.4rem"],
      "6xl": ["6rem", "7.2rem"],
    },
    fontWeight: {
      normal: "400",
      bold: "700",
    },
    backgroundColor: {
      default: "rgba(0, 0, 0, 1)",
      secondary: "rgba(26, 26, 26, 1)",
      "primary-white": "rgba(255, 255, 255, 1)",
      brand: "rgba(170, 163, 248, 1)",
      brand2: "rgba(215, 251, 144, 1)",
      effect: "rgba(170, 163, 248, 0.6)",
    },
    textColor: {
      primary: "rgba(255, 255, 255, 1)",
      secondary: "rgba(96, 96, 96, 1)",
      "primary-black": "rgba(0, 0, 0, 1)",
      "secondary-black": "rgba(255, 255, 255, 0.6)",
      brand: "rgba(170, 163, 248, 1)",
      brand2: "rgba(215, 251, 144, 1)",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
