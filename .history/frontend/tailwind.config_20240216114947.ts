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
        herologo: "clamp(3.4375rem,2.7875rem + 2.7735vw,4.5625rem)",
      },
      width: {
        header
        herologo: "clamp(10.3125rem,8.3263rem + 8.4746vw,13.75rem)",
        herobar: "clamp(4.875rem,3.9361rem + 4.0062vw,6.5rem)",
      },
      height: {
        herologo: "clamp(10.3125rem,8.3263rem + 8.4746vw,13.75rem)",
        herobar: "clamp(.625rem,.4444rem + .7704vw,.9375rem)",
      },
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