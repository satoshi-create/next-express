import Title from "@/app/ui/title";
import Link from "next/link";
import { Designs } from "@/app/lib/types";
import Button from "@/app/ui/button";
import Image from "next/image";

export default function GridImages({
  title,
  designs,
}: {
  title: string;
  designs: Designs[];
}) {
  return (
    <section className="parts-grid section-padding">
      <Title
        title1={title}
        title2="デザイン"
        underline={"bg-primary-blue-01"}
      />
      <div className="grid gap-4 mb-4 gridconteinter">
        {designs.map((item, index) => {
          const { name, nameen, id, path, icon, bgc, cover } = item;

          return (
            <>
              <figure
                key={index}
                className={`relative w-[100%] h-[30vh] figure rounded-md ${
                  bgc ? bgc : "bg-primary-green-01"
                }`}
              >
                <Image
                  src={path}
                  sizes="100vw"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                  alt={name}
                />
              </figure>
              {/* <figure>

                {icon.map((item, i) => {
                  return <img src={item.src} alt={item.name} key={i} />;
                })}
              </figure> */}
            </>
          );
        })}
      </div>
    </section>
  );
}
