import { AnimatePresence, motion } from "framer-motion";

type NavItemUnderlineProps = {
  active?: boolean;
};

const NavItemUnderline = ({ active }: NavItemUnderlineProps) => {

  return (
    <AnimatePresence>
      {active && <motion.img
        src="/images/nav/underline.png"
        alt="Underline"
        className="absolute left-0 w-[120px] transform translate-y-1/2 -bottom-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      />}
    </AnimatePresence>
  );
};

export default NavItemUnderline;
