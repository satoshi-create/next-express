import Link from "next/link";

export default function Header() {
  return (
    <header className="parts-grid">
      <Link href="/">
        <img src="/favicon.png" alt="logo" />
        engawakobo
      </Link>
      <nav>
        <div>
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
          </button>
        </div>
        {/* <Sidebar />
          <Links props={"header"} /> */}
      </nav>
    </header>
  );
}
