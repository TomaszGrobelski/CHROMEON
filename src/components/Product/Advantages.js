import React from "react";
import CustomizedAccordions from "./CustomizedAccordions";
import SpinningWheel from "./SpinningWheel";


function Advantages() {
  
  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:gap-6 text-white my-[100px]">
        <div className="lg:w-1/2">
          <h2
            className="flex gap-2 text-[60px] font-league-gothic font-bold "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            WHY <span className=" text-orangeDark"> CHROMEON?</span>
          </h2>
          <p className=" text-[18px] sm:text-[34px] text-justify sm:text-left font-bold my-4 tracking-[2px]" data-aos="fade-up" data-aos-duration="1000">
            The benefits of using our keyboards as a tool for personal development are endless.
          </p>
          <p
            className="relative z-10 text-[18px] font-OpenSans font-normal my-6 tracking-[2px]"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Pending a few minutes each day typing away on your keyboard can lead to profound insights into your
            thoughts, goals, and challenges. It's incredible how a simple tool like a keyboard can help you gain clarity
            about your emotions, monitor your progress, and spot patterns and areas where you can improve. Don't
            overlook the potential of a well-used keyboard in your life. With{" "}
            <span className="font-bold">CHROMEON</span> expert guidance and typing exercises, you can elevate your
            keyboarding practice to new heights and witness tangible improvements in both your personal and professional
            endeavors.
          </p>
        </div>
        <CustomizedAccordions />
      </div>
      <SpinningWheel />
    </div>
  );
}

export default Advantages;
