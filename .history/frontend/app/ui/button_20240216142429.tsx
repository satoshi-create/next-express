import Link from "next/link";
import { Noto_Sans_JP } from "next/font/google";

const notosansjp = Noto_Sans_JP({ subsets: ["latin"] });

export default function Button({
  title,
  path,
}: {
  title: string;
  path: string;
}) {
  return (
    <Link href={path}>
      <button
        className={`${notosansjp.className} hero-button self-center justify-self-end z-10 border border-accent-clr-01 rounded-md text-white bg-accent-clr-01 p-buttonpadding`}
      >
        {title}
      </button>
    </Link>
  );
}
