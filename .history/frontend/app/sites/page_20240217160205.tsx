import Cardwrpper from "@/app/ui/cardwrpper";

export default function Page() {
  return (
    <main>
      <Cardwrpper sites={sites} title="プロジェクト" cat="projects" />
      <Cardwrpper sites={sites} title="デモ" cat="demo" />
    </main>
  );
}
