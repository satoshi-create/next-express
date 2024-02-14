import Link from "next/link";
export default function Header() {
  return (
    <header>
      <div className={styles.headerCenter}>
        <Link href="/">
          <a className={styles.titlebox}>
            <img src="/favicon.png" alt="logo" className={styles.icon} />
            engawakobo
          </a>
        </Link>
        <nav className={styles.nav}>
          <div className={styles.navSp}>
            <button className="btn" onClick={() => openSidebar()}>
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
