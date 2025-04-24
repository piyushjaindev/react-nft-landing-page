function Input({
  prefix,
  inputType = "text",
  placeholder = "Input here",
  suffix,
  className = "",
}) {
  return (
    <div className={`flex bg-white rounded-20 mt-5 text-black ${className}`}>
      {prefix && prefix}
      <input
        type={inputType}
        placeholder={placeholder}
        className="flex-1 mx-5 my-2 h-[36px] outline-none"
      />
      {suffix && suffix}
    </div>
  );
}

export default Input;
