import Link from "next/link";
import { Menu } from "react-feather";

export default function Header() {
  return (
    <header className="parts-grid">
      <Link href="/">
        <img src="/favicon.png" alt="logo" />
        <span> engawakobo </span>
      </Link>
      <nav>
        <button className="btn">
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
          <button className="btn" >

          </button>
        </button>
        {/* <Sidebar />
          <Links props={"header"} /> */}
      </nav>
    </header>
  );
}
