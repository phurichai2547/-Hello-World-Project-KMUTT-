import { TeamType } from "../../types";
import { getTeamTypes } from "../../utils/constants";
import TeamItem from "./TeamItem";

type TeamListProps = {
  previewTeamType?: TeamType;
  onPreview: (team: TeamType) => void;
};

const TeamList = ({ onPreview, previewTeamType }: TeamListProps) => {
  const teams = getTeamTypes();

  return (
    <div className="grid w-full grid-cols-4 gap-2 px-8 sm:gap-4 lg:px-[7.25rem]">
      {teams.map((team) => (
        <div key={team.id} onClick={() => onPreview(team)}>
          <TeamItem team={team} isPreview={team.id === previewTeamType?.id} />
        </div>
      ))}
    </div>
  );
};

export default TeamList;
