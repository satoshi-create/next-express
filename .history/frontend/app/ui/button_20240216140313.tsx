import Link from "next/link";

export default function Button(props) {
  return (
  const { btnWidth, title, path } = value;
  return (
    <div className={styles.btnconteiner}>
      <Link href={path}>
        <a className={styles.link}>
          <button className={`btn ${styles[btnWidth]} ${styles.cmnbtn}`}>
            {title}
          </button>
        </a>
      </Link>
    </div>
  );
}
