import React from "react";
import { motion } from "framer-motion";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ArrowButtonAnimation = ({ isHovered, dir }) => {
  const getIcon = () => {
    if (dir === "left") return <FaChevronLeft className="h-full w-full p-4" />;
    if (dir === "right")
      return <FaChevronRight className="h-full w-full p-4" />;
    return <MdOutlineArrowOutward className="h-full w-full p-4" />;
  };

  const getAnimation = () => {
    switch (dir) {
      case "top-left":
        return { y: isHovered ? -20 : 0, x: isHovered ? -20 : 0 };
      case "top-right":
        return { y: isHovered ? -20 : 0, x: isHovered ? 20 : 0 };
      case "bottom-left":
        return { y: isHovered ? 20 : 0, x: isHovered ? -20 : 0 };
      case "bottom-right":
        return { y: isHovered ? 20 : 0, x: isHovered ? 20 : 0 };
      case "left":
        return { y: 0, x: isHovered ? -20 : 0 };
      case "right":
        return { y: 0, x: isHovered ? 20 : 0 };
      default:
        return { y: 0, x: 0 };
    }
  };

  return (
    <motion.div className="box h-14 w-14 rounded-full overflow-hidden flex relative items-center justify-center">
      <motion.div
        className="absolute h-full w-full"
        initial={{ y: 0, x: 0, opacity: 1 }}
        animate={{
          ...getAnimation(),
          opacity: isHovered ? 0 : 1
        }}
        transition={{ duration: 0.3 }}
      >
        {getIcon()}
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
        {getIcon()}
      </motion.div>
    </motion.div>
  );
};

export default ArrowButtonAnimation;
