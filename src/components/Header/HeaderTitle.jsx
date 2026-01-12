const HeaderTitle = () => {
  return (
    <div className="flex flex-col max-xl:gap-4">
      <h1
        className="font-unal-sans text-center text-5xl xl:text-7xl font-bold text-white text-shadow-[1px_1px_3px_rgba(0,0,0,0.85)]">
        Reliable
        Plumbing Services
      </h1>
      <hr className="border-0 h-[1px] bg-linear-to-r from-transparent via-[#a9b5c6] to-transparent" />
      <h2 className="font-unal-sans text-center text-2xl xl:text-[2.5rem] font-normal text-secondary-light">Your Trusted Local Plumber</h2>
    </div>
  );
};

export default HeaderTitle;