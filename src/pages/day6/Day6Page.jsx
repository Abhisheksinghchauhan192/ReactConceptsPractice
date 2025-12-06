import { useEffect, useState,useRef } from "react";
import FilePreviewCard from "./components/FilePreviewCard";

export default function Day6Page() {
  const [isDragging, setIsDragging] = useState(false);
  const [filePreviews, setFilePreviews] = useState([]);

	const refFiles = useRef(null);

  function handleDragOver(e) {
    e.preventDefault();
    setIsDragging(true);
  }

	function handleClickOnDragableArea(){
		if(refFiles.current){
			refFiles.current.click();
		}
	}

  function handleDragLeave(e) {
    e.preventDefault();
    setIsDragging(false);
  }

  function handleFiles(fileList) {
    const filesArray = Array.from(fileList);

    const newPreviews = filesArray.map((file) => ({
      id: crypto.randomUUID(),
			file,
			url: URL.createObjectURL(file),
    }));

    setFilePreviews((prev) => [...prev, ...newPreviews]);
  }

	function handleFileSelect(e){
		const selectedFiles = e.target.files;
		handleFiles(selectedFiles)
	}

  function handleDrop(e) {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = e.dataTransfer.files;
		handleFiles(droppedFiles)

  }

  useEffect(() => {
    return () => {
      filePreviews.forEach((item) => URL.revokeObjectURL(item.url));
    };
  }, [filePreviews]);

  return (
    <div className="min-h-screen w-full bg-slate-900 text-slate-50 flex flex-col items-center gap-10 px-4 py-8">
      <div className="w-full max-w-4xl">
        <h1 className="text-2xl md:text-3xl font-semibold">
          Drag & Drop File Upload
        </h1>
        <p className="text-sm md:text-base text-slate-400 mt-2">
          Drop images, PDFs, or any files below. You&apos;ll see a preview and
          get a download link.
        </p>
      </div>

      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`flex w-full max-w-4xl flex-col items-center justify-center rounded-2xl border-2 border-dashed p-8 md:p-12 transition-all duration-200
          ${
            isDragging
              ? "border-emerald-400 bg-emerald-950/40"
              : "border-slate-600 bg-slate-800/70"
          }`}
      >
        <div className="flex flex-col items-center gap-4 text-center">
          <div 
					onClick={handleClickOnDragableArea}
					className="flex items-center justify-center w-20 h-20 rounded-full bg-slate-900/70 shadow-md cursor-pointer ">
            <span className="text-3xl">📂</span>
          </div>

          <p className="text-base md:text-lg font-medium">
            {isDragging ? "Drop files here" : "Drag & drop your files here Or Select Your Files"}
          </p>

          <p className="text-xs md:text-sm text-slate-400">
            Supports images, PDFs, and any other file type.
          </p>
        </div>
      </div>

			{/* Hidden input for selecting files in the drag area. */}

			<input type="file"
			className="hidden"
			multiple
			ref={refFiles}
			onChange={handleFileSelect}
			/>

      {filePreviews.length > 0 && (
        <div className="w-full max-w-5xl">
          <h2 className="text-xl font-semibold mb-4">File Preview</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {filePreviews.map((item) => (
              <FilePreviewCard key={item.id} preview={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
