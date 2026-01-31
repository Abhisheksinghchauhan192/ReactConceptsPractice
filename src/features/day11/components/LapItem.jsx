import { useState, useEffect } from "react";
import { timeFormater } from "../utility/formatter";

export default function LapItem({ index, time, note, updateNote }) {
  const [isEditing, setIsEditing] = useState(false);
  const [draftNote, setDraftNote] = useState(note);

  // Keep draft synced when parent updates note
  useEffect(() => {
    setDraftNote(note);
  }, [note]);

  function handleSave() {
    updateNote(index, draftNote.trim());
    setIsEditing(false);
  }

  return (
    <div className="flex items-center gap-3 text-sm py-2 border-b border-slate-700">

      {/* Lap number */}
      <div className="w-16 text-center text-gray-400 shrink-0">
        Lap {index + 1}
      </div>

      {/* Note area */}
      <div className="flex-1 min-w-0">
        {isEditing ? (
          <input
            autoFocus
            value={draftNote}
            onChange={(e) => setDraftNote(e.target.value)}
            onBlur={handleSave}
            onKeyDown={(e) => e.key === "Enter" && handleSave()}
            placeholder="Add note..."
            className="w-full bg-slate-800 text-xs px-2 py-1 rounded outline-none"
          />
        ) : note ? (
          <div
            onClick={() => setIsEditing(true)}
            className="
              cursor-pointer text-gray-200
              overflow-x-auto whitespace-nowrap
              md:whitespace-normal md:line-clamp-2
              md:hover:line-clamp-none
            "
          >
            {note}
          </div>
        ) : (
          <div
            onClick={() => setIsEditing(true)}
            className="cursor-pointer text-xs opacity-40 hover:opacity-70"
          >
            + Add note
          </div>
        )}
      </div>

      {/* Time */}
      <div className="w-24 text-right font-mono text-gray-200 shrink-0">
        {timeFormater(time)}
      </div>
    </div>
  );
}
