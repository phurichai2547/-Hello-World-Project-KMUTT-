import { forwardRef } from "react";
import GameButton from "./GameButton";

const Game = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} {...props} className="min-h-screen ">
      <div className="flex-center-col relative min-h-screen bg-background-game bg-cover bg-bottom bg-no-repeat pt-10">
        <GameButton />
        <img
          className="absolute top-0 w-screen"
          src="/images/game/topLine.svg"
          alt=""
        />
      </div>
    </div>
  );
});

export default Game;
