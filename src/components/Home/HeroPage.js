
import klawiaturaHome from '../../images/klawiaturaHome.png'
import sideLeft from "../../images/sideLeft.png";
import Button from "../Button";
import { FaAnglesDown } from "react-icons/fa6";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

function HeroPage() {
  const keyboardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: keyboardRef,
    offset: ["start end", "end start"],
  });

  const spring = useSpring(scrollYProgress, {
    stiffness: 160,
  });
  const yCTransform = useTransform(spring, [0, 1], [0, -150]);

  const headerVariant = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.4,
        duration: 2,
      },
    },
  };

  const handleClick=()=>{
    window.scroll({
      top:3600,
      behavior:"smooth"
    })
  }

  return (
    <motion.header
      className="relative text-white mt-12 flex flex-col items-center "
      variants={headerVariant}
      initial="initial"
      animate="animate"
    >
      <motion.h1 className="relative flex flex-col gap-3 tracking-[-4px] text-center font-bold text-6xl sm:text-8xl max-w-[700px]">
        <span>
          TIME TO TAKE <span className="text-orangePrimary">CONTROL</span>{" "}
        </span>
        <span>OF YOUR KEYBOARD</span>

        <motion.div
          name="image"
          style={{ y: yCTransform }}
          initial={{ x: 0}}
          animate={{ x: [0, 4, -4, 0]}}
          exit={{ x: 0 }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "loop", ease:"linear" }}
        >
          <img
            className="absolute w-[240px] max-w-[344px] max-h-[434px] left-[-120px] -top-[80px] rounded-lg opacity-40 shadow-md shadow-white "
            loading="lazy"
            width="344px"
            height="434px"
            src={sideLeft}
            alt="keyboard-left"
            ref={keyboardRef}
          />
        </motion.div>
      </motion.h1>
      <p className="max-w-[550px] text-center m-4 text-gray-400">
        Are you ready to elevate your <span className="font-bold text-white ">keyboard skills</span> and kickstart your
        journey to success? It's time to take action and steer your career towards success!
      </p>
      <motion.div whileHover={{ scale: 1.05, rotate: "-2.5deg" }} whileTap={{ scale: 0.95, rotate: "5deg" }}>
        <Button title="Buy Now" />
      </motion.div>
      <figure id="rotating-image" className="mt-10 rounded-sm">
        <img
          className="transition duration-75 rounded-sm "
          width="975" height="362"
          loading="lazy"
          src={klawiaturaHome}
          alt="keyboard"
        />
      </figure>
      <button aria-label="Scroll to section About" onClick={handleClick} className="mt-20 mb-40">
        <FaAnglesDown className="relative top-5 animate-bounce text-white text-[100px]" />
      </button>
    </motion.header>
  );
}

export default HeroPage;
