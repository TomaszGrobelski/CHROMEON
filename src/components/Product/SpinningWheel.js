import React from "react";
import Wheel from "../../images/Specyfikation/Wheel.png";

function SpinningWheel() {

  return (
    <div className=" my-[60px] text-white">
      <img className="max-w-[350px] lg:relative -lg:left-3 lg:-top-[350px] animate-spin" src={Wheel} alt="SpinningWheel" />
    </div>
  );
}

export default SpinningWheel;
