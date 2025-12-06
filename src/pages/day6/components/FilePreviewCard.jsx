export default function FilePreviewCard({ preview }) {
    
  const { file, url } = preview;
  const isImage = file.type.startsWith("image/");
  const isPdf = file.type === "application/pdf";

  const fileSizeKB = (file.size / 1024).toFixed(1);

  return (
    <div className="flex flex-col gap-3 rounded-xl bg-slate-800/80 p-4 shadow-md">
      <div className="flex items-center justify-between gap-2">
        <p className="text-sm font-medium truncate" title={file.name}>
          {file.name}
        </p>
        <span className="text-[10px] uppercase text-slate-400">
          {file.type || "Unknown"}
        </span>
      </div>

      <div className="relative flex-1 overflow-hidden rounded-lg bg-slate-900/70 flex items-center justify-center">
        {isImage && (
          <img
            src={url}
            alt={file.name}
            className="max-h-40 w-full object-contain"
          />
        )}

        {isPdf && (
          <iframe
            src={url}
            title={file.name}
            className="w-full h-40 border-0"
          />
        )}

        {!isImage && !isPdf && (
          <div className="flex flex-col items-center justify-center p-4 text-center text-xs text-slate-300">
            <span className="text-3xl mb-2">📄</span>
            <p>No live preview available for this file type.</p>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between text-xs text-slate-400 mt-1">
        <span>{fileSizeKB} KB</span>

        <a
          href={url}
          download={file.name}
          className="rounded-full px-3 py-1 text-[11px] font-semibold text-emerald-300 hover:text-emerald-100 hover:bg-emerald-500/10 transition-colors"
        >
          Download
        </a>
      </div>
    </div>
  );
}
