import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { SlOptions } from "react-icons/sl";

const VideoSection = () => {
  const videos = [
    "/assets/home-story-1.mp4",
    "/assets/home-story-2.mp4",
    "/assets/home-story-3.mp4"
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(
    () => {
      const videoElement = videoRef.current;

      const updateProgress = () => {
        const percentage =
          videoElement.currentTime / videoElement.duration * 100;
        setProgress(percentage);
      };

      const onVideoEnd = () => {
        setProgress(100);
        if (currentVideoIndex < videos.length - 1) {
          setTimeout(() => {
            setProgress(0);
            setCurrentVideoIndex(currentVideoIndex + 1);
          }, 300);
        } else {
          setTimeout(() => {
            setProgress(0);
            setCurrentVideoIndex(0);
          }, 300);
        }
      };

      videoElement.addEventListener("timeupdate", updateProgress);
      videoElement.addEventListener("ended", onVideoEnd);

      return () => {
        videoElement.removeEventListener("timeupdate", updateProgress);
        videoElement.removeEventListener("ended", onVideoEnd);
      };
    },
    [currentVideoIndex]
  );

  const handleNextVideo = () => {
    setCurrentVideoIndex((currentVideoIndex + 1) % videos.length);
    setProgress(0);
  };

  const handlePrevVideo = () => {
    setCurrentVideoIndex(
      (currentVideoIndex - 1 + videos.length) % videos.length
    );
    setProgress(0);
  };

  return <div className="StatusView w-[480px] lg:w-[35%] h-[603px] lg:h-[512px] xl:h-[603px] min-w-[300px] sm:w-[819px] sm:h-[400px] relative right-0 lg:top-0 sm:top-1/3 lg:-translate-y-0 sm:-translate-y-1/2 px-4">
      <div className="InnerSide h-full w-full bg-[#242C34] rounded-2xl overflow-hidden relative" onClick={e => {
          const x = e.clientX - e.target.getBoundingClientRect().left;
          if (x > e.target.offsetWidth / 2) {
            handleNextVideo();
          } else {
            handlePrevVideo();
          }
        }}>
        <div className="statusProfile w-full absolute z-[100] top-6 h-16 flex items-center justify-between px-5">
          <div className="userThings w-3/4 h-full flex items-center gap-2">
            <div className="profileLogo h-10 w-10 bg-red-600 overflow-hidden rounded-full">
              <img src="/assets/_ava-founders3.avif" alt="Avatar" />
            </div>
            <h2 className="titleText text-white/70 font-Suisse tracking-wide text-base">
              halolabteam
            </h2>
            <span className="text-white/60 font-Suisse text-sm">1h</span>
          </div>
          <SlOptions className="text-white" />
        </div>
        <video src={videos[currentVideoIndex]} ref={videoRef} autoPlay muted height="100%" width="100%" className="h-full relative top-4 w-full bg-cover bg-no-repeat bg-center" />

        {/* Progress Bars */}
        <div className="absolute top-0 left-0 w-full flex gap-2 p-2 py-4">
          {videos.map((video, index) =>
            <div key={index} className="h-1 bg-gray-700 w-full rounded">
              <motion.div
                className={`h-full ${currentVideoIndex >= index
                  ? "bg-white"
                  : "bg-gray-500"} rounded`}
                initial={{ width: 0 }}
                animate={{
                  width: currentVideoIndex === index ? `${progress}%` : "100%"
                }}
                transition={{
                  ease: "linear",
                  duration: currentVideoIndex === index ? 0 : 0.3
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>;
};

export default VideoSection;
