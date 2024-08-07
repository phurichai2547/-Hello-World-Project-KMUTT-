type itemsProperty = {
  flowers: flowerProperty[];
  days: dayProperty[];
};
type flowerProperty = {
  position: string;
  colorFlower: string;
};
type dayProperty = {
  position: string;
  day: string;
};

const desktop: itemsProperty = {
  flowers: [
    { position: "left-[-10%] top-[16%] w-[15%]", colorFlower: "pink" },
    { position: "right-[-20%] top-[5%] w-[14%]", colorFlower: "orange" },
    { position: "bottom-[32%] right-[-20%] w-[16%]", colorFlower: "pink" },
    { position: "bottom-[33%] left-[-32%] w-[17%]", colorFlower: "purple" },
  ],
  days: [
    { position: "bottom-[2%] right-[-12%]", day: "graduationDay" },
    { position: "bottom-[45%] right-[-15%] ", day: "gooseDay" },
    { position: "left-[5%] top-[5%]", day: "registerDay" },
    { position: "bottom-[8%] left-[-5%]", day: "announceDay" },
  ],
};
const mobile = {
  flowers: [
    { position: "left-[-16%] top-[-14%] w-[17%]", colorFlower: "pink" },
    { position: "right-[-10%] top-[0%] w-[15%]", colorFlower: "orange" },
    { position: "bottom-[37%] right-[-4%] w-[16%]", colorFlower: "pink" },
    { position: "bottom-[4%] left-[-10%] w-[20%]", colorFlower: "purple" },
  ],
  days: [
    { position: "bottom-[2%] right-[-12%] w-[50%]", day: "graduationDay" },
    { position: "bottom-[18%] left-[-17%] w-[50%] ", day: "gooseDayM" },
    { position: "left-[-10%] top-[-5%]", day: "registerDay" },
    { position: "top-[15%] right-[0%] w-[55%]", day: "announceDayM" },
  ],
};
const tablet = {
  flowers: [
    { position: "left-[-17%] top-[32%] w-[19%]", colorFlower: "pink" },
    { position: "right-[-10%] top-[25%] w-[18%]", colorFlower: "orange" },
    { position: "bottom-[23%] right-[-20%] w-[21%]", colorFlower: "pink" },
    { position: "bottom-[28%] left-[-29%] w-[23%]", colorFlower: "purple" },
  ],
  days: [
    { position: "bottom-[14%] left-[3%] w-[50%]", day: "graduationDay" },
    { position: "bottom-[27%] right-[-15%] ", day: "gooseDay" },
    { position: "left-[-10%] top-[13%] ", day: "registerDay" },
    { position: "top-[27%] right-[10%] w-[50%]", day: "announceDay" },
  ],
};

export { tablet, desktop, mobile };
