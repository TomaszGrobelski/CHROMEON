import React from "react";

function Photos({ key, image }) {
  return (
    
      <img key={key} src={image} alt="Keyboard" className=" rotate-45 object-contain max-w-[600px] -mx-20" />
    
  );
}

export default Photos;
