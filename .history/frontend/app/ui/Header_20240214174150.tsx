import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div>
        <Link href="/">
          <a>
            <img src="/favicon.png" alt="logo" />
            engawakobo
          </a>
        </Link>
        <nav>
          <div>
            <button className="btn>
              <Menu />
            </button>
          </div>
          <Sidebar />
          <Links props={"header"} />
        </nav>
      </div>
    </header>

    // <ul className="flex gap-10 text-center justify-center">
    //   <li>
    //     <Link href="/">home</Link>
    //   </li>
    //   <li>
    //     <Link href="about">about</Link>
    //   </li>
    //   <li>
    //     <Link href="grafhic">grafhic</Link>
    //   </li>
    //   <li>
    //     <Link href="site">site</Link>
    //   </li>
    // </ul>
  );
}
