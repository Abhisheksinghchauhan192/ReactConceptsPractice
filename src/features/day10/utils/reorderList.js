export function reorderList(list, fromIndex, toIndex) {
  // Guard: list must have at least 2 items
  if (!Array.isArray(list) || list.length < 2) {
    return list;
  }

  // Guard: index validity
  if (
    fromIndex < 0 ||
    fromIndex >= list.length ||
    toIndex < 0 ||
    toIndex >= list.length
  ) {
    return list;
  }

  // Guard: no-op
  if (fromIndex === toIndex) {
    return list;
  }

  // make a shallow copy no deep copy needed cause we
  // not not changing the data inside the list's items 
  // just ref of those are enough reorder then and return 
  // so react trigger re-render (diff object new list(ref))..
  const result = [...list];

  // remove the item
  const [movedItem] = result.splice(fromIndex, 1);

  // insert the item
  result.splice(toIndex, 0, movedItem);

  return result;
}
