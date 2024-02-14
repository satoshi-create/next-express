import Link from "next/link";
import { Menu } from "react-feather";

export default function Header() {
  return (
    <header className="parts-grid items-center p-4">
      <Link
        href="/"
        className="grid grid-flow-col gap-2 items-center row-start-1 justify-start"
      >
        <img src="/favicon.png" alt="logo" />
        <span className="text-3xl uppercase"> engawakobo </span>
      </Link>
      <nav className="row-start-1 justify-end">
        <ul className="hidden md:flex gap-10 text-center justify-center">
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
        <button className="md:hidden">
          <Menu />
        </button>
        {/* <Sidebar />
          <Links props={"header"} /> */}
      </nav>
    </header>
  );
}