import { HTMLAttributes, forwardRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { TeamType } from "../../types";
import TeamDetails from "./TeamDetails";
import TeamList from "./TeamList";

type TeamProps = HTMLAttributes<HTMLDivElement>;

const Team = forwardRef<HTMLDivElement, TeamProps>(
  ({ className, ...props }, ref) => {
    const [previewTeamType, setPreviewTeamType] = useState<
      TeamType | undefined
    >({
      id: "front-end",
      name: "Front-end",
      description:
        "อยากสร้างเว็บไซต์สวย ๆ ด้วยตัวเองไหม? หลักสูตรนี้พี่ ๆ จะพาน้อง ๆ ไปเรียนรู้เกี่ยวกับการออกแบบเว็บไซต์ โดยพี่ ๆ จะปูพื้นฐานตั้งแต่ HTML CSS JavaScript เพื่อต่อยอดไปสู่ Framework ยอดนิยมอย่าง React และ Version Control อย่าง Git เครื่องมือที่จะช่วยน้อง ๆ ทำงานร่วมกันได้อย่างราบรื่น ฟังดูน่าสนใจใช่ม๊า แล้วมาสนุกด้วยกันในโลกของ Front-End",
      image: "/images/team/Front-end.png",
      sit: "/images/team/Front-end-sit.png",
    });

    const handlePreviewTeamType = (team: TeamType) => {
      setPreviewTeamType(team);
    };

    return (
      <div
        className={twMerge(
          "flex-center-col z-1 relative min-h-screen w-full  bg-background-team bg-cover bg-center bg-no-repeat pb-8",
          className,
        )}
        {...props}
        ref={ref}
      >
        <img
          className=" absolute top-[10%] w-screen "
          src="/images/team/cloud.png"
          alt=""
        />
        <img
          className="absolute top-0 w-screen bg-top "
          src="/images/team/topTone.png"
          alt=""
        />
        <img
          className="absolute bottom-0 w-screen"
          src="/images/team/background.png"
          alt=""
        />
        <div className="z-10 p-4 sm:p-8">
          <TeamDetails team={previewTeamType} />
        </div>
        <div className="my-4 sm:my-8" />
        <TeamList
          onPreview={handlePreviewTeamType}
          previewTeamType={previewTeamType}
        />
      </div>
    );
  },
);

export default Team;
