import Link from "next/link";
import { Menu } from "react-feather";
import navlinks from "@/app/lib/navlinks";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Header() {
  return (
    <header className={`parts-grid items-center p-4 ${montserrat.className}`}>
      <Link
        href="/"
        className="grid grid-flow-col gap-2 items-center row-start-1 justify-self-start"
      >
        <img
          src="/favicon.png"
          alt="logo"
          className="h-headericon w-headericon"
        />
        <span className="uppercase text-headertitle"> engawakobo </span>
      </Link>
      <nav className="row-start-1 justify-self-end">
        <ul className="hidden md:flex gap-2 text-center justify-center uppercase text-navtext">
          {navlinks.map((link, index) => {
            const { name, path } = link;
            return (
              <li key={index}>
                <Link
                  href={path}
                  className="hover:text-accent-clr-01 transition-all"
                >
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
