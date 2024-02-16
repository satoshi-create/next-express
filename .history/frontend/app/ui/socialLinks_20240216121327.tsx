import Link from "next/link";
import { socialLinks } from "@/app/""

export default function SocialLinks() {
  return (
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
  );
}
