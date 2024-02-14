import Link from "next/link";
export default function header() {
  return (
    <ul className="flex ">
      <li>
        <Link href="/">home</Link>
      </li>
      <li>
        <Link href="about">about</Link>
      </li>
      <li>
        <Link href="grafhics">grafhics</Link>
      </li>
      <li>
        <Link href="site">site</Link>
      </li>
    </ul>
  );
}
