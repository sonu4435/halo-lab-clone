import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const MagneticEffect = ({ children }) => {
  const ref = useRef(null);
  const [rotate, setRotate] = useState(0);

  // Magnetic effect motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Transform x and y to control the magnetic effect
  const xTransform = useTransform(x, [-100, 100], [-20, 20]);
  const yTransform = useTransform(y, [-100, 100], [-20, 20]);

  // Transform x and y to control scaling effect
  const scaleTransform = useTransform([x, y], ([x, y]) => {
    const distance = Math.sqrt(x * x + y * y);
    return 1 - Math.min(distance / 100, 0.08); // Adjust scale factor here
  });

  useEffect(
    () => {
      const element = ref.current;

      const handleMouseMove = e => {
        const rect = element.getBoundingClientRect();
        const elementCenterX = rect.left + rect.width / 2;
        const elementCenterY = rect.top + rect.height / 2;

        const deltaX = e.clientX - elementCenterX;
        const deltaY = e.clientY - elementCenterY;

        const radians = Math.atan2(deltaY, deltaX);
        const angle = radians * (180 / Math.PI);
        setRotate(angle + 90); // Adjust rotation as needed

        x.set(deltaX);
        y.set(deltaY);
      };

      const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
      };

      element.addEventListener("mousemove", handleMouseMove);
      element.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        element.removeEventListener("mousemove", handleMouseMove);
        element.removeEventListener("mouseleave", handleMouseLeave);
      };
    },
    [x, y]
  );

  return (
    <motion.div
      ref={ref}
      style={{
        x: xTransform,
        y: yTransform,
        scale: scaleTransform,
        transition: "transform 0.2s"
      }}
      className="relative h-[20rem] w-[20rem] rounded-full border border-gray-300/40 flex items-center justify-center"
    >
      {children}
      <div
        className="CircularBorderEffect absolute h-full w-full z-10 rounded-full border-t-2"
        style={{
          transform: `rotate(${rotate}deg)`,
          transition: "transform 0.005s ease-in-out 0.005s"
        } // Adding transition for rotation
        }
      />
    </motion.div>
  );
};

export default MagneticEffect;
