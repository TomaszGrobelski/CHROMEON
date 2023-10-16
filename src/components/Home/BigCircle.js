import React, { useState } from "react";
import { motion, } from "framer-motion";
import BIG from "./BIG.jpg";

function BigCircle() {
  const [visible, setVisible]=useState(true)


  return (
    <div className="flex justify-center">
      <motion.div
        className="absolute top-[1350px] mx-auto z-0 rounded-full w-[2000px] h-[2000px]  bg-orangeSecound "
        initial={{ top: 1700, width: 1500, height: 1500 }}
        whileInView={{ top: 1350, width: 2000, height: 2000 }}
        transition={{ duration: 0.5 }}
      >
        czxzcxz
      </motion.div>
      <motion.div
        className="absolute flex justify-center top-[1500px] mx-auto z-10 rounded-full w-[2000px] h-[2000px] bg-orangeDark"
        initial={{ top: 1700, width: 1500, height: 1500 }}
        whileInView={{ top: 1500, width: 2000, height: 2000 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative max-w-[300px] sm:max-w-[500px] top-[100px] w-[90%] flex flex-col gap-4 items-start text-white">
          <h2 className=" font-bold text-left font-league-gothic text-[60px]">CHROMEON</h2>
          <p className="text-[28px]">
            At <span className="font-bold">CHROMEON</span> , we know how easy it is to{" "}
            <span className="font-bold">get lost in the sauce.</span>{" "}
          </p>
          <p className="text-[24px]">
            <span className="font-bold">Our mission is simple:</span> to provide high-quality products that promote
            productivity and mental health. We believe that with the right tools and mindset, you can manifest your
            dreams and achieve anything you set your mind to, just like typing on a keyboard.
          </p>
          <div className="relative">
            {visible?<p className="absolute font-bold text-[100px] text-black left-[40%] sm:left-1/2 top-[20%] sm:top-[30%] z-30 ">?</p>:<p></p>}
            <img
              className="relative mix-blend-darken mt-10 brightness-75  rounded-xl blur-sm opacity-90 border-collapse cursor-cell transition-all duration-500 hover:blur-none"
              width="1440" 
              height="960"
              src={BIG}
              alt=""
              onMouseEnter={()=>setVisible(false)}
              onMouseLeave={()=>setVisible(true)}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default BigCircle;
