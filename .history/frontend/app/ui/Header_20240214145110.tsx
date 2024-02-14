import Link from "next/link";
export default function Header() {
  return (
    <ul className="flex gap-10 text-center justify-center">
      <li>
        <Link href="/">home</Link>
      </li>
      <li>
        <Link href="about">about</Link>
      </li>
      <li>
        <Link href="grafhic">grafhic</Link>
      </li>
      <li>
        <Link href="site">site</Link>
      </li>
    </ul>
  );
}
