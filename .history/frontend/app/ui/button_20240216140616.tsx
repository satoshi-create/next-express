import Link from "next/link";

export default function Button(props) {
  const { btnWidth, title, path } = props;
  return (
    <>
      
      <Link href={path}>
        <a className={styles.link}>
          <button className={`btn ${styles[btnWidth]} ${styles.cmnbtn}`}>
            {title}
          </button>
        </a>
      </Link>
    </div>
}
