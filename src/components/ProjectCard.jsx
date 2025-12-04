import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import { useState } from "react";

export default function ProjectCard({ name, desc, link, details }) {
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(!show);
  }

  return (
    <div
      className="flex flex-col justify-center  items-center gap-2 p-4 border-emerald-200 shadow-sm shadow-emerald-100 border-2 w-sm rounded-lg bg-linear-to-br from-slate-800 to-slate-950
        inset-shadow-black inset-shadow-sm
        "
    >
      <Avatar img={desc[0]} />
      <h2 className="text-3xl font-bold">{name}</h2>
      <div className="flex justify-end p-2 ">
        <Link to={link} className="text-blue-400 font-bold text-lg">
          Link
        </Link>
      </div>
      <p className="text-ceter text-lg font-semibold">{desc}</p>
      <button
        className="flex px-4 py-2 bg-teal-300 border-none ring-2 ring-indigo-950  rounded-xl text-slate-900 font-semibold"
        onClick={handleShow}
      >
        {show ? "Hide Details" : "Show Details"}
      </button>
      {show && (
        <p className="text-lg text-gray-600 font-semibold ">{details}</p>
      )}
    </div>
  );
}
