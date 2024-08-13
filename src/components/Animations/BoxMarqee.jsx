import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  const marqueeVariants = {
    animate: {
      x: "-100%",
      transition: {
        ease: "linear",
        repeat: Infinity,
        duration: 10
      }
    }
  };

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="h-auto w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#014C43]"
    >
      <div className="texts border-t-2 border-b-2 border-[#777777] justify-center flex items-center overflow-hidden whitespace-nowrap">
        {["we are ochi", "we are ochi", "we are ochi"].map((items, index) =>
          <motion.h1
            key={index}
            initial={{ x: 0 }}
            animate={{
              x: ["lg", "xl"].includes("lg") ? 0 : "-100%"
            }} // No animation on lg and above
            transition={
              ["lg", "xl"].includes("lg")
                ? {}
                : { ease: "linear", repeat: Infinity, duration: 10 }
            }
            className="text-[28vw] leading-none font-foundersgrotesk uppercase -mb-36 pt-12 text-white pr-20"
          >
            {items}
          </motion.h1>
        )}
      </div>
    </div>
  );
};

export default Marquee;
