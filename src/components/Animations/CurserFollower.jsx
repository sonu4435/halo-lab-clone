import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CursorFollower = ({ isVisible, position }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(
    () => {
      if (!isVisible) return;

      const handleMouseMove = e => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    },
    [isVisible]
  );

  return isVisible
    ? <motion.div
        className="fixed top-0 left-0 z-[9999] h-20 w-20 pointer-events-none bg-white rounded-full"
        style={{
          width: 40,
          height: 40,
          translateX: position ? position.x - 20 : mousePosition.x - 20,
          translateY: position ? position.y - 20 : mousePosition.y - 20
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    : null;
};

export default CursorFollower;
