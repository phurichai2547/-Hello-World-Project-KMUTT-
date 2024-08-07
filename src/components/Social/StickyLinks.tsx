import { BsDiscord, BsInstagram } from "react-icons/bs";
import SocialLink from "./SocialLink.tsx";

const StickyLinks = () => {
  return (
    <div className="fixed bottom-[4%] left-[4%] z-10 flex">
      <div className="relative">
        <div className="flex gap-3">
          <SocialLink
            icon={<BsInstagram style={{ fontSize: "1.45rem" }} />}
            href="https://www.instagram.com/sithelloworld/"
          />
          <SocialLink
            icon={<BsDiscord style={{ fontSize: "1.45rem" }} />}
            href="https://discord.gg/BjEPbd2Y"
          />
        </div>
      </div>
    </div>
  );
};

export default StickyLinks;
