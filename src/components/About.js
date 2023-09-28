import React from "react";
import "@fontsource/league-gothic";
import { AiFillWindows, AiFillAndroid, AiFillApple } from "react-icons/ai";
import { FcLinux } from "react-icons/fc";
import CircleBlur from './CircleBlur'
import WinMac from '../images/WinMac.png'
function About() {
  return (
    <div className="flex flex-col relative lg:flex-row font-league-gothic font-bold mx-4 mt-40 p-5 rounded-tl-2xl rounded-tr-2xl bg-orangePrimary bg-gradient-45 justify-between">
      <div className="flex flex-col lg:w-3/4">
        <h2 className=" text-[70px] mt-20 md:max-w-[430px] self-center text-center tracking-[2px] ">Get to know our product better</h2>
        <p className="m-2 mt-12 text-[30px] text-gray-800 tracking-[2px] opacity-75">
          ChromeOn keyboards are 100% compatible with multiple operating systems. They are perfect for macOS, Windows,
          iOS and Android systems. Most ChromeOn keyboards offer plug-and-play functionality, which means you can simply connect the keyboard to your device via USB or Bluetooth, and it will be recognized without the need for additional drivers or software installation.
        </p>
      </div>
      <div className="flex flex-col lg:mt-2 items-center lg:gap-40">
        <div className="relative flex mt-32 items-center animate-spin justify-center w-[250px] h-[250px] rounded-full bg-black">
          <AiFillWindows className="absolute top-0 rotate-180 text-blue-600 text-[80px]" />
          <AiFillAndroid className="absolute left-0 rotate-90 text-green-500 text-[80px] " />
          <FcLinux className="absolute bottom-0 text-[80px]" />
          <AiFillApple className="absolute right-0 -rotate-90  text-white text-[80px]" />
        </div>
        <img className="mt-8 w-3/4 rounded-lg " src={WinMac} alt="Windows-Android Switch" />
      </div>
      <CircleBlur additionalClasses="absolute -top-[100px] -left-[100px]" />
    </div>
  );
}

export default About;
