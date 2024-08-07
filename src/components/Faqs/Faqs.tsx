import { forwardRef } from "react";
import FaqBox from "./FaqBox";

const Faqs = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className="relative w-full h-full min-h-[100vh] lg:min-h-[110vh] lg:max-h-[110vh] pt-6 pb-[5rem] md:pb-[10rem] lg:pb-[20rem] bg-center bg-no-repeat bg-cover bg-background-faqs mobileL:bg-top TabletV:bg-center lg:pt-[5rem]"
    >
      <div className="mx-5 md:mx-32 lg:mx-56 xl:mx-auto xl:max-w-[60rem]">
        <div className="mb-5 flex justify-center text-[2rem] text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] xl:text-[4rem] mobileL:text-[28px] ">
          FAQs
        </div>
        <FaqBox />
      </div>
      <img
        className="absolute bottom-0 z-0 w-screen"
        src="/images/faqs/bottomLine.svg"
        alt=""
      />
    </div>
  );
});

export default Faqs;
