export default function DropDownSelection({ value, onChange, data, name }) {
  return (
    <div className="flex gap-4 items-center w-50 text-lg font-bold h-20">
      <label htmlFor={name}>{name}:</label>
      <select
        id={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex justify-center items-center text-lg font-semibold cursor-pointer border-none bg-teal-50 ring-2 ring-teal-300 rounded-xl w-full h-1/2 "
      >
        <option value={""} disabled={true} defaultChecked={true}>
          --select--
        </option>
        {[...data].map((d) => {
          return <option key={d}>{d}</option>;
        })}
      </select>
    </div>
  );
}
