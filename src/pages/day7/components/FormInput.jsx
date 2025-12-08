export default function FormInput({
  type,
  placeholder,
  name,
  disabled,
  label,
  onChange,
  required
}) {
  return (
    <div className="flex flex-col gap-2  ">
      <label htmlFor={name} className="font-semibold text-sm sm:text-base ">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        disabled={disabled || false}
        id={name}
        onChange={onChange}
        required={required}
        className={`border  rounded-xl px-4 py-2 
            truncate border-gray-200 w-full
            `}
      />
    </div>
  );
}
