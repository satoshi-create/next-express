import Link from "next/link";

export default function Hero() {
  return (
    <section className={`parts-grid py-8`}>
      <div className="hero-grid">
        <figure style={{ position: "relative", width: "100%", height: "80vh" }}>
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
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
