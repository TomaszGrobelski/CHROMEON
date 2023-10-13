import React from "react";
import Wheel from "../../images/Specyfikation/Wheel.png";
import { motion } from "framer-motion";

function SpinningWheel() {
  
  return (
    <motion.div 
    className=" my-[60px] text-white"
    initial={{x:"-50vw"}}
    whileInView={{x:0}}
    transition={{duration:0.9}}
    >
      <img
        className="max-w-[350px]  lg:relative -lg:left-3 lg:-top-[350px] animate-spin"
        src={Wheel}
        alt="SpinningWheel"
      />
    </motion.div>
  );
}

export default SpinningWheel;
