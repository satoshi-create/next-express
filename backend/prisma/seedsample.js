
// await prisma.designs.create({
//   data: {
//     path: "/yorunoume.png",
//     name: "夜の梅",
//     nameen: "illust-yorunoume",
//     icon: {
//       create: [
//         {
//           name: "affinity-designer",
//           src: "/affinity_designer_icon.png",
//         },
//       ],
//     },
//     bgc: "",
//     cover: false,
//   },
// }),
// await prisma.designs.create({
//   data: {
//     path: "/michioshie.png",
//     name: "ミチオシエ",
//     nameen: "illust-michioshie",
//     icon: {
//       create: [
//         {
//           name: "affinity-designer",
//           src: "/affinity_designer_icon.png",
//         },
//       ],
//     },
//     bgc: "bg-[#6e0b0b]",
//     cover: false,
//   },
// }),
// await prisma.designs.create({
//   data: {
//     path: "/kusakagerou.png",
//     name: "クサカゲロウ",
//     nameen: "illust-kusakagerou",
//     icon: {
//       create: [
//         {
//           name: "affinity-designer",
//           src: "/affinity_designer_icon.png",
//         },
//       ],
//     },
//     bgc: "bg-[#effdff]",
//     cover: false,
//   },
// }),
// await prisma.designs.create({
//   data: {
//     path: "/cyairoasahihaetori.png",
//     name: "チャイロアサヒハエトリ",
//     nameen: "cyairoasahihaetori.png",
//     icon: {
//       create: [
//         {
//           name: "affinity-designer",
//           src: "/affinity_designer_icon.png",
//         },
//       ],
//     },
//     bgc: "bg-[#b9ebc88f]",
//     cover: false,
//   },
// }),
// await prisma.designs.create({
//   data: {
//     path: "/sensuwomotsuonna.png",
//     name: "扇子を持つ女",
//     nameen: "illust-sensuwomotsuonne",
//     icon: {
//       create: [
//         {
//           name: "affinity-designer",
//           src: "/affinity_designer_icon.png",
//         },
//       ],
//     },
//     bgc: "bg-[#9b1dab]",
//     cover: false,
//   },
// }),

// const response = await Promise.all([
//   prisma.icon.create({
//     data: {
//       toolId: 1,
//       name: "affinity-photo",
//       src: "/affinity_photo_icon.png",
//     },
//   }),
// ]);

// await prisma.designs.update({
//   where: { id: 1 },
//   data: {
//     icon: { set: [{ id: 1 }] },
//   },
// }),

// await prisma.post.create({
//   data: {
//     title: "Types of relations",
//     tags: { create: [{ name: "dev" }, { name: "prisma" }] },
//   },
// }),