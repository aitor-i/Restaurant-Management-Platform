import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customPalette: {
          softOlive: "#C0C78C",
          sageGreen: "#A6B37D",
          ivory: "#FEFAE0",
          sand: "#B99470",
        },
      },
    },
  },
  plugins: [],
};

export default config;
