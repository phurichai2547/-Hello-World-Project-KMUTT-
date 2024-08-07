import Flower from "./Flower";

type PropertyFlower = {
  position: string;
  colorFlower: string;
};

type Flowers ={
  flowers:PropertyFlower[];
}

const GenerateFlower = ({flowers}: Flowers) => {
  return (
    <>
      {flowers.map(({ position, colorFlower }, index) => (
        <Flower
          className={position}
          colorFlower={colorFlower}
          key={index}
          delay={index}
        />
      ))}
    </>
  );
};

export default GenerateFlower;
