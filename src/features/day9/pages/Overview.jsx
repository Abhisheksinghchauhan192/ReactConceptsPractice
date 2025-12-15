import { useOutletContext } from "react-router-dom";

export default function Overview() {
  const { topic } = useOutletContext();

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-slate-200">Overview</h2>
      <p className="text-slate-300 leading-relaxed">
        {topic.overview}
      </p>
    </div>
  );
}
