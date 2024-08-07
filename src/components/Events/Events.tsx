import { forwardRef } from "react";
import EventsMobile from "./EventsMobile";
import EventsDesktop from "./EventsDesktop";
import EventsTablet from "./EventsTablet";
import TopLine from "./componentsEvent/TopLine";
import BottomLine from "./componentsEvent/BottomLine";

const Events = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className="flex-center justify-cneter relative flex min-h-screen w-full flex-col justify-center overflow-hidden bg-background-event bg-cover bg-bottom bg-no-repeat md:pb-0 "
    >
      <TopLine />
      <EventsMobile />
      <EventsDesktop />
      <EventsTablet />
      <BottomLine />
    </div>
  );
});

export default Events;
