import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

function HorizontalWrapper({ children, height, direction }) {
  const scrollRef = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const xTransform = useTransform(scrollYProgress, [0, 1], [0, direction]);

  return (
    <div ref={scrollRef} className=" relative h-[700px] ">
      <motion.div
        className="absolute flex gap-1 top-[10%] -left-[300px]"
        style={{
          height: height,
          translateX: xTransform,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default HorizontalWrapper;
