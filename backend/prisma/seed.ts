import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const response = await Promise.all([
    // await prisma.sites.create({
    //   data: {
    //     title: "横スクロールで楽しむ絵巻物",
    //     src: "/thumb-emakimono.png",
    //     url: "https://emakimono.com/",
    //     tag: ["html", "css", "react", "next.js"],
    //     githubUrl: "",
    //     cat: "projects",
    //   },
    // }),
    // await prisma.sites.create({
    //   data: {
    //     title: "縦書きで覚える百人一首",
    //     src: "/thumb-tategaki.png",
    //     url: "https://hyakuninisshu.vercel.app/",
    //     tag: ["html", "css", "react", "next.js"],
    //     githubUrl: "",
    //     cat: "projects",
    //   },
    // }),
    // await prisma.sites.create({
    //   data: {
    //     title: "縦書きで読む古典文学",
    //     src: "/thumb-tategaki.png",
    //     url: "https://tategaki.netlify.app/",
    //     tag: ["html", "css", "javascript", "jquery"],
    //     githubUrl: "",
    //     cat: "projects",
    //   },
    // }),
    // await prisma.sites.create({
    //   data: {
    //     title: "Sky Transport Animation",
    //     src: "/thumb-skytransportanimation.png",
    //     url: "https://sky-transport-animation.netlify.app/",
    //     tag: ["html", "css", "javascript", "jquery"],
    //     githubUrl: "https://github.com/satoshi-create/SkyTransport_animation",
    //     cat: "demo",
    //   },
    // }),
    // await prisma.sites.create({
    //   data: {
    //     title: "Cafe De Wan Nyan",
    //     src: "/thumb-cafedewannyan.png",
    //     url: "https://cafe-de-wan-nyan.netlify.app/",
    //     tag: ["html", "css", "react", "gatsby"],
    //     githubUrl: "https://github.com/satoshi-create/cafe-de-wan",
    //     cat: "demo",
    //   },
    // }),
    await prisma.icon.create({
      data: {
        name: "illustrator",
        src: "/illustrator_icon.png",
      },
    }),
  ]);

  console.log({ response });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
