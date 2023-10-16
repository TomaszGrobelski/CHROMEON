import React from "react";

function Photos({ image }) {
  return (
    
      <img 
     
      src={image} 
      alt="Keyboard" 
      className=" rotate-45 object-contain max-w-[600px] -mx-20" 
      loading="lazy"
      />
    
  );
}

export default Photos;
