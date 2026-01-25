import { timeFormater } from "./utility/formatter";
import { FaPlay, FaPause } from "react-icons/fa";
import { LuTimerReset } from "react-icons/lu";
import { RxLapTimer } from "react-icons/rx";
import { useStopwatch } from "./hooks/useStopwatch";
import LapItem from "./components/LapItem";

export default function Day10Page() {

  const{play,pause,lap,reset,isRunning,elapsedTime,laps,handleNoteChange} = useStopwatch();

  const LapItemList = laps.map((item,index)=>{

    return (
      <LapItem 
      index = {index} 
      time={item.time} 
      key={index}
      updateNote={handleNoteChange}
      note={item.note}
      />
    )
  })
  LapItemList.reverse()

  return (
    <main className="flex justify-center items-center min-h-screen bg-slate-900 text-gray-100 px-6">
      <div className="w-full max-w-4xl bg-slate-950/80 backdrop-blur rounded-3xl p-10 flex flex-col gap-16 shadow-2xl">
        {/* Time Display */}
        <div className="flex justify-center">
          <h1 className="text-3xl md:text-5xl font-mono font-semibold tracking-wider text-emerald-300 drop-shadow-lg">
            {timeFormater(elapsedTime)}
          </h1>
        </div>

        {/* Controls + Laps */}
        <div className="bg-slate-900 rounded-2xl p-8 flex flex-col gap-8">
          {/* Controls */}
          <div className="flex flex-wrap justify-center gap-4">
            <button
              className="w-16 h-12 flex items-center justify-center rounded-xl bg-emerald-600 hover:bg-emerald-500 transition font-medium cursor-pointer disabled:bg-gray-600 disabled:cursor-not-allowed"
              onClick={isRunning ? pause : play}
            >
              {isRunning ? <FaPause title="Pause" /> : <FaPlay title="Start" />}
            </button>

            <button
              className="w-16 h-12 flex items-center justify-center rounded-xl bg-rose-600 hover:bg-rose-500 transition font-medium cursor-pointer"
              onClick={isRunning ? lap : reset}
            >
              {isRunning ? <RxLapTimer size={25} title="Lap"/> : <LuTimerReset size={25} title="Reset"/>}
            </button>
          </div>

          {/* Lap Container */}
          <div className="h-50 overflow-y-auto rounded-xl bg-slate-800 p-4 text-sm text-gray-300">
            {laps.length==0?
            <p className="text-center opacity-60">No laps yet </p>:LapItemList
            }
          </div>
        </div>
      </div>
    </main>
  );
}
