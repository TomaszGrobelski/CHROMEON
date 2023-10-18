import CircleBlur from "../CircleBlur";
import {  motion } from "framer-motion";


function ChromeLabel() {
  
  return (
    <div className="relative flex flex-col font-bold gap-[100px] items-center z-10 text-white  top-[300px]">
      <motion.p
        className="text-center text-black font-bold text-[120px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
      >
        ?
      </motion.p>
      <motion.p
        className="text-[60px] whitespace-nowrap"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1.5 }}
      >
        IT'S TIME
      </motion.p>
      <motion.p
        className="text-[60px] whitespace-nowrap"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1.5 }}
      >
        TO KNOW
      </motion.p>
      <motion.p
        className="text-[60px] whitespace-nowrap"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1.5 }}
      >
        YOUR
      </motion.p>
      <div className="flex justify-center font-bold gap-9 sm:gap-10 text-[50px] tracking-[-40px]">
        <motion.p
          className="relative "
          initial={{x: 220,scale: 2 }}
          whileInView={{x: 0,scale: 1 }}
          transition={{duration: 2,  delay: 0.6  }}
        >
          C
        </motion.p>
        <motion.p
          className="relative"
          initial={{ x: 170, scale: 2 }}
          whileInView={{ x: 0, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          
        >
          H
        </motion.p>
        <motion.p
          className="relative"
          initial={{ X: 120, scale: 3 }}
          whileInView={{ X: 0, scale: 1 }}
          transition={{ duration: 2 }}
        >
          R
        </motion.p>
        <motion.p
          className="relative "
          initial={{ x: -100, scale: 3 }}
          whileInView={{ x:0, scale: 1 }}
          transition={{ duration: 2 }}
        >
          O
        </motion.p>
        <motion.p
          className="relative "
          initial={{ x: -150, scale: 3 }}
          whileInView={{ x: 0, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          M
        </motion.p>
        <motion.p
          className="relative "
          initial={{ x: -200, scale: 3 }}
          whileInView={{ x: 0, scale: 1 }}
          transition={{ duration: 2, delay: 1 }}
        >
          E
        </motion.p>
        <motion.p
          className=" text-orangeDark relative  "
          initial={{ X: 100, opacity: 0 }}
          whileInView={{ X: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 2 }}
        >
          O
        </motion.p>
        <motion.p
          className=" text-orangeDark relative  "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2 }}
        >
          N
        </motion.p>
      </div>

      <CircleBlur additionalClasses="absolute bg-orange-400 animate-pulse -top-[200px] -left-[100px]" />
      <CircleBlur additionalClasses="absolute bg-orange-600 animate-pulse top-[60px] -right-[100px]" />
    </div>
  );
}

export default ChromeLabel;
