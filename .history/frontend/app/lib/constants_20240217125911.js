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

const 

export { navlinks, socialLinks };