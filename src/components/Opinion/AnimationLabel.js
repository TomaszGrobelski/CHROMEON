import Button from "../Button";
import { motion } from "framer-motion";

function AnimationLabel() {
  return (
    <motion.div
      className="relative z-20 text-white font-league-gothic my-[400px] "
      initial={{ opacity: 0, scale: 0, rotate: 0 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 720 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <div className="flex flex-col items-center gap-4">
        <h2 className="flex flex-col text-[50px] text-center font-bold tracking-[2px] whitespace-nowrap">
          THOUSANDS OF PEOPLE <span className="text-orangeDark">TRUST OUR KEYBOARDS</span>
        </h2>
        <p className="flex flex-col text-[20px] tracking-[2px] text-center whitespace-nowrap">
          JOIN THE GROUP OF PEOPLE WHO HAVE REACHED A HIGHER LEVEL{" "}
          <span>AND ARE SATISFIED WITH THE QUALITY OF OUR PRODUCTS</span>{" "}
        </p>
        <motion.div whileHover={{ scale: 1.05, rotate: "-2.5deg" }} whileTap={{scale:0.95, rotate:"5deg"}}>
          <Button title="BUY NOW" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default AnimationLabel;
