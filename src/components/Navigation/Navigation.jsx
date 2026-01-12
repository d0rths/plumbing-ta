import NavigationList from "@/components/Navigation/NavigationList.jsx";

import Logo from "@/assets/images/logo.png";
import NavigationCall from "@/components/Navigation/NavigationCall.jsx";
import Button from "@/components/ui/Button.jsx";
import {useState} from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navigation w-full py-2">
      <div className="flex flex-row items-center justify-between xl:mx-[8%] mx-[2%]">
        <img src={Logo} alt="" className="xl:w-48 w-36"/>
        <div className="hidden xl:flex flex-row gap-2">
          <NavigationList/>
          <NavigationCall/>
          <Button type={"navigation"} classnames={"ml-2"}>get a quote</Button>
        </div>

        <button
          className="xl:hidden flex flex-col gap-1 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>

        {isOpen && (
          <div className="xl:hidden absolute top-36 right-0 w-full max-w-96 bg-primary shadow-lg z-50">
            <div className="flex flex-col gap-4 p-6">
              <NavigationList />
              <NavigationCall />
              <Button type={"navigation"}>get a quote</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;