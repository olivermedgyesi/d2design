import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#332216",
        paper: "#F4F1EC",
        terracotta: "#C47A5A",
        evergreen: "#3B5341",
      },
      fontFamily: {
        sans: ["var(--font-fractul)", "system-ui", "sans-serif"],
        display: ["var(--font-meravila)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
