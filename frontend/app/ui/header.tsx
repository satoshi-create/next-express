import Link from "next/link";
import { Menu } from "react-feather";
import { Montserrat } from "next/font/google";
import NavLinks from "@/app/ui/navlinks";

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
        <ul className="hidden md:flex gap-2 text-center justify-center uppercase text-navtext text-black">
          <NavLinks />
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
