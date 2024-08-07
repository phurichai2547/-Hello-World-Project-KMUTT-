import { HTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import AboutText from "./AboutText";
import GooseImg from "./GooseImg";
import TitleAbout from "./TitleAbout";
import CloudImg from "./CloudImg";

type AboutProps = HTMLAttributes<HTMLDivElement>;

const About = forwardRef<HTMLDivElement, AboutProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={twMerge(
          " flex-center-col z-1  mobileL:pb-auto relative max-h-max  min-h-screen bg-background-about bg-cover   bg-bottom   bg-no-repeat pb-40 pt-20 md:min-h-screen md:py-10 mobileL:pt-10",
          className,
        )}
        {...props}
        ref={ref}
      >
        <img
          className="absolute top-0 w-screen"
          src="/images/about/Flip-rock.PNG"
          alt="rock"
        />
        <CloudImg />
        <TitleAbout />
        <div className="w-screen flex-row px-0 lg:px-10">
          <div className="about-data relative flex flex-col-reverse items-center justify-center md:flex-row md:items-stretch ">
            <GooseImg />
            <AboutText />
          </div>
        </div>
      </div>
    );
  },
);

export default About;
