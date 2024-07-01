import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundColor: {
        default: "hsl(var(--primary-background))",
        secondary: "hsl(var(--secondary-background))",
        "primary-white": "hsl(var(--primary-white))",
        brand: "hsl(var(--brand))",
        brand2: "hsl(var(--brand2))",
        effect: "hsl(var(--effect))",
      },
      textColor: {
        primary: "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary-foreground))",
        "primary-white": "hsl(var(--primary-white))",
        "primary-black": "hsl(var(--primary-black))",
        "secondary-black": "hsl(var(--secondary-black))",
        brand: "hsl(var(--brand))",
        brand2: "hsl(var(--brand2))",
      },
      boxShadowColor: {
        brand: "hsl(var(--brand))",
        brand2: "hsl(var(--brand2))",
        effect: "hsl(var(--effect))",
      },
      borderColor: {
        brand: "hsl(var(--brand))",
        brand2: "hsl(var(--brand2))",
        effect: "hsl(var(--effect))",
      },
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
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "rgba(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "rgba(var(--primary-background))",
          foreground: "rgba(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "rgba(var(--secondary-background))",
          foreground: "rgba(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
