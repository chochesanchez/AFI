import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFC72C",
        "primary-dark": "#BB921F",

        secondary: "#1D428A",

        surface: {
          dark: "#5780AE",
          light: "#C0E3FF",
        },

        background: "#FFFFFF",

        destructive: "#BE3A34",
        "destructive-dark": "#93231E",

        success: "#22C55E",

        text: {
          DEFAULT: "#111111",
          light: "#BFBFBF",
        },
      },

      fontSize: {
        heading1: ["36px", { lineHeight: "auto" }],
        heading2: ["32px", { lineHeight: "auto" }],
        heading3: ["28px", { lineHeight: "auto" }],
        heading4: ["24px", { lineHeight: "auto" }],
        heading5: ["24px", { lineHeight: "auto" }],

        "text-regular": ["18px", { lineHeight: "auto" }],
        "text-regular-2": ["16px", { lineHeight: "auto" }],

        links: ["14px", { lineHeight: "auto" }],
        small: ["10px", { lineHeight: "auto" }],
      },

      fontFamily: {
        anton: ["Anton", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;