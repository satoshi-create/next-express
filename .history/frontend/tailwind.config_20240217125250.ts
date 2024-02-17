import type { Config } from "tailwindcss";
const {
  iconsPlugin,
  getIconCollections,
} = require("@egoist/tailwindcss-icons");

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
        herocatch: "clamp(2.625rem,1.7944rem + 3.5439vw,4.0625rem)",
        button: "clamp(.9375rem,.5764rem + 1.5408vw,1.5625rem)",
        titlefont
      },
      width: {
        headericon: "clamp(1.875rem,1.0444rem + 3.5439vw,3.3125rem)",
        herologo: "clamp(10.3125rem,8.3263rem + 8.4746vw,13.75rem)",
        herobar: "clamp(4.875rem,3.9361rem + 4.0062vw,6.5rem)",
        sociallinkicon: "clamp(1.25rem,.7083rem + 2.3112vw,2.1875rem)",
      },
      height: {
        headericon: "clamp(1.875rem,1.0444rem + 3.5439vw,3.3125rem)",
        herologo: "clamp(10.3125rem,8.3263rem + 8.4746vw,13.75rem)",
        herobar: "clamp(.625rem,.4444rem + .7704vw,.9375rem)",
        sociallinkicon: "clamp(1.25rem,.7083rem + 2.3112vw,2.1875rem)",
      },
      padding: {
        buttonpadding:
          "clamp(.4375rem,.3292rem + .4622vw,.625rem) clamp(1.25rem,.8889rem + 1.5408vw,1.875rem)",
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
  plugins: [
    iconsPlugin({
      // Select the icon collections you want to use
      // You can also ignore this option to automatically discover all individual icon packages you have installed
      // If you install @iconify/json, you should explicitly specify the collections you want to use, like this:
      collections: getIconCollections(["mdi", "lucide"]),
      // If you want to use all icons from @iconify/json, you can do this:
      // collections: getIconCollections("all"),
      // and the more recommended way is to use `dynamicIconsPlugin`, see below.
    }),
  ],
};
export default config;
