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
            <li key={index} className="bg-primary-blue-02 mb-12">
              <Link href={site.url}>
                <img src={site.src} alt={site.src} />
              </Link>

              <h4>{site.title}</h4>
              <ul>
                {site.tag.map((tag, index) => {
                  return <li key={index}>{tag}</li>;
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
