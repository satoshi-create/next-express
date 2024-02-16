import Link from "next/link";
import { Noto_Sans_JP } from "next/font/google";



export default function Button({ props }) {
  const { title, path } = props;
  return (
    <Link href={path}>
      <button className={`${Noto_Sans_JP}`}>{title}</button>
    </Link>
  );
}
