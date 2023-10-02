import React, { useState } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
function Accordion() {
  const [available, setAvailable] = useState([false,false,false]);


  const handleClick = (index) => {
    const newAvailable = [...available];
    newAvailable[index] = !newAvailable[index];
    setAvailable(newAvailable);
    console.log(index);
  };


  return (
    <div className=" bg-zinc-900 p-4">
      <div className=" border-t-[1px] border-gray-500 p-2">
        <p onClick={()=>handleClick(0)} className="flex text-[15px] justify-between cursor-pointer ">
          CHROMEON POLAND
          <span className="text-[22px] transition-all duration-[3000ms] ease-in-out ">
            {available[0] ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </span>
        </p>
        {available[0] ? (
          <div className="transition-all text-[14px] duration-[3000ms] ease-in-out">
            <p>About us</p>
            <p>Contact</p>
          </div>
        ) : null}
      </div>
      <div className=" border-t-[1px] border-gray-500">
      <p onClick={()=>handleClick(1)} className="flex text-[15px] justify-between cursor-pointer ">
          CHROMEON POLAND
          <span className="text-[22px] transition-all duration-[3000ms] ease-in-out ">
            {available[1] ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </span>
        </p>
        {available[1] ? (
          <div className="transition-all text-[14px] duration-[3000ms] ease-in-out">
            <p>About us</p>
            <p>Contact</p>
          </div>
        ) : null}
      </div>
      <div className=" border-t-[1px] border-gray-500">
      <p onClick={()=>handleClick(2)} className="flex text-[15px] justify-between cursor-pointer ">
          CHROMEON POLAND
          <span className="text-[22px] transition-all duration-[3000ms] ease-in-out ">
            {available[2] ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </span>
        </p>
        {available[2] ? (
          <div className="transition-all text-[14px] duration-[3000ms] ease-in-out">
            <p>About us</p>
            <p>Contact</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Accordion;
