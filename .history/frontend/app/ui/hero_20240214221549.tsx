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
