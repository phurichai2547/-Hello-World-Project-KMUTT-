import { HTMLMotionProps, motion } from "framer-motion";

type CloudEffectProps = {
  delay?: number;
} & HTMLMotionProps<"img">;

const CloudImg: React.FC<CloudEffectProps> = ({ ...props }) => {
  const cloudEffect = {
    floating: {
      y: [10, -10],
      transition: {
        y: {
          duration: 1.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        },
      },
    },
  };
  return (
    <motion.img
      className="absolute top-[10%] -z-20  scale-110  md:top-0 md:w-screen "
      src="/images/about/Cloud.PNG"
      alt="cloud"
      variants={cloudEffect}
      animate="floating"
      {...props}
    />
  );
};
export default CloudImg;
