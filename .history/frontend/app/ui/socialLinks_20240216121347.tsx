import Link from "next/link";
import { socialLinks } from "@/app/lib/constants""

export default function SocialLinks() {
  return (
    <ul>
      {socialLinks.map((item, index) => {
        const { name, icon, path } = item;
        return (
          <li key={index}>
            <Link href={path}>
              <a c{icon}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
