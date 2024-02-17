import Title from "@/app/ui/title";
import Link from "next/link";
import { sites } from "@/app/lib/types";

export default function Cardwrpper({
  sites,
  title,
  cat,
}: {
  sites: sites[];
  title: string;
  cat: string;
}) {
  return (
    <section className="parts-grid">
      <Title title1={title} title2="サイト" />
      <ul className="my-8 md:flex md:flex-wrap md:justify-evenly">
        {sites
          .filter((site) => site.cat === cat)
          .map((site, index) => {
            return (
              <li
                key={index}
                className="bg-primary-blue-02 mb-12 rounded-lg p-4 md:flex-[0_0_calc(50% - 2rem)] shadow-lg transform transition-all hover:scale-110"
              >
                <Link href={site.url}>
                  <img src={site.src} alt={site.src} />
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
    </section>
  );
}
