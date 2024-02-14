import Link
  from "next/link";
export default function header() {
  return (
    <ul>
      <li>
        <Link href="about">about</Link>
      </li>
    </ul>
  );
}
