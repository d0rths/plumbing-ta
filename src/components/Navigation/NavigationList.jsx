import Chevron from "@/assets/icons/chevron-down.svg"

const NavigationList = () => {
  const navList = ["Home", "About Us", "Services", "Pricing"];

  return (
    <div className="flex flex-row gap-6 text-white">
      {navList.map((item, index) => (
        <div key={index} className="flex flex-row items-center gap-1 cursor-pointer">
          <p>{item}</p>
          <img src={Chevron} alt="" className="w-6 fill-primary-light stroke-primary-light"/>
        </div>
      ))}
    </div>
  );
};

export default NavigationList;