import Hero from "@/app/ui/hero";
import About from "@/app/ui/about";
import Cardwrpper from "@/app/ui/cardwrpper";

export default function page() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
  return (
    <main>
      <Hero />
      <About />
      <Cardwrpper />
    </main>
  );
}
