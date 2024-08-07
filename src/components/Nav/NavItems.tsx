import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useState } from "react";
import usePageStore from "../../stores/pageStore";
import { NavLinks } from "../../types";
import { isActive } from "../../utils/active";
import NavItemUnderline from "./NavItemUnderline";

type NavItemsProps = {
  navTo: (path: string) => void;
  isLogoVisible?: boolean;
};

const navLinks: NavLinks[] = [
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Teams",
    path: "/teams",
  },
  {
    name: "Events",
    path: "/events",
  },
  {
    name: "FAQs",
    path: "/faqs",
  },
  {
    name: "Game",
    path: "/game",
  },
];

const NavItems = ({ navTo, isLogoVisible }: NavItemsProps) => {
  const { page } = usePageStore();

  const fadeIn = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const [toggle, setToggle] = useState(false);

  const toggleNav = useCallback(() => {
    setToggle(!toggle);
  }, [toggle]);

  return (
    <>
      <ul className="hidden h-full items-center justify-end space-x-[70px] lg:flex">
        {navLinks.map((navLink) => (
          <li
            key={navLink.name}
            className={`relative ${isLogoVisible ? "text-white" : "text-secondary-800"} uppercase font-cherry text-paragraph-header transition-colors duration-300`}
          >
            <div className="cursor-pointer" onClick={() => navTo(navLink.path)}>
              {navLink.name}
            </div>
            <NavItemUnderline active={isActive(navLink.path, page)} />
          </li>
        ))}
      </ul>
      {/* Mobile Nav */}
      <div className="flex h-full items-center justify-end space-x-[70px] lg:hidden">
        <button
          className="relative font-cherry text-[48px] uppercase text-black z-[60] text-3xl transition-all duration-400"
          onClick={toggleNav}
        >
          {toggle ? "X" : "="}
        </button>
      </div>
      <AnimatePresence>
        {toggle && (
          <motion.div
            className="fixed top-0 left-0 z-50 flex flex-col items-center justify-center w-full py-10 ease-in-out bg-white bg-opacity-50 text-paragraph-header rounded-b-xl drop-shadow-2xl filter backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
            exit={{
              opacity: 0,
              y: -200,
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
          >
            <motion.ul
              className="flex flex-col items-center justify-center space-y-8"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              {navLinks.map((navLink, index) => (
                <motion.li
                  key={navLink.name}
                  className="relative text-black uppercase font-cherry text-paragraph-header"
                  variants={fadeIn}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1, ease: "backOut" }}
                >
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      navTo(navLink.path);
                      toggleNav();
                    }}
                  >
                    {navLink.name}
                  </div>
                  <NavItemUnderline active={isActive(navLink.path, page)} />
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavItems;
