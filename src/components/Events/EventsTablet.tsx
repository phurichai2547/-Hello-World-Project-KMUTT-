import { useRef } from "react";
import GenerateFlower from "./componentsEvent/GenerateFlower";
import GenerateDay from "./componentsEvent/GenerateDay";
import {tablet} from "./configPosition"
const EventsTablet = () => {
  const eventRef = useRef<HTMLDivElement>(null);
  const {flowers,days} = tablet
  return (
    <div
      ref={eventRef}
      className="relative flex  scale-[70%]   md:hidden  mobileS:hidden TabletV:block"
    >
      <img
        className="z-1 "
        src="/images/events/platformTablet.png"
        alt="platformTablet"
      />
      <GenerateFlower flowers={flowers} />
      <GenerateDay days={days} />
    </div>
  );
};

export default EventsTablet;
