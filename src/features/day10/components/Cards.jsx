import { useState } from "react";
import Item from "./Item";

export default function Cards({ items, onReorder }) {
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoverPosition, setHoverPosition] = useState(null);

  function handleDragStart(index) {
    setDraggedIndex(index);
  }

  function handleDragOver(e, targetIndex) {
    e.preventDefault();

    const rect = e.currentTarget.getBoundingClientRect();
    const midpoint = rect.top + rect.height / 2;

    const position = e.clientY < midpoint ? "before" : "after";

    setHoveredIndex(targetIndex);
    setHoverPosition(position);
  }

  function handleDrop() {
    if (
      draggedIndex === null ||
      hoveredIndex === null ||
      hoverPosition === null
    ) {
      return;
    }

    let toIndex;

    if (draggedIndex > hoveredIndex) {
      // dragging UP
      toIndex = hoverPosition === "before" ? hoveredIndex : hoveredIndex + 1;
    } else if (draggedIndex < hoveredIndex) {
      // dragging DOWN
      toIndex = hoverPosition === "before" ? hoveredIndex - 1 : hoveredIndex;
    } else {
      return;
    }

    onReorder(draggedIndex, toIndex);

    setDraggedIndex(null);
    setHoveredIndex(null);
    setHoverPosition(null);
  }

  function handleDragEnd() {
    setDraggedIndex(null);
    setHoveredIndex(null);
    setHoverPosition(null);
  }

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <Item
          key={item.id}
          item={item}
          index={index}
          isDragging={draggedIndex === index}
          isHovered={hoveredIndex === index}
          hoverPosition={hoverPosition}
          onDragStart={() => handleDragStart(index)}
          onDragOver={(e) => handleDragOver(e, index)}
          onDrop={handleDrop}
          onDragEnd={handleDragEnd}
        />
      ))}
    </div>
  );
}
