import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        dynamic: "clamp(1.25rem,.8889rem + 1.5408vw,1.875rem)",
      },
    },
  },
  plugins: [],
};
export default config;
