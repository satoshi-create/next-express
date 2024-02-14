import Link from "next/link";
import { Menu } from "react-feather";

// TODO:font-sizeをclampに置き換える

export default function Header() {
  return (
    <header className="parts-grid items-center p-4">
      <Link
        href="/"
        className="grid grid-flow-col gap-2 items-center row-start-1 justify-self-start"
      >
        <img src="/favicon.png" alt="logo" />
        <span className="uppercase text-dynamic"> engawakobo </span>
      </Link>
      <nav className="row-start-1 justify-self-end">
        <ul className="hidden md:flex gap-2 text-center justify-center uppercase md:text-2xl">
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
        <button className="md:hidden cursor-pointer bg-transparent border-transparent">
          <Menu />
        </button>
        {/* <Sidebar /> 
          <Links props={"header"} /> */}
      </nav>
    </header>
  );
}
