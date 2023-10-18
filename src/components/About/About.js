import React from "react";
import { AiFillWindows, AiFillAndroid, AiFillApple } from "react-icons/ai";
import { FcLinux } from "react-icons/fc";
import CircleBlur from "../CircleBlur";
import WinMac from "../../images/WinMac.png";

const About = () => (
  <div className="flex flex-col relative xl:flex-row font-league-gothic font-bold mx-4 mt-40 sm:p-5 rounded-tl-2xl rounded-tr-2xl">
    <div className="flex flex-col xl:w-1/2">
      <h2
        className="text-[40px] whitespace-nowrap sm:text-[70px] text-white mt-20 md:max-w-[430px] -tracking-[1px] aos-init aos-animate"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <span className=" text-orangeDark">LVL UP</span> YOUR HARDWARE
      </h2>
      <p
        className=" mt-12 text-[16px] sm:text-[25px] text-justify font-Montserrat text-white tracking-[2px] opacity-90"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        ChromeOn keyboards are 100% compatible with multiple operating systems. They are perfect for macOS, Windows, iOS
        and Android systems. Most ChromeOn keyboards offer plug-and-play functionality, which means you can simply
        connect the keyboard to your device via USB or Bluetooth, and it will be recognized without the need for
        additional drivers or software installation.
      </p>
    </div>
    <div className="flex flex-col lg:mb-1 items-center xl:gap-20 xl:w-1/2">
      <div
        className="relative flex mt-32 items-center animate-spin justify-center w-[250px] h-[250px] rounded-full bg-orangePrimary"
        data-aos="fade-left"
        data-aos-duration="3000"
      >
        <AiFillWindows className="absolute top-0 rotate-180 text-blue-600 text-[80px]" />
        <AiFillAndroid className="absolute left-0 rotate-90 text-green-500 text-[80px] " />
        <FcLinux className="absolute bottom-0 text-[80px]" />
        <AiFillApple className="absolute right-0 -rotate-90  text-white text-[80px]" />
      </div>
      <img
        className="mt-8 w-[90%] max-w-[400px] shadow-lg shadow-gray-600 rounded-lg xl:w-full"
        src={WinMac}
        loading="lazy"
        alt="Windows-Android Switch"
        data-aos="zoom-in-up"
        data-aos-duration="600"
      />
    </div>
    <CircleBlur additionalClasses="absolute -top-[100px] -left-[100px]" />
  </div>
);

export default About;
