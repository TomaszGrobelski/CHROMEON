import React, { useEffect, useState } from "react";
import CircleBlur from "../CircleBlur";

function ChromeLabel() {
  const [isElementAtTop, setIsElementAtTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elements = document.querySelectorAll(".element");

      elements.forEach((element) => {
        element.style.top = 1000 - scrollY + "px";
        if (element.style.top < "0px") {
          setIsElementAtTop(false);
          window.removeEventListener("scroll", handleScroll);
        } else if (element.style.top > "0px") {
          window.addEventListener("scroll", handleScroll);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isElementAtTop]);

  return (
    <div className=" z-10 text-white sticky top-80">
      <div className="flex justify-center gap-6 text-[70px] font-bold">
        <p className="element relative transition-all duration-[3000ms] ease-out" style={{ top: "1000px" }}>
          C
        </p>
        <p className="element relative transition-all duration-[1000ms] ease-out" style={{ top: "1000px" }}>
          H
        </p>
        <p className="element relative transition-all duration-[2500ms] ease-out" style={{ top: "1000px" }}>
          R
        </p>
        <p className="element relative transition-all duration-[2000ms] ease-out" style={{ top: "5000px" }}>
          O
        </p>
        <p className="element relative transition-all duration-[1000ms] ease-out" style={{ top: "10000px" }}>
          M
        </p>
        <p className="element relative transition-all duration-[2500ms] ease-out" style={{ top: "2000px" }}>
          E
        </p>
        <p
          className="element text-orangeDark relative transition-all duration-[3000ms] ease-out"
          style={{ top: "2000px" }}
        >
          O
        </p>
        <p
          className="element text-orangeDark relative transition-all duration-[1500ms] ease-out"
          style={{ top: "20000px" }}
        >
          N
        </p>
      </div>
      <CircleBlur additionalClasses="absolute bg-orange-400 animate-pulse -top-[200px] -left-[100px]" />
      <CircleBlur additionalClasses="absolute bg-orange-600 animate-pulse top-[60px] -right-[100px]" />
    </div>
  );
}

export default ChromeLabel;
