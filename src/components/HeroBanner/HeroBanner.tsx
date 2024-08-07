import { motion, useScroll, useTransform } from "framer-motion";
import { HTMLAttributes, forwardRef, useRef } from "react";
import HeroLogo from "./HeroLogo.tsx";

type HeroBannerProps = HTMLAttributes<HTMLDivElement>;

const HeroBanner = forwardRef<HTMLDivElement, HeroBannerProps>(
  ({ className, ...props }, ref) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start start", "end start"],
    });
    const cloudVariant = {
      floating: {
        y: [10, -10],
        transition: {
          y: {
            yoyo: Infinity,
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          },
        },
      },
    };
    const transfromY = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const gooseScale = useTransform(scrollYProgress, [0, 1], [1, 0.65]);
    return (
      <div ref={ref} className={className} {...props}>
        <div
          ref={containerRef}
          className="relative min-h-screen bg-bottom bg-no-repeat bg-cover flex-center-col bg-background-hero"
        >
          <HeroLogo translateY={transfromY} />
          <motion.img
            className="absolute w-screen top-2"
            src="/images/hero/Cloud.PNG"
            alt="cloud"
            variants={cloudVariant}
            initial="floating"
            animate="floating"
          />
          <motion.img
            className="absolute right-[15%] hidden w-1/6 md:bottom-[2%] md:block lg:bottom-[5%]"
            src="/images/hero/goose-element_0004_Layer-6.png"
            alt="goose hero"
            style={{ y: transfromY, x: transfromY, scale: gooseScale }}
          />
          <img
            className="absolute bottom-0 w-screen"
            src="/images/hero/Rock.PNG"
            alt="rock"
          />
        </div>
      </div>
    );
  },
);

export default HeroBanner;
