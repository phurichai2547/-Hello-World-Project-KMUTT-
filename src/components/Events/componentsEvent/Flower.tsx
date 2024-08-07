import { HTMLMotionProps, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

type FlowerProps = {
  colorFlower: string;
  delay: number;
} & HTMLMotionProps<"img">;

const Flower: React.FC<FlowerProps> = ({
  className,
  colorFlower,
  delay,
  ...rest
}) => {
  const flowerVariants = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: delay * 0.3,
      },
    },
  };
  return (
    <motion.img
      className={twMerge(`absolute z-[-1]`, className)}
      src={`/images/events/flower/${colorFlower}.PNG`}
      alt={`${colorFlower}`}
      variants={flowerVariants}
      initial="initial"
      whileInView="animate"
      {...rest}
    />
  );
};

export default Flower;
