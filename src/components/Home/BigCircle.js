import React from "react";
import {motion} from 'framer-motion'

function BigCircle() {

  return (
    <div className="flex justify-center">
      <motion.div 
      className="absolute top-[1350px] mx-auto z-0 rounded-full w-[2000px] h-[2000px]  bg-orangePrimary "
      initial={{top:1700, width:1500, height:1500}}
      whileInView={{top:1350, width:2000, height:2000}}
      transition={{duration:0.5}}
      >
      </motion.div>
      <motion.div 
      className="absolute top-[1500px] mx-auto z0 rounded-full w-[2000px] h-[2000px] bg-orangeSecound"
      initial={{top:1700, width:1500, height:1500}}
      whileInView={{top:1500, width:2000, height:2000}}
      transition={{duration:0.5}}
      >

      </motion.div>
    </div>
  );
}

export default BigCircle;
