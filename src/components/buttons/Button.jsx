function Button({ icon, label, classes = "", onClick }) {
  return (
    <button
      className={`bg-[#a259ff] py-4 px-7 rounded-2xl flex gap-3 text-white  font-display text-base font-semibold justify-center cursor-pointer ${classes}`}
      onClick={onClick}
    >
      {icon && <img src={icon} alt="icon" />}
      <p>{label}</p>
    </button>
  );
}

export default Button;
