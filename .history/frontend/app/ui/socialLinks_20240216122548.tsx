import Link from "next/link";
import { socialLinks } from "@/app/lib/constants";

export default function SocialLinks() {
  return (
    <ul className="hero-sociallinks flex gap-3 ">
      {socialLinks.map((item, index) => {
        const { name, icon, path } = item;
        return (
          <li key={index}>
            <Link href={path}>
              <span className="w-sociallinkicon h-sociallinkicons">{icon}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}