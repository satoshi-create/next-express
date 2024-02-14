export default function header() {
  return (
    <ul>
      <li key={index}>
        <Link href={link.path}>
          <a className={styles.navPcLink}>{link.name}</a>
        </Link>
      </li>
    </ul>
  );
}
