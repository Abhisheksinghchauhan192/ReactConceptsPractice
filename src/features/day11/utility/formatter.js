function timeFormater(ms) {
  const hours = Math.floor(ms / 3600000);
  const minutes = Math.floor((ms % 3600000) / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  const miliseconds = Math.floor((ms % 1000) / 10);
  const hDisplay = hours ? String(hours).padStart(2, "0") + ":" : "";

  return `${hDisplay}${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}:${String(miliseconds).padStart(2, "0")}`;
}

export { timeFormater };
