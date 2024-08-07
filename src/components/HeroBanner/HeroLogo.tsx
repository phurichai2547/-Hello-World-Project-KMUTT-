import { HTMLMotionProps, MotionValue, motion } from 'framer-motion';

type HeroLogoProps = {
  translateY: MotionValue<number>;
} & HTMLMotionProps<"img">;

const HeroLogo = ({ translateY }: HeroLogoProps) => {
  const logoVariants = {
    hidden: { opacity: 0, y: 100, scale: 0 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: 'backInOut' } },
    handleOnHover: {
      scale: 1.15, transition: { duration: 0.25 }
    }
  };
  return <motion.img 
    src="/images/hero/Logo.PNG" alt="Logo" 
    className="h-full md:w-[45%] w-[65%] z-10 cursor-pointer lg:w-[40%]" 
    variants={logoVariants} 
    initial="hidden" 
    animate="visible" 
    style={{ y: translateY }} 
    whileHover="handleOnHover" 
  />;
};

export default HeroLogo;
