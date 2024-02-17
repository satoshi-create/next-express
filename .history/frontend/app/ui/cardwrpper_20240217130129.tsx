import Title from "@/app/ui/title";
import Card from "@/app/ui/card";

export default function Cardwrpper() {
  return (
    <section className="parts-grid">
      <Title title1="プロジェクト" title2="サイト" />
      <ul className="mt-2 mb-2">
        <Card />
      </ul>
    </section>
  );
}