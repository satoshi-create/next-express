import Title from "@/app/ui/title";
import Link from "next/link";
import { designs } from "@/app/lib/types";
import Button from "@/app/ui/button";
import Image from "next/image";

export default function GridImages({
  title,
  designs,
}: {
  title: string;
  designs: designs[];
}) {
  console.log(designs);

  return (
    <section className="parts-grid section-padding">
      <Title
        title1={title}
        title2="デザイン"
        underline={"bg-primary-blue-01"}
      />
      <div>
        {/* {designs.map((item, index) => {
          const { name, nameen, id, path, icon, bgc, cover } = item;
          return (
            <figure key={index}>
              <Image
                src={path}
                fill={true}
                style={{ objectFit: "cover" }}
                alt={nameen}
              />
            </figure>
          );
        })} */}
      </div>
    </section>
  );
}
