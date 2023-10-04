import Button from '../Button'
import React, { useState, useEffect, useRef } from 'react';

function AnimationLabel() {
  const [scrollOpacity, setScrollOpacity] = useState(0); // Początkowa wartość opacity
  const [scrollSize, setScrollSize] = useState(0); // Początkowa wartość opacity
  
  const option = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight; 
      const rect =option.current.getBoundingClientRect()
      const distanceFromBottom = windowHeight - rect.top -200;

      if(distanceFromBottom>0){
        const newOpacity = Math.min(1, scrollOpacity + 0.0005 * distanceFromBottom);
        const newSize = Math.min(1.1, scrollSize + 0.0004 * distanceFromBottom);
        setScrollOpacity(newOpacity);
        setScrollSize(newSize)
      }else{
        setScrollOpacity(0);
        setScrollSize(0)
        
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollOpacity, scrollSize]);

  return (
    <div ref={option} style={{opacity:scrollOpacity, transform: `scale(${scrollSize})`}} className='relative z-20 text-white font-league-gothic my-[400px] '>
      <div className='flex flex-col items-center gap-4'>
        <h2 className='flex flex-col text-[50px] text-center font-bold tracking-[2px] whitespace-nowrap'>THOUSANDS OF PEOPLE <span className='text-orangeDark'>TRUST OUR KEYBOARDS</span></h2>
        <p className='flex flex-col text-[20px] tracking-[2px] text-center whitespace-nowrap'>JOIN THE GROUP OF PEOPLE WHO HAVE REACHED A HIGHER LEVEL <span>AND ARE SATISFIED WITH THE QUALITY OF OUR PRODUCTS</span> </p>
        <Button title="BUY NOW" />
      </div>
    </div>
  )
}

export default AnimationLabel