export default function Item({
  item,
  onDragStart,
  onDragOver,
  onDragEnd,
  isDragging,
  isHovered,
  hoverPosition,
  onDrop
}) {
  return (
    <div
      draggable
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
      onDrop={onDrop}
      className={`
        relative bg-zinc-800 border border-zinc-700 rounded-xl p-4
        transition-all duration-200 cursor-move
        ${isDragging ? "opacity-50" : ""}
        hover:border-zinc-600
      `}
    >
      {/* BEFORE indicator */}
      {isHovered && hoverPosition === "before" && (
        <div className="absolute -top-1 left-0 right-0 h-1 bg-indigo-500 rounded-xl" />
      )}

      {/* AFTER indicator */}
      {isHovered && hoverPosition === "after" && (
        <div className="absolute -bottom-1 left-0 right-0 h-1 bg-indigo-500 rounded-xl" />
      )}

      <div className="flex justify-between items-start gap-4">
        <div>
          <h3 className="text-lg font-medium text-zinc-100">
            {item.title}
          </h3>
          <p className="text-sm text-zinc-400 mt-1">
            {item.description}
          </p>
        </div>

        <span className="text-xs px-2 py-1 rounded-full bg-zinc-700 text-zinc-300">
          {item.priority}
        </span>
      </div>
    </div>
  );
}
