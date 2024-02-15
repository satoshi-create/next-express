import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={`parts-grid py-8`}>
      <div className="hero-grid">
        <figure style={{ position: "relative", width: "100%", height: "80vh" }}
        className="grid-">
          <Image
            src="/yorunoume.png"
            layout="fill"
            objectFit="cover"
            alt="hero img"
          />
        </figure>
        <div className="grid hero-logo grid-cols-2 place-items-center ">
          <h1>縁</h1>
          <h1>側</h1>
          <h1>工</h1>
          <h1>房</h1>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
