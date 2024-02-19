import { navlinks } from "@/app/lib//constants";
import Link from "next/link";

export default function NavLinks() {
  return (
    <>
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
    </>
  );
}
