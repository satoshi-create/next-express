import Link from "next/link";

export default function Hero() {
  return (
    <section className={`parts-grid py-8`}>
      <div className="hero-grid">
        {/* <figure style={{ position: "relative", width: "100%", height: "80vh" }}>
          <img src="/yorunoume.png" />
        </figure> */}
        <div className="grid hero-logo grid-cols-2 item">
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
