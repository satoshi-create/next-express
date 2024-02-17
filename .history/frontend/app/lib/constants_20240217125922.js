import { GitHub, Twitter, Youtube, Linkedin } from "react-feather";

const navlinks = [
  { name: "home", path: "/" },
  { name: "about", path: "/about" },
  { name: "graphics", path: "/graphics" },
  { name: "sites", path: "/sites" },
];

const socialLinks = [
  {
    name: "Linkedin",
    icon: <Linkedin />,
    path: "https://www.linkedin.com/in/satoprofile/",
  },
  {
    name: "github",
    icon: <GitHub />,
    path: "https://github.com/satoshi-create",
  },
  { name: "twitter", icon: <Twitter />, path: "https://twitter.com/home" },
  {
    name: "youtube",
    icon: <Youtube />,
    path: "https://www.youtube.com/channel/UC9w0YkVuUVe-_xtVbKluTbw",
  },
];

const sites = [
  {
    title: "横スクロールで楽しむ絵巻物",
    src: "/thumb-emakimono.png",
    url: "https://emakimono.com/",
    tag: ["html", "css", "react", "next.js"],
    githubUrl: "",
  },
  // {
  //   title: "流域図から眺めるハザードマップ",
  //   src: "/thumb-ryuuikizu.png",
  //   url: "https://river-map.vercel.app/ ",
  //   tag: ["html", "css", "react", "next.js"],
  //   githubUrl: "https://github.com/satoshi-create/river-map",
  // },
  {
    title: "縦書きで覚える百人一首",
    src: "/thumb-tategaki.png",
    url: "https://hyakuninisshu.vercel.app/",
    tag: ["html", "css", "react", "next.js"],
    githubUrl: "",
  },
  {
    title: "縦書きで読む古典文学",
    src: "/thumb-tategaki.png",
    url: "https://tategaki.netlify.app/",
    tag: ["html", "css", "javascript", "jquery"],
    githubUrl: "",
  },
];

export { navlinks, socialLinks };
