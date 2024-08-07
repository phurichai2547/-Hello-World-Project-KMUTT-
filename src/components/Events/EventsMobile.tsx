import GenerateFlower from "./componentsEvent/GenerateFlower";
import GenerateDay from "./componentsEvent/GenerateDay";
import {mobile} from "./configPosition"
const EventsMobile = () => {
  const {flowers,days} = mobile;
  return (
    <div className="flex-center relative h-max scale-[75%] md:hidden">
      <img
        className="mx-auto "
        src="/images/events/platformMobile.png"
        alt="platformMobile"
      />
      <GenerateFlower flowers={flowers} />
      <GenerateDay days={days} />
    </div>
  );
};

export default EventsMobile;
