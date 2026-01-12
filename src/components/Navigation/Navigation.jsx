import NavigationList from "@/components/Navigation/NavigationList.jsx";

import Logo from "@/assets/images/logo.png";
import NavigationCall from "@/components/Navigation/NavigationCall.jsx";
import Button from "@/components/ui/Button.jsx";

const Navigation = () => {
  return (
    <nav className="navigation w-full py-2">
      <div className="flex flex-row items-center justify-between xl:mx-[8%] mx-[2%]">
        <img src={Logo} alt="" className="xl:w-48 w-36"/>
        <div className="flex flex-row gap-2">
          <NavigationList/>
          <NavigationCall/>
          <Button type={"navigation"} classnames={"ml-2"}>get a quote</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;