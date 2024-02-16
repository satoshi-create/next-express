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
      width: {
                width-hero-logo: "clamp(10.3125rem,8.3263rem + 8.4746vw,13.75rem)"
      }
      colors: {
        "accent-clr-01": "var(--accent-clr-01)",
        "accent-clr-02": "var(--accent-clr-02)",
        "accent-clr-03": "var(--accent-clr-03)",
        "primary-green-01": "var(--primary-green-01)",
        "primary-green-02": "var(--primary-green-02)",
        "primary-green-03": "var(--primary-green-04)",
        "primary-green-04": "var(--primary-green-04)",
        "primary-green-05": "var(--primary-green-05)",
        "primary-blue-01": "var(----primary-blue-01)",
        "primary-blue-02": "var(----primary-blue-02)",
      },
    },
  },
  plugins: [],
};
export default config;
