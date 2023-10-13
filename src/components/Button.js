import { useState } from "react";
import {twMerge} from 'tailwind-merge'

function Button({ title, icon, additionalClasses }) {
  const [hover, setHover] = useState(false);

  const buttonClass = `relative flex items-center rounded bg-white text-gray-800 text-2xl max-w-[170px] py-3 px-7 m-4 text-center font-sans bg-gradient-45 transition duration-500
  ${additionalClasses || ""} `;

  const titleStyle = {
    transition: "transform 0.5s",
    transform: hover ? "translateX(-30px)" : "translateX(0)",
  };

  const iconOpacity = `absolute top-[21px] text-white text-[18px] animate-bounce transtion duration-500 ${
    hover ? "opacity-100 left-[105px]" : "opacity-0 left-[90px]"
  }`;
  return (
    <button className={twMerge(buttonClass)} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <span className={titleStyle}>{title} </span>
      <span className={iconOpacity}>{icon}</span>
    </button>
  );
}

export default Button;
