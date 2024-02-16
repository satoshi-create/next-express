import Link from "next/link";
import { socialLinks } from "@/app/lib/constants";

export default function SocialLinks() {
  return (
    <>
    </>
      {socialLinks.map((item, index) => {
        const { name, icon, path } = item;
        return (
          <li key={index}>
            <Link href={path} className="sociallinks-link">
              {/* <span
                className={`${icon} bg-primary-green-01 w-sociallinkicon h-sociallinkicon text-white p-1 border border-primary-green-01 traansition-all hover:bg-white`}
              ></span> */}
              {icon}
            </Link>
          </li>
        );
      })}

  );
}
