import React from "react";
import Button from "../Button";
import { motion } from "framer-motion";


function NewsletterSection() {
  
  return (
    <div className="relative flex flex-col items-center text-white md:mt-[400px] py-10 bg-orangePrimary">
      <h2
        className="absolute -top-[90px] flex flex-col font-bold items-center font-league-gothic text-[60px]"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <span>STAY IN TOUCH </span>
        <span className="text-black">WITH US</span>
      </h2>
      <p
        className="p-2 mt-12 font-OpenSans my-8 text-[20px] text-justify mx-12 "
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        Subscribe to our newsletter today and be the first to know about new product releases, exclusive promotions, and
        insider tips on optimizing your typing experience. Join our community of keyboard enthusiasts and never miss out
        on the latest trends.
      </p>
      <form className="flex flex-col gap-4 sm:flex-row items-center" action="">
        <input
          className="min-w-[200px] h-[40px] rounded-xl outline-none text-black px-4 text-[20px] placeholder:text-gray-400"
          placeholder="E-mail"
          type="text"
          data-aos="fade-right"
          data-aos-easing="ease-in"
        />
        <div data-aos="fade-left" data-aos-easing="ease-in-sine">
          <motion.div whileHover={{ scale: 1.05, rotate: "-2.5deg" }}>
            <Button title="Submit" additionalClasses="bg-black text-white " />
          </motion.div>
        </div>
      </form>
    </div>
  );
}

export default NewsletterSection;
