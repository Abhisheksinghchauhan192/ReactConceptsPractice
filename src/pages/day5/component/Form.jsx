import { useCardData, useCardUpdateData } from "../context/CardContextProvider";
import { useState } from "react";

export default function Form({showCard,onShow}) {

  const [loading, setLoading] = useState(false);
  const dispatch = useCardUpdateData();
  const card = useCardData();

  function handleFromChange(e) {
    dispatch({ ...card, from: e.target.value });
  }

  function handleToChange(e) {
    dispatch({ ...card, to: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
        onShow(!showCard);
        setLoading(false);
    }, 2000);
  }

  function handleMsgChange(e){
    dispatch({...card,msg:e.target.value})
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center text-4xl">
        <h2>Generating....</h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col p-8 bg-slate-900/60 gap-16 ">
      <h2 className="text-2xl font-bold text-gray-200 text-center">
        Fill Details to generate Letter
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-8 bg-slate-900/60 p-8 rounded-xl shadow-lg border border-slate-700/40 w-xl mx-auto"
      >
        <label className="flex flex-col gap-2 text-slate-300 text-sm font-medium">
          From:
          <input
            type="text"
            placeholder="Enter the Sender Name"
            onChange={handleFromChange}
            className="
        bg-slate-800/60 
        border border-slate-700 
        text-slate-100 
        placeholder-slate-400 
        px-4 py-3 
        rounded-lg 
        focus:outline-none 
        focus:ring-2 
        focus:ring-emerald-400 
        focus:border-emerald-400 
        transition
        shadow-sm
      "
          />
        </label>

        <label className="flex flex-col gap-2 text-slate-300 text-sm font-medium">
          To:
          <input
            type="text"
            placeholder="Enter the recipient name"
            onChange={handleToChange}
            className="
        bg-slate-800/60 
        border border-slate-700 
        text-slate-100 
        placeholder-slate-400 
        px-4 py-3 
        rounded-lg 
        focus:outline-none 
        focus:ring-2 
        focus:ring-emerald-400 
        focus:border-emerald-400 
        transition
        shadow-sm
      "
          />
        </label>

        <label className="flex flex-col gap-2 text-slate-300 text-sm font-medium">
          Message:
          <textarea
            placeholder="Write your message here..."
            onChange={handleMsgChange}
            rows={5}
            className="
      bg-slate-800/60 
      border border-slate-700 
      text-slate-100 
      placeholder-slate-400 
      px-4 py-3 
      rounded-lg 
      focus:outline-none 
      focus:ring-2 
      focus:ring-emerald-400 
      focus:border-emerald-400 
      transition
      shadow-sm
      resize-y
    "
          ></textarea>
        </label>

        <button
          className="
      bg-emerald-500 
      text-slate-900 
      font-semibold 
      py-3 
      rounded-lg 
      hover:brightness-95 
      transition 
      shadow 
      active:scale-[0.98]
    "
        >
          Generate Letter
        </button>
      </form>
    </div>
  );
}
