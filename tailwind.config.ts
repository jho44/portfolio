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
        light: {
          // brandy
          "50": "#fbf8f1",
          "100": "#f5efdf",
          "200": "#ebdcbd",
          "300": "#e1c89d",
          "400": "#d0a367",
          "500": "#c68b49",
          "600": "#b8773e",
          "700": "#995e35",
          "800": "#7b4c31",
          "900": "#64402a",
          "950": "#352015",
        },
      },
    },
  },
  plugins: [],
};
export default config;
