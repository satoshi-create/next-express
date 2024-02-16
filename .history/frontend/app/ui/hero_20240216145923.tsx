import Link from "next/link";
import Image from "next/image";
import { Noto_Sans_JP } from "next/font/google";
import SocialLinks from "@/app/ui/socialLinks";
import Button from "@/app/ui/button";

const notosansjp = Noto_Sans_JP({ subsets: ["latin"] });

export default function Hero() {
  return (
    <section className={`parts-grid py-8 ${notosansjp.className}`}>
      <div className="hero-grid">
        <figure
          style={{ position: "relative", width: "100%", height: "80vh" }}
          className="row-span-full col-span-full opacity-90 ml-[5vw] mr-[-5px] "
        >
          <Image
            src="/yorunoume.png"
            layout="fill"
            objectFit="cover"
            alt="hero image"
            className="object-[40px]"
          />
        </figure>
        <div className="grid hero-logo grid-cols-2 place-items-center z-10  bg-primary-green-02 w-herologo h-herologo  text-herologo font-bold relative">
          <h1>縁</h1>
          <h1>側</h1>
          <h1>工</h1>
          <h1>房</h1>
          <div className="w-herobar h-herobar bg-primary-green-02 absolute bottom-[-30px] right-[-20px]"></div>
          <div className="w-herobar h-herobar bg-primary-green-02 absolute bottom-[-30px] right-[-20px] rotate-90 origin-right"></div>
        </div>
        <h2 className="self-end hero-catch text-herocatch z-10 opacity-90 uppercase text-right sepia-0">
          marginal
          <br />
          design
        </h2>
        <ul className="hero-sociallinks flex gap-2 z-10 justify-end">
          <SocialLinks />
        </ul>
        <div
          className={`${notosansjp.className}   hero-button self-center justify-self-end z-10`}
        >
          <Button title="作品を見る" path="/graphics" />
        </div>
      </div>
    </section>
  );
}
