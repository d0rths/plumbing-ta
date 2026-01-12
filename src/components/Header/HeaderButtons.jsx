import Telephone from "@/assets/icons/telephone-fill.svg"
import Button from "@/components/ui/Button.jsx";

const HeaderButtons = () => {
  return (
    <div className="flex flex-col max-sm:mx-4 sm:flex-row justify-center gap-4 mt-10">
      <Button>request service</Button>
      <Button type={"call"}>
        <p className="text-white text-sm font-light mb-[-0.4rem]">call now</p>
        <p className="inline-flex flex-row gap-1">
          <img src={Telephone} alt="" className="w-6"/>
          123-456-7890
        </p>
      </Button>
    </div>
  );
};

export default HeaderButtons;