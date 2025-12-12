import { useCardData } from "./context/CardContextProvider";

export default function GeneratedCard() {
  const formData = useCardData();

  return (
    <div className="max-w-2xl mx-auto mt-10 p-8
                    rounded-2xl shadow-xl
                    bg-linear-to-br from-slate-900/90 via-slate-900/70 to-slate-800/60
                    border border-slate-700 text-slate-100 w-4xl max-h-full/5">

      <h2 className="text-3xl font-semibold mb-6 text-center tracking-wide">
        Generated Letter
      </h2>

      <div className="mb-6">
        <h3 className="text-sm uppercase text-slate-400">To</h3>
        <p className="mt-1 text-xl font-medium text-slate-200">
          {formData.to}
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-sm uppercase text-slate-400">From</h3>
        <p className="mt-1 text-xl font-medium text-slate-200">
          {formData.from }
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-sm uppercase text-slate-400">Message</h3>
        <p className="mt-3 leading-relaxed whitespace-pre-wrap
                      bg-slate-900/40 border border-slate-700 rounded-xl p-4 text-slate-300">
          {formData?.msg || "Empty Message"}
        </p>
      </div>

    </div>
  );
}
