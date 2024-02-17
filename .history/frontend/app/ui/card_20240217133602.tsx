import Link from "next/link";

export default function Card({ site }) {
  return (
    <>
      <li>
        <Link href={site.url}>
          <img src={site.src} alt={site.src} />
        </Link>
      </li>
      <h4>{site.title}</h4>
      <ul>
        {site.tag.map((tag, index) => {
          return <li>{tag}</li>;
        })}
      </ul>
    </>
  );
}
