const Button = ({type = "", classnames = "", children}) => {
  const typeClasses =
    type === "navigation"
      ? "bg-[linear-gradient(180deg,#eb8d06_0%,#ee5d0b_60%)]"
      : type === "call"
        ? "bg-[linear-gradient(180deg,#0e2449_0%,#02132d_50%)]"
        : "bg-[linear-gradient(180deg,#2377ca_0%,#064aa5_50%)]";

  return (
    <a href=""
       className={`
       button-shadow uppercase text-md xl:text-2xl text-white font-bold py-3 px-6 rounded-sm flex items-center justify-center flex-col ${typeClasses} ${classnames}
       `}>
      {children}
    </a>
  );
};

export default Button;