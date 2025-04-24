function Input({
  prefix,
  inputType = "text",
  placeholder = "Input here",
  suffix,
  className = "",
}) {
  return (
    <div
      className={`flex bg-white rounded-20 mt-5 text-black py-2 px-4 ${className}`}
    >
      {prefix && prefix}
      <input
        type={inputType}
        placeholder={placeholder}
        className="flex-1 h-[36px] outline-none"
      />
      {suffix && suffix}
    </div>
  );
}

export default Input;
