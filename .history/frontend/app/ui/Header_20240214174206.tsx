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
            <button className="btn">
              <Menu />
            </button>
          </div>
          {/* <Sidebar />
          <Links props={"header"} /> */}
        </nav>
      </div>
    </header>

  );
}
