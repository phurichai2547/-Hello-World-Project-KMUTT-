import { HTMLMotionProps, motion } from "framer-motion";
import React from "react";
import { twMerge } from "tailwind-merge";
const DEF_DURATION = 3;
const DEF_DELAY = 0;
const PER_DELAY = 0.5;
type DaysProps = {
  day: string;
  duration?: number;
  delay?: number;
  fixScale?: string;
} & HTMLMotionProps<"img">;

const Days: React.FC<DaysProps> = ({
  day,
  className,
  duration = DEF_DURATION,
  delay = DEF_DELAY,
  ...rest
}) => {
  const dayAnimation = {
    day: {
      scale: [1, 1.05, 1],
      transition: {
        duration: duration,
        repeat: Infinity,
        delay: PER_DELAY * delay,
      },
    },
    hover: {
      scale: 1.1,
    },
  };
  return (
    <motion.img
      className={twMerge("absolute w-[45%] cursor-pointer", className)}
      src={`/images/events/day/${day}.png`}
      alt={`${day}`}
      variants={dayAnimation}
      initial="day"
      animate="day"
      whileHover={{ rotate: 5 }}
      {...rest}
    />
  );
};

export default Days;
