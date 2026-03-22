import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1e3a8a", // Deep Industrial Blue
          light: "#2563eb",
          dark: "#172554",
        },
        secondary: {
          DEFAULT: "#00aeef", // True Process Cyan
          light: "#33bef2",
          dark: "#008bc0",
        },
        cmyk: {
          cyan: "#00aeef",
          magenta: "#ec008c",
          yellow: "#fff200",
          key: "#231f20", // Rich Black
        },
        pantone: {
          DEFAULT: "#ff5f1f", // Safety/Pantone Orange for highlights
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
} satisfies Config;
