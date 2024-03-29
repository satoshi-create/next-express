import Link from "next/link";
import Image from "next/image";
import SocialLinks from "@/app/ui/socialLinks";
import Button from "@/app/ui/button";
import { Noto_Serif } from "next/font/google";

const notoserif = Noto_Serif({ subsets: ["latin"] });

export default function Hero() {
  return (
    <section className="parts-grid py-8">
      <div className="hero-grid">
        
        {/* next/image - fill */}
        {/* <figure
          style={{ position: "relative", width: "100%", height: "80vh" }}
          className="heroFigure opacity-90 ml-[5vw] mr-[-5px] " 
        >
          <Image
            src="/yorunoume.png"
            // layout="fill"
            // objectFit="cover"
            fill={true}
            style={{ objectFit: "cover" }}
            // width={1080}
            // height={1479}
            alt="hero image"
            className="object-[40px]"
          />
        </figure> */}
        {/* next/image - responsive */}
        <Image
          src="/yorunoume.png"
          width={1080}
          height={1479}
          sizes="100vw"
          className="heroFigure opacity-90 ml-[5vw] mr-[-5px] object-[40px] w-full h-[80vh] object-cover"
          alt="hero image"
        />
        <div className="grid hero-logo grid-cols-2 place-items-center z-10  bg-primary-green-02 w-herologo h-herologo  text-herologo font-bold relative">
          <h1>縁</h1>
          <h1>側</h1>
          <h1>工</h1>
          <h1>房</h1>
          <div className="w-herobar h-herobar bg-primary-green-02 absolute bottom-[-30px] right-[-20px]"></div>
          <div className="w-herobar h-herobar bg-primary-green-02 absolute bottom-[-30px] right-[-20px] rotate-90 origin-top-right"></div>
        </div>
        <h2
          className={`${notoserif.className} self-center hero-catch1 text-herocatch z-10 opacity-90 uppercase text-right sepia-0 lg:ve lg:justify-self-start`}
        >
          marginal
        </h2>
        <h2
          className={`${notoserif.className} self-end hero-catch2 text-herocatch z-10 opacity-90 uppercase text-right sepia-0`}
        >
          design
        </h2>
        <ul className="hero-sociallinks flex gap-2 z-10 justify-end lg:self-center">
          <SocialLinks
            bgc={"bg-primary-green-01"}
            textc={"text-white"}
            borderc={"border-primary-green-01"}
            hoverbgc={"hover:bg-white"}
            hovertextc={"hover:text-primary-green-01"}
            hoverborderc={"hover:border-primary-green-01"}
          />
        </ul>
        <div className="hero-button self-center justify-self-end z-10 lg:self-center">
          <Button title="作品を見る" path="/graphics" />
        </div>
      </div>
    </section>
  );
}
