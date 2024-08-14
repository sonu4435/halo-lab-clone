import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const MagneticEffect = ({
  children,
  className = "",
  borderClassName = "",
  distance = 100 // Default distance
}) => {
  const ref = useRef(null);
  const [rotate, setRotate] = useState(0);

  // Magnetic effect motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);  

  // Transform x and y to control the magnetic effect
  const xTransform = useTransform(x, [-distance, distance], [-20, 20]);
  const yTransform = useTransform(y, [-distance, distance], [-20, 20]);

  // Transform x and y to control scaling effect
  const scaleTransform = useTransform([x, y], ([x, y]) => {
    const dist = Math.sqrt(x * x + y * y);
    return 1 - Math.min(dist / distance, 0.08); // Adjust scale factor here
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
      className={`relative h-[19rem] w-[19rem] rounded-full border border-gray-300/40 flex items-center justify-center ${className}`}
    >
      {children}
      <div
        className={`CircularBorderEffect absolute h-full w-full z-10 rounded-full ${borderClassName}`}
        style={{
          transform: `rotate(${rotate}deg)`,
          transition: "transform 0.005s ease-in-out 0.005s"
        }}
      />
    </motion.div>
  );
};

export default MagneticEffect;
