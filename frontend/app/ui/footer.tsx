import Link from "next/link";
import { Montserrat } from "next/font/google";
import SocialLinks from "@/app/ui/socialLinks";
import NavLinks from "@/app/ui/navlinks";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer
      className={`parts-grid w-full h-[50vh] bg-black grid place-items-center ${montserrat.className}`}
    >
      <div className="row-[1] flex flex-col gap-10 items-center">
        <div className="flex gap-5 items-center justify-center">
          <img
            src="/logo-footer.png"
            alt="log-footer"
            className="w-footerlogo h-footerlogo"
          />
          <h4 className="text-footertitle uppercase text-white">engawakobo</h4>
        </div>
        <ul className="flex gap-2 ">
          <SocialLinks
            bgc={"bg-white"}
            textc={"text-black"}
            borderc={"border-black"}
            hoverbgc={"hover:bg-black"}
            hovertextc={"hover:text-white"}
            hoverborderc={"hover:border-white"}
          />
        </ul>
        <ul className="flex gap-2 text-center justify-center uppercase text-navtext text-white">
          <NavLinks />
        </ul>
      </div>
      <p className="row-[1] self-end justify-self-center text-footercopy text-white mb-1">
        {`@${year} ENGAWAKOBO All rights reserverd`}
      </p>
    </footer>
  );
}
