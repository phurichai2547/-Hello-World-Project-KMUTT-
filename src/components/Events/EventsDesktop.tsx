import GenerateDay from "./componentsEvent/GenerateDay";
import GenerateFlower from "./componentsEvent/GenerateFlower";
import { desktop } from "./configPosition";
const EventsDesktop = () => {
  const { flowers, days } = desktop;
  return (
    <div className="relative  my-auto  hidden scale-[65%] items-center justify-center md:block lg:top-[-20px] TabletV:hidden">
      <img
        className="mx-auto "
        src="/images/events/platformDesktop.png"
        alt="platform"
      />
      <GenerateFlower flowers={flowers} />
      <GenerateDay days={days} />
    </div>
  );
};

export default EventsDesktop;
