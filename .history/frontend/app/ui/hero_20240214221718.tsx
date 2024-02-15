import Link from "next/link";

export default function Hero() {
  return (
    <section className={`parts-grid py-8`}>
      <div className="hero-grid">
        <figure style={{ position: "relative", width: "100%", height: "80vh" }}>
          <img src="/yorunoume.png" />
        </figure>
        <div className="grid ">
          <h1>縁</h1>
          <h1>側</h1>
          <h1>工</h1>
          <h1>房</h1>
          <div className={styles.engawaline}>
            <div className={`${styles.line} ${styles.yoko}`}></div>
            <div className={`${styles.line} ${styles.tate}`}></div>
          </div>
        </div>
        <h2 className={`${styles.catch} ${styles.catch1}`}>MARGINAL</h2>
        <h2 className={`${styles.catch} ${styles.catch2}`}>DESIGN</h2>
      </div>
    </section>
  );
}
