import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { SlEnergy } from "react-icons/sl";
import VideoSection from "../components/VideoSection";
import MagneticEffect from "../components/MagneticEffect";
import TextAnimation from "../components/Animations/TextAnimation";
import { FaPlay } from "react-icons/fa";
import PartnershipBox from "../components/PartnershipBox";
import ArrowButtonAnimation from "../components/Animations/ArrowBtnReviw";

const HomePage = () => {
  const titles = ["Big", "tech", "buzz", "Cool", "smart"];
  const desc =
    "Over the past 10 years, we've perfected our Design & Development game and are eager to help passionate Founders perfect theirs. Success is a team play, right? Let's aim for the top together!";
  const images = [
    "/assets/_home-hero_01.avif",
    "/assets/_home-hero_02.avif",
    "/assets/_home-hero_03.avif",
    "/assets/_home-hero_04.avif",
    "/assets/_home-hero_05.avif"
  ];

  const boxContents = [
    {
      title: "Discovery",
      description:
        "To lay a solid foundation for the creative process that follows, we begin our journey with the discovery phase.",
      img: "/assets/_marketing-illustration1.svg"
    },
    {
      title: "Design",
      description:
        "By putting users' needs at the forefront, we tell a unique story of your company, juggling with fancy visual elements.",
      img: "/assets/_marketing-illustration2.svg"
    },
    {
      title: "Development",
      description:
        "The motto of our development process is creating digital experiences that are both appealing and functional.",
      img: "/assets/_marketing-illustration3.svg"
    },
    {
      title: "Marketing",
      description:
        "With various tools, our experts can help you expand the target audience and increase brand awareness.",
      img: "/assets/_marketing-illustration4.svg"
    }
  ];

  const partnerships = [
    {
      src: "/assets/_logo-oppo.svg",
      alt: "Oppo",
      text:
        "Designing mobile concepts for a popular brand in electronic products."
    },
    {
      src: "/assets/_logo-udemy.svg",
      alt: "Udemy",
      text:
        "Reimagining the video player for courses and overall viewer experience."
    },
    {
      src: "/assets/_logo-jbl.svg",
      alt: "JBL",
      text:
        "Developing a full-stack application as part of the hi-end audio brand's marketing campaign."
    },
    {
      src: "/assets/_logo-creativemarket.svg",
      alt: "CreativeMarket",
      text:
        "Online marketplace that provides a platform for creators to buy and sell design assets."
    },
    {
      src: "/assets/_logo-seneca.svg",
      alt: "Seneca",
      text: "Designing a powerful educational platform for effective learning."
    },
    {
      src: "/assets/_logo-auth0.svg",
      alt: "Auth0",
      text: "Using our expertise to boost Auth0 processes."
    },
    {
      src: "/assets/_logo-corel.svg",
      alt: "Corel",
      text: "Showcasing a future vision for WinZip family products."
    }
  ];

  const awards = [
    {
      imgSrc: "/assets/_award-dribbble.svg",
      title: "#1 Team in the world on Dribble"
    },
    {
      imgSrc: "/assets/_award-clutch2.svg",
      title: "Top 100 Global Service provider by clutch"
    },
    {
      imgSrc: "/assets/_award-5stars.svg",
      title: "5 Stars rating on GoodFirms"
    },
    { imgSrc: "/assets/_award-upwork.svg", title: "100% Job Success On Upwork" }
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverStates, setHoverStates] = useState(Array(4).fill(false));
  const [isLeftArrowHovered, setIsLeftArrowHovered] = useState(false);
  const [isRightArrowHovered, setIsRightArrowHovered] = useState(false);

  const handleMouseEnter = index => {
    setHoverStates(prevStates =>
      prevStates.map((state, i) => (i === index ? true : state))
    );
  };

  const handleMouseLeave = index => {
    setHoverStates(prevStates =>
      prevStates.map((state, i) => (i === index ? false : state))
    );
  };

  useEffect(
    () => {
      const interval = setInterval(() => {
        setCurrentTitleIndex(prevIndex => (prevIndex + 1) % titles.length);
      }, 3000);

      return () => clearInterval(interval);
    },
    [titles.length]
  );

  return (
    <div className="homePage">
      <Navbar />
      <section className="landingPage h-auto lg:h-[80vh] flex flex-col sm:flex-row w-screen items-start xl:justify-between justify-center lg:gap-5 lg:my-16 xl:px-24 px-20 xl:pb-0 lg:pb-20">
        <div className="leftBoxAnim lg:w-[80%] lg:h-[470px] h-[60vh] w-[719px] xl:max-w-[989px] max-w-[989px] xl:h-[600px] xl:w-[900px] sm:w-[719px] sm:h-[380px] rounded-3xl relative left-0 lg:top-0 sm:top-1/3 lg:-translate-y-0 sm:-translate-y-1/2">
          <img
            src="/assets/backgroundType.webp"
            alt="background"
            className="h-full w-full bg-cover bg-center bg-no-repeat"
          />
          <div className="PageContent absolute h-[90%] w-full bottom-0 p-5 px-0">
            <h1 className="leftContentText lg:text-[6rem] sm:text-[4rem] xl:text-[6.5rem] text-[10vw] overflow-hidden lg:text-nowrap text-wrap leading-none font-SuisseBold uppercase text-white !font-bold tracking-wide px-14">
              Let&apos;s build <br /> THE NEXT
              <br />
            </h1>
            <h1 className="leftContentText lg:text-[6rem] text-nowrap sm:text-[4rem] text-[10vw] xl:text-[6.5rem] overflow-hidden duration-500 leading-none font-SuisseBold uppercase text-white !font-bold tracking-wide px-14">
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
            <div className="imageContainer absolute lg:h-[13rem] lg:w-[13rem] sm:h-[12rem] sm:w-[12rem] xl:h-[15rem] xl:w-[15rem] h-[20rem] w-[20rem] sm:right-10 lg:right-10 lg:top-1/2 sm:top-[40%] -translate-y-2/3 flex items-start justify-center">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentTitleIndex + "-next"}
                  src={images[(currentTitleIndex + 1) % images.length]}
                  alt="Next Image"
                  initial={{ y: "0%", height: "0%", width: "0%", opacity: 0 }}
                  animate={{
                    y: "-20%",
                    height: "100%",
                    width: "100%",
                    opacity: 1
                  }}
                  exit={{ y: "-20%", height: "0%", width: "0%", opacity: 0 }}
                  transition={{ ease: [0.22, 1, 1, 1], duration: 0.5 }}
                  className="absolute"
                />
              </AnimatePresence>
            </div>
          </div>
          <div className="bottomPart mb-5 flex items-center justify-between gap-4 absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-28 border-t border-t-white/70 py-10">
            <div className="flex items-center gap-5">
              <h2 className="lg:text-6xl sm:text-4xl text-white font-medium">
                10Y
              </h2>
              <p className="text-white w-auto uppercase lg:text-xl sm:text-sm leading-none">
                of design-driven product development
              </p>
            </div>

            <div
              className="btnStyle lg:gap-2 cursor-pointer w-[400px] h-full flex items-center justify-end"
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
              <button className="uppercase px-8 py-2 font-semibold font-Suisse text-sm bg-[#FDC448] rounded-full">
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
        <VideoSection />
      </section>
      <section className="aboutPage h-auto w-screen">
        <div className="safeAreaView w-full flex flex-col-reverse lg:flex-row h-auto px-10 lg:py-20 lg:my-20 relative">
          <div className="w-full lg:flex">
            <div className="leftArea px-16 h-72 hidden lg:block w-full lg:w-1/4 relative left-0">
              <img
                src="/assets/_ava-founders0.avif"
                alt="founders"
                className="h-16"
              />
              <p className="w-40 uppercase text-white p-3 leading-tight">
                founders <br /> of halo lab
              </p>
            </div>
            <div className="RightArea h-[25rem] xl:h-[10rem] w-full relative right-0 top-0">
              <p className="text-white px-10 lg:text-[48px] text-4xl leading-none font-medium">
                <TextAnimation text={desc} />
              </p>
            </div>
          </div>
        </div>
        <div className="aboutBottomPart overflow-x-scroll capitalize w-full h-auto py-3 overflow-hidden flex px-16 gap-10 relative bottom-0 left-0 justify-center">
          {awards.map(award => {
            return (
              <MagneticEffect borderClassName="border-t-2">
                <div className="_FeaturedBox h-[19rem] relative w-[19rem] rounded-full border border-gray-300/40 flex flex-col text-white gap-4 items-center justify-center">
                  <img src={award.imgSrc} alt="award1" />
                  <h2 className="text-xl px-10 text-center font-medium">
                    {award.title}
                  </h2>
                  <div className="CircularBorderEffect absolute h-full w-full z-10 rounded-full" />
                </div>
              </MagneticEffect>
            );
          })}
        </div>
      </section>
      <section className="servicePage h-[1024px] w-screen my-20 relative">
        <img
          src="/assets/_bg-card-works_laptop.webp"
          alt="backImg"
          className="object-contain left-1/2 -translate-x-1/2 absolute object-center h-full w-[85%] mx-auto rounded-3xl"
        />
        <div className="InnerS h-[90%] w-[90%] relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="bannerScreen w-full flex items-center justify-between relative z-10 top-10">
            <div className="header p-10 w-1/2 h-auto">
              <h1 className="text-[7rem] uppercase text-black font-bold leading-none font-overpass text-wrap px-10">
                OUR SERVICES
              </h1>
            </div>
            <div className="boxWrapper flex p-14">
              <div className="magneticVdo h-28 w-28 overflow-hidden rounded-full">
                <video
                  className="h-full w-full object-cover object-center"
                  autoPlay
                  loop
                  muted
                  src="/assets/embed.mp4"
                />
              </div>
              <MagneticEffect
                borderClassName=""
                distance={20}
                className="relative right-10  !h-28 !w-28 cursor-pointer bg-black hover:bg-[#3827C7] rounded-full flex items-center justify-center"
              >
                <div className="magneticVdo">
                  <FaPlay className="text-white" />
                </div>
              </MagneticEffect>
            </div>
          </div>
          <div className="contentPage w-full h-[70%] bottom-0 gap-2 absolute grid grid-flow-col grid-rows-2 px-12 py-10">
            {boxContents.map((content, index) =>
              <PartnershipBox
                key={index}
                title={content.title}
                description={content.description}
                img={content.img}
                isHovered={hoverStates[index]}
                onHover={() => handleMouseEnter(index)}
                onLeave={() => handleMouseLeave(index)}
              />
            )}
          </div>
        </div>
      </section>
      <section className="PartnershipPage h-screen w-screen flex items-center justify-center">
        <div className="InnerSafeArea h-[90%] w-[90%] grid grid-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-rows-2 relative">
          {/* Vertical lines */}
          <div className="h-full w-[1px] absolute left-1/4 md:left-1/4 sm:left-1/2 bg-white/30" />
          <div className="h-full w-[1px] absolute left-1/4 md:left-1/2 sm:left-1/2 bg-white/30" />
          <div className="h-full w-[1px] absolute left-3/4 hidden md:block bg-white/30" />

          {/* Horizontal line */}
          <div className="h-[1px] w-full absolute top-1/2 bg-white/30" />

          {partnerships.map((item, index) =>
            <div
              key={index}
              className="flex flex-col items-center justify-center text-white"
            >
              <div className="group relative flex flex-col items-center cursor-pointer">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-16 transition-transform duration-300 group-hover:translate-y-[-20px]"
                />
                <p className="absolute w-72 px-5 text-center mt-16 font-SuisseBold opacity-0 transition-opacity duration-300 group-hover:opacity-50">
                  {item.text}
                </p>
              </div>
            </div>
          )}
          <div className="flex flex-col items-center justify-center text-white">
            <div className="group relative flex flex-col items-center cursor-pointer">
              <div className="h-28 w-28 overflow-hidden rounded-full transition-transform duration-300 translate-y-[-20px]">
                <video
                  src="/assets/Home-Page-Earth.mp4"
                  autoPlay
                  loop
                  muted
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="absolute w-72 text-center mt-28 font-SuisseBold transition-opacity duration-300 opacity-50 group-hover:opacity-50">
                350+ clients worldwide
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* TODO REVIEW PART */}
      {/* <section className="reviewPage h-[150vh] w-screen" /> */}

      <section className="showCasePage h-[1024px] w-screen my-20 relative">
        <img
          src="/assets/_bg-card-works_laptop.webp"
          alt="backImg"
          className="object-contain left-1/2 -translate-x-1/2 absolute object-center h-full w-[85%] mx-auto rounded-3xl"
        />
        <div className="InnerS h-[90%] w-[90%] relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="bannerScreen w-full flex items-center justify-between relative z-10 top-10">
            <div className="header p-10 w-1/2 h-auto">
              <h1 className="text-[7rem] mb-20 uppercase text-black font-bold leading-none font-overpass text-wrap px-10">
                OUR Works
              </h1>
            </div>
            <div className="boxWrapper flex p-14 justify-between">
              <h2 className="w-[65%] p-16 text-xl font-medium pl-20">
                Business challenges are tough, but we have a proven record of
                elevating our partners to their next and best selves.
              </h2>
              <div className="duo flex items-center">
                <div className="magneticVdo h-28 w-28 overflow-hidden rounded-full">
                  <video
                    className="h-full w-full object-cover object-center"
                    autoPlay
                    loop
                    muted
                    src="/assets/Showreel-transcode.webm"
                  />
                </div>
                <MagneticEffect
                  borderClassName=""
                  distance={20}
                  className="relative right-10  !h-28 !w-28 cursor-pointer bg-black hover:bg-[#3827C7] rounded-full flex items-center justify-center"
                >
                  <div className="magneticVdo">
                    <FaPlay className="text-white" />
                  </div>
                </MagneticEffect>
              </div>
            </div>
          </div>
          <div className="contentBottom h-[33rem] rounded-3xl w-[90%] absolute left-1/2 -translate-x-1/2 px-5 bottom-10 flex items-center bg-slate-100">
            <div className="leftParts w-1/2 h-full p-5 py-10 font-SuisseBold  tracking-wider flex flex-col">
              <h1 className="uppercase font-medium opacity-70">healthcare</h1>
              <h3 className="text-4xl py-10 font-semibold">
                Kinetik Platform with over 3500+ Integrated Providers
              </h3>
              <p className="pr-5">
                We helped Kinetik in developing an app and a convenient
                analytics dashboard — by the end of 2022, they raised over $20M
                in funding.
              </p>
            </div>
            <div className="rightParts w-2/3 h-full">
              <div className="VideoContainer w-full h-full mt-5 overflow-hidden">
                <div className="cusClipPath">
                  <video
                    autoPlay
                    loop
                    muted
                    className="rounded-3xl"
                    src="/assets/bg-project-kinetik.mp4"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="iconContainer h-20 w-60 absolute bottom-28 left-28 flex gap-3 items-center">
            <div
              onMouseEnter={() => setIsLeftArrowHovered(true)}
              onMouseLeave={() => setIsLeftArrowHovered(false)}
              className="boxLeft cursor-pointer h-16 w-16 border-[1px] bg-white flex items-center justify-center rounded-full"
            >
              <ArrowButtonAnimation dir="left" isHovered={isLeftArrowHovered} />
            </div>
            <div
              onMouseEnter={() => setIsRightArrowHovered(true)}
              onMouseLeave={() => setIsRightArrowHovered(false)}
              className="boxRight cursor-pointer h-16 w-16 border-[1px] bg-white flex items-center justify-center rounded-full"
            >
              <ArrowButtonAnimation
                dir="right"
                isHovered={isRightArrowHovered}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
