import { motion } from "framer-motion";
import { HTMLAttributes } from "react";
import usePageStore from "../../stores/pageStore";

type NavBrandProps = {
  isLogoVisible?: boolean;
} & HTMLAttributes<HTMLElement>;

const fadeIn = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const NavBrand = ({ isLogoVisible = false, ...props }: NavBrandProps) => {
  const { setPage } = usePageStore();

  return (
    <div
      onClick={() => {
        setPage("/");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      {...props}
    >
      {!isLogoVisible && (
        <a href="https://www.sit.kmutt.ac.th/" className="absolute top-0">
          <motion.button
            className="left-10 h-[4.5rem] w-56 origin-top-left rounded-b-3xl bg-white opacity-100 shadow-md hover:-translate-y-1 sm:rounded-b-xl md:left-5 md:h-16 md:w-44 md:rounded-b-2xl 2xl:scale-125"
            style={{
              backgroundImage: "url('/images/sit-kmutt-logo.webp')",
              backgroundSize: "contain",
              backgroundPosition: "left center",
              backgroundRepeat: "no-repeat",
            }}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </a>
      )}
      {isLogoVisible && (
        <motion.button
          className="h-20 origin-top-left opacity-100 left-10 w-72 hover:-translate-y-1 sm:h-12 sm:w-44 md:left-5 md:h-16 md:w-56 2xl:scale-125"
          style={{
            backgroundImage: "url('/images/logo.webp')",
            backgroundSize: "60%",
            backgroundPosition: "left center",
            backgroundRepeat: "no-repeat",
          }}
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      )}
    </div>
  );
};

export default NavBrand;
