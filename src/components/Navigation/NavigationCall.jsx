import Telephone from "@/assets/icons/telephone-fill.svg";

const NavigationCall = () => {
  return (
    <div className="flex flex-row items-center gap-1">
      <div className="p-2 bg-[linear-gradient(135deg,#0d407c_0%,#155da0_50%)] rounded-full aspect-square">
        <img src={Telephone} alt="" className="w-5"/>
      </div>
      <div className="flex flex-col text-white">
        <p className="font-light text-[0.75rem] xl:text-sm">24/7 Emergency Call</p>
        <p className="font-bold text-md xl:text-xl">123-456-7890</p>
      </div>
    </div>
  );
};

export default NavigationCall;