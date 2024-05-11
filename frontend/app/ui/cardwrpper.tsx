import Title from "@/app/ui/title";
import Link from "next/link";
import { Sites } from "@/app/lib/types";
import Button from "@/app/ui/button";
import Image from "next/image";

export default function Cardwrpper({
  sites,
  title,
  cat,
  linked,
}: {
  sites: Sites[];
  title: string;
  cat: string;
  linked: boolean;
}) {
  return (
    <section className="parts-grid section-padding">
      <Title title1={title} title2="サイト" underline={"bg-primary-blue-01"} />
      <ul className="my-8 md:flex md:flex-wrap md:justify-evenly">
        {sites
          .filter((site) => site.cat === cat)
          .map((site, index) => {
            return (
              <li
                key={index}
                className="bg-primary-blue-02 mb-12 rounded-lg p-4 md:flex-A lg:flex-B shadow-lg transform transition-all hover:scale-110"
              >
                <Link href={site.url}>
                  <Image
                    src={site.src}
                    width={1046}
                    height={518}
                    sizes="100vw"
                    className="w-full h-auto"
                    alt={site.src}
                  />
                </Link>

                <h4 className=" font-bold mb-8 text-[17px]">{site.title}</h4>
                <div className="grid grid-flow-row items-center">
                  <ul className="flex gap-4 justify-self-start">
                    {site.tag.map((tag, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-primary-blue-01 text-primary-blue-02 uppercase text-[11px] py-[6px] px-[8px] rounded-lg"
                        >
                          {tag}
                        </li>
                      );
                    })}
                  </ul>
                  {/* TODO:tailwind icon使うと画面からはみ出す */}
                  {/* <div className="i-mdi-github justify-self-end">
                  {site.githubUrl}
                </div> */}
                </div>
              </li>
            );
          })}
      </ul>
      {linked && (
        <div className="justify-self-center ">
          <Button title={`全ての${title}サイトを見る`} path="/sites" />
        </div>
      )}
    </section>
  );
}
