import React, { useState } from "react";


function CustomizedAccordions() {
  
  const [visible, setVisible] = useState([false, false, false, false, false]);

  const handleClick = (index) => {
    const newVisible = [...visible];
    newVisible[index] = !newVisible[index];
    setVisible(newVisible);
  };

  return (
    <div className="relative z-10 mt-[80px] lg:w-1/2">
      <div className="max-h-[400px] transition-all duration-700 ">
        <div
          onClick={() => handleClick(0)}
          className="py-16 border-t-[1px] text-[50px] font-league-gothic tracking-[2px] font-medium cursor-pointer"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          + RGB LIGHTING
        </div>
        {visible[0] ? (
          <p className=" pb-[90px] text-stone-400 text-[18px]">
            Includes over 22 types of RGB lighting settings as well as a static white backlight option and 14 types of
            backlight settings for the white backlight version. You can further easily adjust the RGB hue, saturation,
            brightness, effect speed.
          </p>
        ) : null}
      </div>
      <div>
        <div
          onClick={() => handleClick(1)}
          className="py-16 border-t-[1px] text-[50px] font-league-gothic tracking-[2px] font-medium cursor-pointer"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          + ERGONOMIC
        </div>
        {visible[1] ? (
          <p className=" pb-[90px] text-stone-400 text-[18px]">
            Three levels of adjustable typing angle are designed to provide long-lasting ergonomic wrist support.
          </p>
        ) : null}
      </div>
      <div>
        <div
          onClick={() => handleClick(2)}
          className="py-16 border-t-[1px] text-[50px] font-league-gothic tracking-[2px] font-medium cursor-pointer"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          + STABILIZERS
        </div>
        {visible[2] ? (
          <p className=" pb-[90px] text-stone-400 text-[18px]">
            We've redesigned the stabilizers to stay at the same level as switches, while ensuring the reliability and
            less wobble of large keys such as Spacebar, Left Shift, Backspace and Enter.
          </p>
        ) : null}
      </div>
      <div>
        <div
          onClick={() => handleClick(3)}
          className="py-16 border-t-[1px] text-[50px] font-league-gothic tracking-[2px] font-medium cursor-pointer"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          + HOT SWAP
        </div>
        {visible[3] ? (
          <p className=" pb-[90px] text-stone-400 text-[18px]">
            Each of us has our own unique typing preferences, which is why the K1 Pro offers a hot-swapp option so you
            can easily replace any Gateron low-profile mechanical switch in seconds to customize your typing experience
            without the need for soldering.
          </p>
        ) : null}
      </div>
      <div className="border-b-[1px]">
        <div
          onClick={() => handleClick(4)}
          className="py-16 border-t-[1px] text-[50px] font-league-gothic tracking-[2px] font-medium cursor-pointer"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          + EPIC CORE
        </div>
        {visible[4] ? (
          <p className=" pb-[90px] text-stone-400 text-[18px]">
            A powerful, ultra-low-power ARM-based MCU with 128K Flash will provide greater flexibility for developers.
            The polling rate is 1000Hz in wired mode right out of the box, making lag barely noticeable even in
            competitive gaming.
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default CustomizedAccordions;
