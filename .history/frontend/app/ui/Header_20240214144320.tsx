import Link from "next/link";
export default function header() {
  return (
    <ul>
      <li>
        <Link href="/">home page </Link>
      </li>
      <li>
        <Link href="about">about page</Link>
      </li>
      <li>
        <Link href="grafhics">grafhics page</Link>
      </li>
      <li>
        <Link href="site">site page</Link>
      </li>
    </ul>
  );
}
