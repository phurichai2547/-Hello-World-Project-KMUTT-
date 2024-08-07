import { motion } from "framer-motion";
import { TeamType } from "../../types";

type TeamDetailsProps = {
  team?: TeamType;
};

const TeamDetails = ({ team }: TeamDetailsProps) => {
  const teamDetailsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  if (team === undefined) return null;
  return (
    <motion.div
      variants={teamDetailsVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <h1 className="mt-6 w-full text-center font-cherry text-[64px] font-bold text-white lg:mt-16">
        {team.name}
      </h1>
      <div className="relative mt-4 grid h-full w-full grid-cols-12 gap-4 p-4 px-5">
        <div className="relative z-30 col-span-9 flex h-full max-h-[300px] min-h-[300px] w-full overflow-auto rounded-3xl bg-white bg-opacity-90 px-10 pb-5 text-[0.825rem] sm:items-center sm:p-4 sm:text-[1.25rem]">
          <p className="z-50 py-8 font-itim">{team.description}</p>
        </div>
        <img
          className="absolute -right-7 top-1/2 z-30 w-3/6 -translate-y-1/2 transform drop-shadow-lg filter sm:w-2/6 xl:scale-75"
          src={team.sit}
          alt={team.name}
        />
      </div>
    </motion.div>
  );
};

export default TeamDetails;
