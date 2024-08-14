import React from "react";
import { motion } from "framer-motion";
import { MdOutlineArrowOutward } from "react-icons/md";

const ArrowAnimation = ({ isHovered }) => {
  return (
    <motion.div className="box h-14 w-14 rounded-full border border-black overflow-hidden flex relative items-center justify-center">
      <motion.div
        className="absolute h-full w-full"
        initial={{ y: 0, x: 0, opacity: 1 }}
        animate={{
          y: isHovered ? -20 : 0,
          x: isHovered ? 20 : 0,
          opacity: isHovered ? 0 : 1
        }}
        transition={{ duration: 0.3 }}
      >
        <MdOutlineArrowOutward className="h-full w-full p-4" />
      </motion.div>
      <motion.div
        className="absolute h-full w-full bg-black text-white rounded-full"
        initial={{ height: 0, width: 0, opacity: 0 }}
        animate={{
          height: isHovered ? "100%" : 0,
          width: isHovered ? "100%" : 0,
          opacity: isHovered ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <MdOutlineArrowOutward className="h-full w-full p-4" />
      </motion.div>
    </motion.div>
  );
};

export default ArrowAnimation;
