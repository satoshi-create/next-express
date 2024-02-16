import Link from "next/link";
import { Noto_Sans_JP } from "next/font/google";

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
        className={`${notosansjp.className}  border border-accent-clr-01 rounded-md text-white bg-accent-clr-01 p-buttonpadding`}
      >
        {title}
      </button>
    </Link>
  );
}
