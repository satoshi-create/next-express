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
    icon: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </>
    ),
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

// TODO:百人一首のサムネイル画像を追加
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
    cat: "demo",
  },
  {
    title: "Sky Transport Animation",
    src: "/thumb-skytransportanimation.png",
    url: "https://sky-transport-animation.netlify.app/",
    tag: ["html", "css", "javascript", "jquery"],
    githubUrl: "https://github.com/satoshi-create/SkyTransport_animation",
    cat: "demo",
  },
  {
    title: "Cafe De Wan Nyan",
    src: "/thumb-cafedewannyan.png",
    url: "https://cafe-de-wan-nyan.netlify.app/",
    tag: ["html", "css", "react", "gatsby"],
    githubUrl: "https://github.com/satoshi-create/cafe-de-wan",
    cat: "demo",
  },
];

const designs = [
  {
    id: 1,
    path: "/yorunoume.png",
    name: "夜の梅",
    nameen: "illust-yorunoume",
    icon: [{ src: "/affinity_designer_icon.png", name: "affinity-designer" }],
    bgc: "",
    cover: false,
  },
  {
    id: 2,
    path: "/michioshie.png",
    name: "ミチオシエ",
    nameen: "illust-michioshie",
    tool: "affinity designer",
    icon: [{ src: "/affinity_designer_icon.png", name: "affinity-designer" }],
    bgc: "bg-[#6e0b0b]",
    cover: false,
  },
  {
    id: 3,
    path: "/kusakagerou.png",
    name: "クサカゲロウ",
    nameen: "illust-kusakagerou",
    tool: "affinity designer",
    icon: [{ src: "/affinity_designer_icon.png", name: "affinity-designer" }],
    bgc: "bg-[#effdff]",
    cover: false,
  },
  {
    id: 4,
    path: "/cyairoasahihaetori.png",
    name: "チャイロアサヒハエトリ",
    nameen: "cyairoasahihaetori.png",
    icon: [{ src: "/affinity_designer_icon.png", name: "affinity-designer" }],
    bgc: "bg-[#b9ebc88f]",
    cover: false,
  },

  {
    id: 5,
    path: "/sensuwomotsuonna.png",
    name: "扇子を持つ女",
    nameen: "illust-sensuwomotsuonne",
    icon: [{ src: "/affinity_designer_icon.png", name: "affinity-designer" }],
    bgc: "bg-[#9b1dab]",
    cover: false,
  },
];

export { navlinks, socialLinks, sites, designs };
