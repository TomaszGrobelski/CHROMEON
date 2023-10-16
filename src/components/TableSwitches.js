import redSwitch from "../images/Switches/redSwitch.jpg";
import blueSwitch from "../images/Switches/blueSwitch.jpg";
import brownSwitch from "../images/Switches/brownSwitch.jpg";
import AOS from "../hooks/AOS";

function TableSwitches() {
  AOS();
  const switchesTab = [
    {
      name: "",
      operatingForce: "Operating Force",
      preTravel: "PreTravel",
      travelDistance: "Travel Distance",
      behavior: "Behavior",
      preLubed: "PreLubed",
      soundLevel: "OundLevel",
      suitableFor: "Suitable For",
    },
    {
      name: "RED",
      operatingForce: "30 gf",
      preTravel: "2 +- 0.6 mm",
      travelDistance: "4 +- 0.4 mm",
      behavior: "Linear",
      preLubed: "Yes",
      soundLevel: "Quiet",
      suitableFor: "Office / Gaming",
      img: redSwitch,
    },
    {
      name: "BLUE",
      operatingForce: "55 gf",
      preTravel: "2.3 +- 0.6 mm",
      travelDistance: "4 +- 0.4 mm",
      behavior: "Clicky",
      preLubed: "-",
      soundLevel: "Clicky",
      suitableFor: "Typist",
      img: blueSwitch,
    },
    {
      name: "BROWN",
      operatingForce: "40 gf",
      preTravel: "2 +- 0.6 mm",
      travelDistance: "4 +- 0.4 mm",
      behavior: "Tactile",
      preLubed: "Yes",
      soundLevel: "Gentle",
      suitableFor: "Office / Gaming",
      img: brownSwitch,
    },
  ];

  const headTab = switchesTab.map((switchInfo) => {
    const imgDisplay = () => {
      if (switchInfo.img) {
        return <img className="max-w-[60px] sm:max-w-[90px] p-3" loading="lazy" src={switchInfo.img} alt="switch" />;
      }
      return "";
    };

    return (
      <th scope="col"  key={switchInfo.name}>
        <div className="flex flex-col items-center">
          <p>{switchInfo.name}</p> {imgDisplay()}
        </div>
      </th>
    );
  });

  const filteredTab = switchesTab.map(({ name, ...rest }) => rest);
  const bodyTab = (
    <tbody className="">
      {Object.keys(filteredTab[0]).map((key, index) => (
        <tr className=" border-[2px] border-white" key={index}>
          <td scope="row" className=" border-[2px] border-gray-400 text-center sm:text-left font-bold font-OpenSans">{filteredTab[0][key]}</td>
          {filteredTab.slice(1).map((item, itemIndex) => (
            <td className=" border-[2px] text-[14px] border-gray-400 text-center font-OpenSans" key={itemIndex}>{item[key]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );

  return (
    
      <table className="bg-white text-black rounded-md max-w-[900px] " data-aos="fade-left" data-aos-duration="1500">
        <thead className=" border-b-2 border-gray-700 ">
          <tr className=" flex-row ">{headTab}</tr>
        </thead>
        {bodyTab}
      </table>

  
  );
}

export default TableSwitches;
