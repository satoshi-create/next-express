import Link from "next/link";

export default function Hero() {
  return (
    <section className={`parts-grid py-8`}>
      <div className="hero-grid">
        <figure
          style={{ position: "relative", width: "100%", height: "80vh" }}
      >
        <img src="/yorunoume.png"/>
        </figure>
        
      </div>



        <h2 className={`${styles.catch} ${styles.catch1}`}>MARGINAL</h2>
        <h2 className={`${styles.catch} ${styles.catch2}`}>DESIGN</h2>
        <SocialLinks value={{ styleUl: styles.heroLinks }} />
        <div className={styles.herobtn}>
          <Button
            value={{
              title: "作品を見る",
              path: "/graphics",
            }}
          />
        </div>
      </div>
    </section>
  );
}
