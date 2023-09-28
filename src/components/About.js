import React from "react";
import "@fontsource/league-gothic";
import WindowsAndroid from "../images/WindowsAndroid.png";
import { AiFillWindows, AiFillAndroid, AiFillApple } from "react-icons/ai";
import { FcLinux } from "react-icons/fc";

function About() {
  return (
    <div className="flex font-league-gothic font-bold mx-4 mt-40 p-5 rounded-tl-2xl rounded-tr-2xl bg-orangePrimary justify-between">
      <div className="flex flex-col w-1/2">
        <h2 className=" text-[95px] mt-20 max-w-[430px] self-center tracking-[2px] ">Get to know our product better</h2>
        <p className="m-4 mt-12 text-[30px] text-gray-800 tracking-[2px] opacity-75">
          ChromeOn keyboards are 100% compatible with multiple operating systems. They are perfect for macOS, Windows,
          iOS and Android systems. Most ChromeOn keyboards offer plug-and-play functionality, which means you can simply connect the keyboard to your device via USB or Bluetooth, and it will be recognized without the need for additional drivers or software installation.
        </p>
      </div>
      <div className="flex flex-col items-center gap-12">
        <img className="mt-40 w-3/4 scale-150" src={WindowsAndroid} alt="Windows-Android Switch" />
        <div className="relative flex  items-center animate-spin justify-center w-[250px] h-[250px] rounded-full bg-orangeDark">
          <AiFillWindows className="absolute top-0 rotate-180 text-blue-600 text-[80px]" />
          <AiFillAndroid className="absolute left-0 rotate-90 text-green-500 text-[80px]" />
          <FcLinux className="absolute bottom-0 text-[80px]" />
          <AiFillApple className="absolute right-0 -rotate-90  text-gray-500 text-[80px]" />
        </div>
      </div>
    </div>
  );
}

export default About;
