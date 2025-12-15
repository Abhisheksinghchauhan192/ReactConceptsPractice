export default function Home() {
  return (
    <div className="max-w-3xl min-h-screen">
      <h1 className="text-3xl font-semibold text-slate-100 mb-4">
        Day 9 – React Routing Playground
      </h1>

      <p className="text-slate-400 mb-6">
        This section demonstrates advanced routing concepts using
        <span className="text-slate-200"> React Router </span>
        in a real-world documentation-style layout.
      </p>

      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-medium text-slate-200">
            What’s covered here
          </h2>
          <ul className="list-disc list-inside text-slate-400 mt-2 space-y-1">
            <li>Nested and layout-based routing</li>
            <li>Dynamic routes using URL parameters</li>
            <li>Persistent navigation with responsive sidebar</li>
            <li>URL-driven tabs (Overview / Examples / API)</li>
            <li>Graceful handling of invalid routes</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-medium text-slate-200">
            How to explore
          </h2>
          <p className="text-slate-400 mt-2">
            Use the <span className="text-slate-200">Docs</span> section from the
            navigation to explore different topics. Each topic demonstrates
            nested routes and dynamic content loading based on the URL.
          </p>
        </div>
      </div>

      {/* Callout */}
      <div className="mt-8 border-l-4 border-emerald-500 bg-slate-900/50 p-4 rounded">
        <p className="text-sm text-slate-300">
          Built as part of a <span className="font-medium text-slate-100">
          day-by-day React learning journey
          </span>, focused on mastering real-world routing patterns and UI
          composition.
        </p>
      </div>
    </div>
  );
}
