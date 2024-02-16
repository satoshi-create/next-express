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
      <button className={`${notosansjp.className}`}>{title}</button>
    </Link>
  );
}
