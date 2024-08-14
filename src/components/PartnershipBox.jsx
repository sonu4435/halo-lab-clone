import React, { useEffect } from "react";
import ArrowAnimation from "./Animations/ArrowAnimation";

const PartnershipBox = ({
  title,
  description,
  img,
  isHovered,
  onHover,
  onLeave
}) => {
  return (
    <div
      className="boxContainer group rounded-2xl flex w-full h-[280px] relative z-20 cursor-pointer bg-slate-100"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="w-auto p-8 flex items-start justify-start h-full">
        <div className="box h-14 w-14 rounded-full">
          <img src={img} alt={`${title} image`} />
        </div>
        <ArrowAnimation isHovered={isHovered} />
      </div>
      <div className="px-8 h-full w-full flex flex-col items-start justify-start py-12 gap-4">
        <h1 className="text-3xl font-medium font-SuisseBold">
          {title}
        </h1>
        <p className="text-lg leading-tight tracking-wide">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PartnershipBox;
