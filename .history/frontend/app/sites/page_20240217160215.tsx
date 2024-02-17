import Cardwrpper from "@/app/ui/cardwrpper";
import { sites } from "@/app/lib/constants";

export default function Page() {
  return (
    <main>
      <Cardwrpper sites={sites} title="プロジェクト" cat="projects" />
      <Cardwrpper sites={sites} title="デモ" cat="demo" />
    </main>
  );
}
