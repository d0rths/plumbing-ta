import PipeLeak from "@/assets/images/pipe-leak.png";
import Shower from "@/assets/images/shower.png";
import Heat from "@/assets/images/heat.png";
import House from "@/assets/images/house.png";

const MainList = () => {
  const ListElements = [
    {icon: PipeLeak, text: "Emergency Repairs"},
    {icon: Shower, text: "Drain Cleaning"},
    {icon: Heat, text: "Water Heaters"},
    {icon: House, text: "Leak Detection & More"}
  ];

  return (
    <div className="main-list-container">
      <hr className="main-separator"/>
      <div className="py-10 flex flex-col lg:flex-row justify-center items-center flex-wrap gap-8 lg:divide-x divide-[#2f435e] divide-padding main-list">
        {ListElements.map((item, index) => (
          <div key={index} className="">
            <img src={item.icon} alt="" className="w-28"/>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
      <hr className="main-separator"/>
    </div>
  );
};

export default MainList;