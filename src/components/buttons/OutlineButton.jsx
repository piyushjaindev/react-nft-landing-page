

function OutlineButton({icon, label, classes=''}) {
    return (
      <button className={`bg-transparent border-[#a259ff] border-2 py-4 px-7 rounded-2xl flex gap-3 text-white  font-display text-base font-semibold justify-center items-center cursor-pointer ${classes}`}>
        { icon && <img src={icon} alt="icon" />}
        <p>{label}</p>
      </button>
    )
  }
  
  export default OutlineButton