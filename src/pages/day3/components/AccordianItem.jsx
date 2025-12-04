import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function AccordianItem({ q, a, id, isOpenIndex, onClick }) {
  const [isOpen, setIsOpen] = useState(false);

  function showToggle() {
    setIsOpen(!isOpen);
  }

  // calculate the current one is to show or not .
  const selected = id === isOpenIndex;

  return (
    <div
      className="flex flex-col p-4 bg-blue-700 m-2 rounded-xl cursor-pointer"
      onClick={() => {
        showToggle();
        // set the isOpenId to current Item.
        onClick(id);
      }}
    >
      <div className="flex justify-between p-4">
        <h2 className="text-xl font-bold">{q}</h2>
        <button className=" px-4 py-2 rounded-2xl cursor-pointer">
          {isOpen && selected ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>

      {isOpen && selected && (
        <p className="text-xl font-semibold text-gray-300">{a}</p>
      )}
    </div>
  );
}
