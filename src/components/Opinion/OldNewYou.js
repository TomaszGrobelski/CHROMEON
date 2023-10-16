import React from "react";
import {PiArrowCircleDownBold} from 'react-icons/pi';
function OldNewYou() {
  return (
    <div className="text-white mt-[120px] font-bold whitespace-nowrap text-[40px] sm:text-[100px]  ">
      <p className=" animate-animateToLeft">HATRED + FRINGENING + BLOCKING + OVERROAD + BROOK + UNSENSIBLE + UNPLEASANT + INAPPROPRIATE + BLOCKED + HATRED + FRINGENING +</p>
      <div className="flex flex-col items-center whitespace-nowrap text-orangePrimary text-[60px] sm:text-[160px] md:text-[190px] lg:text-[250px] xl:text-[250px] font-league-gothic tracking-[10px]">
        <p>THE OLD YOU</p>
        <PiArrowCircleDownBold className="text-[300px]  my-2" />
        <p>THE NEW YOU</p>
      </div>
      <p className=" animate-animateToRight">INNOVATION + EFFICIENCY+COMFORT + SPEED + PRECISION + EFFICIENCY + LONG LIFE + AESTHETICS + AVAILABILITY + FLEXIBILITY + INNOVATION + EFFICIENCY</p>
    </div>
  );
}

export default OldNewYou;
