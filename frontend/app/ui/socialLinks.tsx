import Link from "next/link";
import { socialLinks } from "@/app/lib/constants";

export default function SocialLinks({
  bgc,
  textc,
  borderc,
  hoverbgc,
  hovertextc,
  hoverborderc,
}: {
  bgc: string;
  textc: string;
  borderc: string;
  hoverbgc: string;
  hovertextc: string;
  hoverborderc: string;
}) {
  return (
    <>
      {socialLinks.map((item, index) => {
        const { name, icon, path } = item;
        return (
          <li key={index}>
            <Link href={path}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className={`${bgc} ${borderc} ${textc} w-sociallinkicon h-sociallinkicon border ${borderc} rounded-md  p-1 ease-in duration-300 ${hoverbgc} ${hoverborderc} ${hovertextc}`}
              >
                {icon}
              </svg>
            </Link>
          </li>
        );
      })}
    </>
  );
}
