import HeaderTitle from "@/components/Header/HeaderTitle.jsx";
import HeaderButtons from "@/components/Header/HeaderButtons.jsx";

import PlumbingPipes from "@/assets/images/pipes-plumbing.jpg";
import Plumber from "@/assets/images/NicePng_worker-png_1138182.png";

const Header = () => {
  return (
    <header className="w-full relative sm:py-20">
      <div className="xl:mx-[8%] w-full">
        <div className="flex flex-col max-w-2xl py-20 max-xl:mx-auto">
          <HeaderTitle />
          <HeaderButtons />
        </div>
      </div>

      <img src={PlumbingPipes} alt="" className="header-background" />
      <img src={Plumber} alt="" className="header-plumber" />
    </header>
  );
};

export default Header;