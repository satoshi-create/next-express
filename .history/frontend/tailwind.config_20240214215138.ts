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
        headertitle: "clamp(1.25rem,.8889rem + 1.5408vw,1.875rem)",
        navtext: "clamp(1rem,.25rem + 1.5625vw,1.25rem)",
      },
      colors: {
        "accent-clr-01": "var(--accent-clr-01)",
        "accent-clr-02": "var(--accent-clr-02)",
        "accent-clr-01": "var(--accent-clr-01)",
      },
    },
  },
  plugins: [],
};
export default config;