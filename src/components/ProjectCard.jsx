export default function ProjectCard({ name, link, desc, details }) {
  return (
    <article className="bg-linear-to-b from-slate-800/80 to-slate-900/60 border border-slate-700/60 rounded-2xl p-5 shadow-lg shadow-black/50 hover:shadow-sm hover:shadow-emerald-300 hover:border hover:border-emerald-300 transform hover:scale-105 transition-all duration-200">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-100">{name}</h3>
          <p className="mt-1 text-sm text-gray-300 line-clamp-3">{desc}</p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="text-xs px-2 py-1 rounded-full bg-emerald-600/90 text-white font-medium hover:bg-emerald-500 transition"
            aria-label={`Open ${name} project link`}
          >
            Open
          </a>
        </div>
      </div>

      {details && (
        <div className="mt-4 text-sm text-gray-400">
          <p className="line-clamp-4">{details}</p>
        </div>
      )}

      <footer className="mt-4 flex items-center justify-end text-xs text-gray-400">
        <span className="italic">React · Demo</span>
      </footer>
    </article>
  );
}
