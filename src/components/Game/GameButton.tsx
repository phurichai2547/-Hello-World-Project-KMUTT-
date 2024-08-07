import { motion } from "framer-motion";

const GameButton = () => {
  const gameButton = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17,
        duration: 0.5,
        delay: 0.3,
      },
    },
    hover: {
      scale: 1.05,
    },
    tap: {
      rotate: 2,
      scale: 0.95,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17,
        duration: 0.1,
      },
    },
  };

  return (
    <a className="z-10 h-full w-[70%] cursor-pointer md:w-[50%] lg:w-[45%]" href="https://among-duck-hellogoose.vercel.app/" target="_blank">
      <motion.img
        className="hover:drop-shadow-[0_0_50px_#fff]"
        src="/images/game/game.png"
        alt="Game Link"
        variants={gameButton}
        initial="initial"
        whileInView="animate"
        whileHover="hover"
        whileTap="tap"
        viewport={{ once: true }}
        transition={{ duration: 0.2 }}
      />
    </a>
  );
};

export default GameButton;
