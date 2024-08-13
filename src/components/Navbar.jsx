import React, { useRef, useEffect, useState } from "react";
import { RiArrowDownSLine, RiMenuLine, RiCloseLine } from "react-icons/ri";
import { motion, useAnimation } from "framer-motion";

const Navbar = () => {
  const contactBtnRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [shouldHideMenu, setShouldHideMenu] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState(null);

  // Initialize animation controls directly
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

  const navRefs = {
    services: useRef(null),
    projects: useRef(null),
    "Our Process": useRef(null),
    "open sourCe": useRef(null),
    "our blog": useRef(null)
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

  useEffect(
    () => {
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
    },
    [controls]
  );

  useEffect(
    () => {
      const handleScroll = () => {
        if (isMenuOpen) {
          setShouldHideMenu(true);
          setTimeout(() => {
            setIsMenuOpen(false);
            setShouldHideMenu(false);
          }, 50); // Match duration of menu hiding animation
        }
      };

      if (isMenuOpen) {
        window.addEventListener("scroll", handleScroll);
      } else {
        setShouldHideMenu(false);
        window.removeEventListener("scroll", handleScroll);
      }

      return () => window.removeEventListener("scroll", handleScroll);
    },
    [isMenuOpen]
  );

  const handleNavItemClick = key => {
    if (window.innerWidth <= 1024) {
      // Check for mobile screen size
      setActiveNavItem(prev => (prev === key ? null : key));
    }
  };

  return (
    <div className="navBar z-10 w-full h-20 p-5">
      <nav className="h-20 w-full bg-[#02021e] flex items-center px-0">
        <ul className="w-full h-20 flex items-center justify-between border-t border-b border-2 border-l-0 border-r-0 overflow-hidden">
          <div className="logo w-[140px] h-full flex items-center">
            <img src="/assets/65142d5754eafa29699ca491_logo.svg" alt="logo" />
          </div>
          <div className="flex items-center gap-10">
            <div className="hidden lg:flex text-nowrap navLinks uppercase font-semibold leading-none text-white font-Suisse tracking-widest items-center gap-5 text-sm">
              {Object.keys(navRefs).map(key =>
                <li
                  key={key}
                  ref={navRefs[key]}
                  onClick={() => handleNavItemClick(key)}
                >
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
            <div
              ref={contactBtnRef}
              className="group contactBtn font-Suisse hidden sm:flex relative cursor-pointer w-[175px] h-[45px] bg-white rounded-full items-center justify-around uppercase font-extrabold overflow-hidden"
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
              {isMenuOpen
                ? <RiCloseLine size={30} />
                : <RiMenuLine size={30} />}
            </div>
          </div>
        </ul>
        {isMenuOpen &&
          <motion.div
            className={`h-[90%] w-full absolute left-0 bottom-0 flex justify-center z-50 bgStyle transition-transform ${shouldHideMenu
              ? "translate-y-full"
              : "translate-y-0"}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: shouldHideMenu ? "100%" : 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="absolute top-5 w-3/4 rounded-3xl bg-[#fff] text-black flex flex-col items-start px-10 justify-center lg:hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {Object.keys(navRefs).map(key =>
                <a key={key} href="/" className="py-2 uppercase font-semibold">
                  {key}
                </a>
              )}
            </motion.div>
          </motion.div>}
      </nav>
    </div>
  );
};

export default Navbar;
