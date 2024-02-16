import Link from "next/link";

export default function SocialLinks() {
  return   return (
    
    <ul className={`${styles.links} ${styleUl}`}>
      {socialLinks.map((item, index) => {
        const { name, icon, path } = item;
        return (
          <li key={index}>
            <Link href={path}>
              <a className={styles.icon}>{icon}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );;
}
