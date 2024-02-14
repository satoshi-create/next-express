import Link from "next/link";
export default function header() {
  return (
    <ul>
      <li>
        <Link href="/">about </Link>
      </li>
      <li>
        <Link href="about">about </Link>
      </li>
      <li>
        <Link href="grafhics">grafhics </Link>
      </li>
      <li>
        <Link href="site">site </Link>
      </li>
    </ul>
  );
}
