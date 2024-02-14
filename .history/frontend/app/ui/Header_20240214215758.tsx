import Link from "next/link";
import { Menu } from "react-feather";
import navlinks from "@/app/lib/navlinks";

// TODO:font-sizeをclampに置き換える

export default function Header() {
  return (
    <header className="parts-grid items-center p-4">
      <Link
        href="/"
        className="grid grid-flow-col gap-2 items-center row-start-1 justify-self-start"
      >
        <img src="/favicon.png" alt="logo" />
        <span className="uppercase text-headertitle"> engawakobo </span>
      </Link>
      <nav className="row-start-1 justify-self-end">
        <ul className="hidden md:flex gap-2 text-center justify-center uppercase text-navtext">
          {navlinks.map((link, index) => {
            const { name, path } = link;
            return (
              <li key={index}>
                <Link href={path} className="hover:bg-slate-300 ">
                  {name}
                </Link>
              </li>
            );
          })}
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
