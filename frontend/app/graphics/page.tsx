import GridImages from "@/app/ui/gridImages";
import { designs } from "@/app/lib/constants";

export default function Page() {
  return (
    <main>
      <GridImages title={"グラフィック"} designs={designs} />
    </main>
  );
}
