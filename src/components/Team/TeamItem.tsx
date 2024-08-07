import { twMerge } from "tailwind-merge";
import { TeamType } from "../../types";
import { motion } from "framer-motion";
type TeamItemProps = {
  team: TeamType;
  isPreview?: boolean;
};

const TeamItem = ({ team, isPreview = false }: TeamItemProps) => {
  const buttonList = {
    hover: {
      scale: 1.05,
    },
    tap: {
      scale: 0.9,
    },
  };
  return (
      <motion.div
        className={twMerge(
          "group relative max-w-[20rem] flex aspect-square cursor-pointer flex-col items-center justify-end rounded-2xl py-4 shadow-lg transition-all duration-300",
          isPreview ? "bg-[#0F0A4CCC]" : "bg-[#6479BCE5]",
        )}
        variants={buttonList}
        whileHover="hover"
        whileTap="tap"
        transition={{ duration: 0.2 }}
        layout
      >
        <img
          src={team.image}
          alt={team.name}
          className="z-10 group-hover:translate-y-[-1.5rem] transition-all duration-500 absolute bottom-[20%] h-full w-full max-w-none transform drop-shadow-lg filter lg:max-w-[80rem]"
        />
        <h3 className="z-10 whitespace-nowrap text-[0.55rem] font-bold text-white sm:text-[1.7rem] lg:text-[2.15rem]">
          {team.name}
        </h3>
      </motion.div>
  );
};

export default TeamItem;
