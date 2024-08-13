import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { SlEnergy } from "react-icons/sl";
import TextAnimation from "../components/Animations/TextAnimation";
import MagneticEffect from "../components/MagneticEffect";

const HomePage = () => {
  const titles = ["smart", "Big", "tech", "buzz", "Cool"];
  const desc =
    "Over the past 10 years, we've perfected our Design & Development game and are eager to help passionate Founders perfect theirs. Success is a team play, right? Let's aim for the top together!";

  const images = [
    "/assets/_home-hero_01.avif",
    "/assets/_home-hero_02.avif",
    "/assets/_home-hero_03.avif",
    "/assets/_home-hero_04.avif",
    "/assets/_home-hero_05.avif"
  ];

  const videos = [
    "/assets/home-story-1.mp4",
    "/assets/home-story-2.mp4",
    "/assets/home-story-3.mp4"
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // Hover state

  useEffect(
    () => {
      const interval = setInterval(() => {
        setCurrentTitleIndex(prevIndex => (prevIndex + 1) % titles.length);
      }, 3000);

      return () => clearInterval(interval);
    },
    [titles.length]
  );

  useEffect(
    () => {
      const videoElement = videoRef.current;

      const updateProgress = () => {
        const percentage =
          videoElement.currentTime / videoElement.duration * 100;
        setProgress(percentage);
      };

      videoElement.addEventListener("timeupdate", updateProgress);

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

  return (
    <div className="homePage">
      <Navbar />
      <section className="landingPage h-screen flex w-screen items-center justify-center gap-10">
        <div className="max-w-[55vw] w-[54vw] h-[603px] rounded-3xl relative left-0 top-1/2 -translate-y-1/2">
          <img
            src="/assets/backgroundType.webp"
            alt="background"
            className="h-full w-full bg-cover bg-center bg-no-repeat"
          />
          <div className="PageContent absolute h-[90%] w-full bottom-0">
            <h1 className="text-[10rem] overflow-hidden text-wrap leading-[0.9] font-bebas uppercase text-white !font-light tracking-wide px-14">
              Let&apos;s build THE NEXT
              <br />
            </h1>
            <h1 className="text-[10rem] overflow-hidden duration-500 leading-none font-bebas uppercase text-white !font-light tracking-wide px-14">
              <AnimatePresence mode="wait">
                {titles[currentTitleIndex].split("").map((item, index) =>
                  <motion.span
                    key={currentTitleIndex + "-" + index}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{
                      ease: [0.22, 1, 1, 1],
                      delay: index * 0.03
                    }}
                    className="inline-block leading-none"
                  >
                    {item}
                  </motion.span>
                )}
              </AnimatePresence>
              <span className="relative z-10"> thing</span>
            </h1>
            <div className="imageContainer absolute h-[25rem] w-[25rem] -right-10 top-1/2 -translate-y-2/3 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentTitleIndex + "-next"}
                  src={images[(currentTitleIndex + 1) % images.length]}
                  alt="Next Image"
                  initial={{ y: "50%", height: "0%", width: "0%", opacity: 0 }}
                  animate={{
                    y: "0%",
                    height: "100%",
                    width: "100%",
                    opacity: 1
                  }}
                  exit={{ y: "-50%", height: "0%", width: "0%", opacity: 0 }}
                  transition={{ ease: [0.22, 1, 1, 1], duration: 0.5 }}
                  className="absolute"
                />
              </AnimatePresence>
            </div>
          </div>
          <div className="bottomPart mb-5 flex items-center justify-between gap-4 absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-20 border-t">
            <div className="flex gap-5">
              <h2 className="text-6xl text-white font-medium">10Y</h2>
              <p className="text-white w-[256px] uppercase text-xl">
                of design-driven product development
              </p>
            </div>

            <div
              className="btnStyle cursor-pointer w-[400px] h-full flex items-center justify-end"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <motion.span
                className="IconS h-10 w-10 bg-white rounded-full flex items-center justify-center"
                initial={{ scale: 1 }}
                animate={{ scale: isHovered ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              >
                <SlEnergy className="h-6 w-6" />
              </motion.span>
              <button className="uppercase px-8 py-3 font-semibold font-Suisse text-sm bg-[#FDC448] rounded-full">
                let&apos;s talk
              </button>
              <motion.span
                className="IconS h-10 w-10 bg-white rounded-full flex items-center justify-center"
                initial={{ height: "2.5rem", width: "2.5rem" }}
                animate={{
                  height: isHovered ? "2.5rem" : 0,
                  width: isHovered ? "2.5rem" : 0
                }}
                transition={{ duration: 0.3 }}
              >
                <SlEnergy className="h-6 w-6" />
              </motion.span>
            </div>
          </div>
        </div>
        {/* Video Section */}
        <div className="StatusView w-[35vw] h-[603px] relative right-5 top-1/2 -translate-y-1/2 px-14 py-3">
          <div
            className="InnerSide h-full w-full bg-gray-900 rounded-3xl overflow-hidden relative"
            onClick={e => {
              const x = e.clientX - e.target.getBoundingClientRect().left;
              if (x > e.target.offsetWidth / 2) {
                handleNextVideo();
              } else {
                handlePrevVideo();
              }
            }}
          >
            <video
              src={videos[currentVideoIndex]}
              ref={videoRef}
              autoPlay
              muted
              className="h-full w-full bg-cover bg-no-repeat bg-center"
            />

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
                      width:
                        currentVideoIndex === index ? `${progress}%` : "100%"
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
        </div>
      </section>
      <section className="aboutPage h-[150vh] w-screen">
        <div className="safeAreaView w-full flex h-full px-16 py-20 my-20 relative">
          <div className="leftArea w-1/4 relative left-0">
            <img
              src="/assets/_ava-founders0.avif"
              alt="founders"
              className="h-16"
            />
            <p className="w-40 uppercase text-white p-3 leading-tight">
              founders <br /> of halo lab
            </p>
          </div>
          <div className="RightArea w-3/4 relative right-0">
            <p className="text-white px-10 text-[48px] leading-none font-medium">
              <TextAnimation text={desc} />
            </p>
          </div>
          <div className="aboutBottomPart capitalize w-full h-[40vh] grid grid-flow-col px-16 gap-4 absolute bottom-0 -translate-y-1/2 left-0">
            <MagneticEffect>
              <div className="_FeaturedBox1 h-[20rem] relative w-[20rem] rounded-full border border-gray-300/40 flex flex-col text-white gap-4 items-center justify-center">
                <img src="/assets/_award-dribbble.svg" alt="award1" />
                <h2 className="text-xl px-10 text-center font-medium">
                  #1 Team in the world on Dribble
                </h2>
                <div className="CircularBorderEffect absolute h-full w-full z-10 rounded-full" />
              </div>
            </MagneticEffect>
            <MagneticEffect>
              <div className="_FeaturedBox2 h-[20rem] relative w-[20rem] rounded-full border border-gray-300/40 flex flex-col text-white gap-4 items-center justify-center">
                <img src="/assets/_award-clutch2.svg" alt="award1" />
                <h2 className="text-xl px-10 text-center font-medium">
                  Top 100 Global Service provider by clutch
                </h2>
                <div className="CircularBorderEffect absolute h-full w-full z-10 rounded-full" />
              </div>
            </MagneticEffect>
            <MagneticEffect>
              <div className="_FeaturedBox3 h-[20rem] relative w-[20rem] rounded-full border border-gray-300/40 flex flex-col text-white gap-4 items-center justify-center">
                <img src="/assets/_award-5stars.svg" alt="award1" />
                <h2 className="text-xl px-10 text-center font-medium">
                  5 Stars rating on GoodFirms
                </h2>
                <div className="CircularBorderEffect absolute h-full w-full z-10 rounded-full" />
              </div>
            </MagneticEffect>
            <MagneticEffect>
              <div className="_FeaturedBox5 h-[20rem] relative w-[20rem] rounded-full border border-gray-300/40 flex flex-col text-white gap-4 items-center justify-center">
                <img src="/assets/_award-upwork.svg" alt="award1" />
                <h2 className="text-xl px-10 text-center font-medium">
                  100% Job Success On Upwork
                </h2>
                <div className="CircularBorderEffect absolute h-full w-full z-10 rounded-full" />
              </div>
            </MagneticEffect>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
