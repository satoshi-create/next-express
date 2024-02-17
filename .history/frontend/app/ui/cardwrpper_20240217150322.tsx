import Title from "@/app/ui/title";
import Link from "next/link";
import { sites } from "@/app/lib/types";

export default function Cardwrpper({ sites }: { sites: sites[] }) {
  return (
    <section className="parts-grid">
      <Title title1="プロジェクト" title2="サイト" />
      <ul className="mt-8 mb-8">
        {sites.map((site, index) => {
          return (
            <li
              key={index}
              className="bg-primary-blue-02 mb-12 rounded-lg p-4 shadow-md "
            >
              <Link href={site.url}>
                <img src={site.src} alt={site.src} />
              </Link>

              <h4 className=" font-bold mb-8">{site.title}</h4>
              <div className="flex ">
                <ul>
                  {site.tag.map((tag, index) => {
                    return <li key={index}>{tag}</li>;
                  })}
                </ul>
                <span className="i-mdi-github ">{site.githubUrl}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
