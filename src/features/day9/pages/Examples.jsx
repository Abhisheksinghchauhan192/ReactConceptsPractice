import { useOutletContext } from "react-router-dom";

export default function Examples() {
  const { topic } = useOutletContext();

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-slate-200">Examples</h2>
      <p className="text-slate-300 leading-relaxed">
        {topic.examples}
      </p>
    </div>
  );
}
