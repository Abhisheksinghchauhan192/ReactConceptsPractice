export default function FormInput({
  type,
  placeholder,
  name,
  disabled,
  label,
  onChange,
  required,
  value,
  error,
}) {
  const isInvalid = !!error;
  const className = `border rounded-xl px-4 py-2 w-full truncate
    ${isInvalid ? "border-red-500" : "border-gray-200"}`
    .replace(/\s+/g, " ")
    .trim();

  return (
    <div className="flex flex-col gap-2  ">
      <label htmlFor={name} className="font-semibold text-sm sm:text-base ">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        disabled={disabled || false}
        id={name}
        onChange={onChange}
        required={required}
        className={className}
      />
      {isInvalid && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
