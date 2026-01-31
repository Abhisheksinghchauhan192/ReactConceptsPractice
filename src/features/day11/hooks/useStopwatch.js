import { useState, useEffect, useRef } from "react";

export function useStopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0); // miliseconds are stored
  const [laps, setLaps] = useState([]);

  const startTimeRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    // start the interval that will update the UI
    if (!isRunning) return;

    timerRef.current = setInterval(() => {
      let currentTime = Date.now() - startTimeRef.current;
      setElapsedTime(currentTime);
    }, 120);

    // cleanup function for Removing the interval.
    return () => {
      clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  };

  const handlePause = () => {
    setIsRunning(false);
    setElapsedTime(Date.now() - startTimeRef.current);
    startTimeRef.current = null;
  };

  const handleReset = () => {
    setIsRunning(false);
    setElapsedTime(0);
    setLaps([]);
    startTimeRef.current = null;
  };

  const handleLaps = () => {
    setLaps((prev) => [
      ...prev,
      {
        time: elapsedTime,
        note: "",
      },
    ]);
  };

  const handleNoteChange = (index, newNote) => {
    setLaps((prev) => {
      return prev.map((lap, i) => {
        if (i == index) {
          return { ...lap, note: newNote };
        } else {
          return lap;
        }
      });
    });
  };

  return {
    play: handleStart,
    pause: handlePause,
    reset: handleReset,
    lap: handleLaps,
    laps,
    isRunning,
    elapsedTime,
    handleNoteChange,
  };
}
