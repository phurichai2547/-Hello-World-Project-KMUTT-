import Days from "./Days";

type PropertyDay = {
  position: string;
  day: string;
};

type Days = {
  days: PropertyDay[];
};

const GenerateDay = ({ days }: Days) => {
  return (
    <>
      {days.map(({ position, day }, index) => (
        <Days className={position} day={day} key={index} delay={index} />
      ))}
    </>
  );
};

export default GenerateDay;
