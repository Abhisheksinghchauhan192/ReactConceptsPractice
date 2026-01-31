import Cards from "./components/Cards";
import { getInitialData } from "./data/initialDemoData";
import { useReorderableList } from "./hooks/useReorderableList";

export default function Day10Page() {
  const { items, reorder } = useReorderableList(getInitialData());

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 px-6 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-semibold mb-6">
          Reorderable Cards
        </h1>

        <Cards items={items} onReorder={reorder} />
      </div>
    </div>
  );
}
