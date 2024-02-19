import Link from "next/link";
import Title from "@/app/ui/title";
import Button from "@/app/ui/button";
import Image from "next/image";

export default function About({ bcg }: { bcg: string }) {
  return (
    <section className={`parts-grid section-padding ${bcg}`}>
      <Title title1={""} title2={"自己紹介"} underline="" />
      <div className="flex flex-col md:flex-row-reverse md:justify-between">
        <div className="md:flex-C">
          <div className="flex justify-center mb-8 gap-5">
            <button className="text-primary-green-01 text-3xl font-bold shadow-[0_6px_var(--primary-green-01)]">
              経歴
            </button>
          </div>
          <article className="rounded-md bg-white p-5 flex flex-col gap-4">
            <p className="text-[20px] font-sans leading-loose">
              職業訓練校にて、グラフィックデザインとウェブデザインを学びました。その後も主にコーディングを中心としてウェブデザインの学習を続けてきました。現在は、BlenderやCADなどの3Dデザイン、WEBサイトのフルスタック化について学んでいます。
            </p>
            <div className="self-end">
              <Button title={"MORE"} path={"/about"} />
            </div>
          </article>
        </div>
        <figure className="relative w-full h-[60vh] md:flex-D md:h-[50vh]">
          <Image
            src="/about.png"
            // layout="fill"
            // objectFit="cover"
            // width={1000}
            // height={934}
            fill
            style={{
              objectFit: "cover",
            }}
            alt="about-image"
          />
        </figure>
      </div>
    </section>
  );
}
