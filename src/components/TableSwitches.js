import redSwitch from "../images/Switches/redSwitch.jpg";
import blueSwitch from "../images/Switches/blueSwitch.jpg";
import brownSwitch from "../images/Switches/brownSwitch.jpg";
import AOS from "../hooks/AOS";

function TableSwitches() {
  AOS();
  const switchesTab = [
    {
      name: "",
      operatingForce: "OperatingForce",
      preTravel: "PreTravel",
      travelDistance: "TravelDistance",
      behavior: "Behavior",
      preLubed: "PreLubed",
      soundLevel: "OundLevel",
      suitableFor: "SuitableFor",
    },
    {
      name: "RED",
      operatingForce: "45 +- 15 gf",
      preTravel: "2 +- 0.6 mm",
      travelDistance: "4 +- 0.4 mm",
      behavior: "Linear",
      preLubed: "Yes",
      soundLevel: "Quiet",
      suitableFor: "Office/Gaming",
      img: redSwitch,
    },
    {
      name: "BLUE",
      operatingForce: "60 +- 15 gf",
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
      operatingForce: "55 +- 15 gf",
      preTravel: "2 +- 0.6 mm",
      travelDistance: "4 +- 0.4 mm",
      behavior: "Tactile",
      preLubed: "Yes",
      soundLevel: "Gentle",
      suitableFor: "Office/Gaming",
      img: brownSwitch,
    },
  ];

  const headTab = switchesTab.map((switchInfo) => {
    const imgDisplay = () => {
      if (switchInfo.img) {
        return <img className="max-w-[100px] p-3" src={switchInfo.img} alt="switch" />;
      }
      return "";
    };

    return (
      <th className="" key={switchInfo.name}>
        {switchInfo.name} {imgDisplay()}
      </th>
    );
  });

  const bodyTab = switchesTab.map((switchInfo, switchIndex) => {
    const propertiesToDisplay = [
      "operatingForce",
      "preTravel",
      "travelDistance",
      "behavior",
      "preLubed",
      "soundLevel",
      "suitableFor",
    ];

    return (
      <td key={`${switchInfo.name}-td`}>
        {propertiesToDisplay.map((property, index) => (
          // Unikalny klucz dla każdego elementu tr
          <tr className="flex justify-center p-1 border-[1px]" key={`${switchInfo.name}-tr-${property}-${index}`}>
            <td className="text-[12px] font-bold min-h-[40px] sm:text-[14px]">{switchInfo[property]}</td>
          </tr>
        ))}
      </td>
    );
  });

  return (
    <table className="bg-white text-black rounded-md" data-aos="fade-left" data-aos-duration="1500">
      <thead className=" border-b-2 border-gray-700 ">
        <tr className=" flex-row gap-1 ">{headTab}</tr>
      </thead>
      <tbody>{bodyTab}</tbody>
    </table>
  );
}

export default TableSwitches;
