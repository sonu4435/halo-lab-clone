import React, { useRef, useEffect, useState } from "react";
import { RiArrowDownSLine, RiMenuLine } from "react-icons/ri";
import { motion, useAnimation } from "framer-motion";

const Navbar = () => {
  const contactBtnRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRefs = {
    services: useRef(null),
    projects: useRef(null),
    "Our Process": useRef(null),
    "open sourCe": useRef(null),
    "our blog": useRef(null)
  };

  const controls = {
    services: {
      firstText: useAnimation(),
      secondText: useAnimation()
    },
    projects: {
      firstText: useAnimation(),
      secondText: useAnimation()
    },
    "Our Process": {
      firstText: useAnimation(),
      secondText: useAnimation()
    },
    "open sourCe": {
      firstText: useAnimation(),
      secondText: useAnimation()
    },
    "our blog": {
      firstText: useAnimation(),
      secondText: useAnimation()
    },
    contact: {
      firstText: useAnimation(),
      secondText: useAnimation(),
      span: useAnimation()
    }
  };

  const handleHover = (itemRef, animationControls) => {
    const handleMouseEnter = () => {
      animationControls.firstText.start({ y: -10, opacity: 0 });
      animationControls.secondText.start({ y: 0, opacity: 1 });
    };

    const handleMouseLeave = () => {
      animationControls.firstText.start({ y: 0, opacity: 1 });
      animationControls.secondText.start({ y: 20, opacity: 0 });
    };

    const navItem = itemRef.current;
    navItem.addEventListener("mouseenter", handleMouseEnter);
    navItem.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      navItem.removeEventListener("mouseenter", handleMouseEnter);
      navItem.removeEventListener("mouseleave", handleMouseLeave);
    };
  };

  useEffect(() => {
    const navCleanup = Object.keys(navRefs).map(key => {
      const ref = navRefs[key];
      const controlsForItem = controls[key];
      return handleHover(ref, controlsForItem);
    });

    const handleMouseEnterContact = () => {
      controls.contact.firstText.start({ y: -10, opacity: 0 });
      controls.contact.secondText.start({ y: 0, opacity: 1 });
      controls.contact.span.start({
        backgroundColor: "#fff",
        borderColor: "#3827C7",
        borderWidth: "2px"
      });
    };

    const handleMouseLeaveContact = () => {
      controls.contact.firstText.start({ y: 0, opacity: 1 });
      controls.contact.secondText.start({ y: 50, opacity: 0 });
      controls.contact.span.start({
        backgroundColor: "#3827C7",
        borderColor: "transparent",
        borderWidth: 0
      });
    };

    const contactBtn = contactBtnRef.current;
    contactBtn.addEventListener("mouseenter", handleMouseEnterContact);
    contactBtn.addEventListener("mouseleave", handleMouseLeaveContact);

    return () => {
      navCleanup.forEach(cleanup => cleanup());

      contactBtn.removeEventListener("mouseenter", handleMouseEnterContact);
      contactBtn.removeEventListener("mouseleave", handleMouseLeaveContact);
    };
  }, []);

  return (
    <div className="navBar z-10 w-full h-20 p-5">
      <nav className="h-20 w-full bg-[#02021e] lg:px-10 xl:px-20 flex items-center">
        <ul className="w-full h-[4.5rem] border-t border-b border-2 border-l-0 border-r-0 flex items-center justify-between overflow-hidden">
          <div className="logo">
            <span>
              <img src="/assets/fileLogo.png" alt="logo" className="h-44 w-4h-44" />
            </span>
          </div>
          <div className="hidden lg:flex navLinks gap-10 text-nowrap uppercase font-semibold leading-none text-white font-Suisse tracking-widest text-sm">
            {Object.keys(navRefs).map(key =>
              <li key={key} ref={navRefs[key]}>
                <a href="/" className="flex relative gap-2">
                  <motion.h2
                    initial={{ y: 0, opacity: 1 }}
                    animate={controls[key].firstText}
                    transition={{ duration: 0.2 }}
                  >
                    {key}
                  </motion.h2>
                  <motion.h2
                    className="absolute"
                    initial={{ y: 50, opacity: 0 }}
                    animate={controls[key].secondText}
                    transition={{ duration: 0.3 }}
                  >
                    {key}
                  </motion.h2>
                  {key === "services" &&
                    <motion.span className="icon scale-150 font-bold">
                      <RiArrowDownSLine />
                    </motion.span>}
                </a>
              </li>
            )}
          </div>
          <div className="flex items-center gap-6">
            <div
              ref={contactBtnRef}
              className="group contactBtn font-SuisseBold relative cursor-pointer w-[160px] px-5 h-[40px] bg-white rounded-full flex items-center justify-around uppercase !font-medium overflow-hidden"
            >
              <motion.h2
                className="text-sm leading-none h-fit absolute left-4 pt-1 tracking-wide"
                initial={{ y: 0, opacity: 1 }}
                animate={controls.contact.firstText}
                transition={{ duration: 0.3 }}
              >
                Contact us
              </motion.h2>
              <motion.h2
                className="text-sm absolute leading-none h-fit left-4 pt-1 tracking-wide"
                initial={{ y: 50, opacity: 0 }}
                animate={controls.contact.secondText}
                transition={{ duration: 0.3 }}
              >
                Contact us
              </motion.h2>
              <motion.span
                className="h-7 absolute w-7 rounded-full bg-[#3827C7] right-2"
                initial={{
                  backgroundColor: "#3827C7",
                  borderColor: "transparent",
                  borderWidth: 0
                }}
                animate={controls.contact.span}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div
              className="flex lg:hidden items-center justify-center text-white cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <RiMenuLine size={30} />
            </div>
          </div>
        </ul>
        {isMenuOpen &&
          <motion.div
            className="absolute top-20 left-0 w-full bg-[#02021e] flex flex-col items-center justify-center lg:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {Object.keys(navRefs).map(key =>
              <a
                key={key}
                href="/"
                className="py-2 text-white uppercase font-semibold"
              >
                {key}
              </a>
            )}
          </motion.div>}
      </nav>
    </div>
  );
};

export default Navbar;
