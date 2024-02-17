import Title from "@/app/ui/title";
import Card from "@/app/ui/card";

export default function Cardwrpper() {
  return (
    <section className="parts-grid">
      <Title title1="プロジェクト" title2="サイト" />
      <ul>
        <Card />
      </ul>
    </section>
  );
}
