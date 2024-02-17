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
    cat: "projects",
  },
  {
    title: "縦書きで覚える百人一首",
    src: "/thumb-tategaki.png",
    url: "https://hyakuninisshu.vercel.app/",
    tag: ["html", "css", "react", "next.js"],
    githubUrl: "",
    cat: "projects",
  },
  {
    title: "縦書きで読む古典文学",
    src: "/thumb-tategaki.png",
    url: "https://tategaki.netlify.app/",
    tag: ["html", "css", "javascript", "jquery"],
    githubUrl: "",
    cat: "projects",
  },
  {
    title: "Sky Transport",
    src: "/thumb-skytransport.png",
    url: "https://sky-transport.netlify.app/",
    tag: ["html", "css", "react", "gatsby"],
    githubUrl: "https://github.com/satoshi-create/SkyTransport",
  },
  {
    title: "Sky Transport Animation",
    src: "/thumb-skytransportanimation.png",
    url: "https://sky-transport-animation.netlify.app/",
    tag: ["html", "css", "javascript", "jquery"],
    githubUrl: "https://github.com/satoshi-create/SkyTransport_animation",
  },
  {
    title: "Cafe De Wan Nyan",
    src: "/thumb-cafedewannyan.png",
    url: "https://cafe-de-wan-nyan.netlify.app/",
    tag: ["html", "css", "react", "gatsby"],
    githubUrl: "https://github.com/satoshi-create/cafe-de-wan",
  },
];

export { navlinks, socialLinks, sites };
