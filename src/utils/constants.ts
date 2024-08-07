import { TeamType } from "../types";

const teams: TeamType[] = [
  {
    id: "front-end",
    name: "Front-end",
    description:
      "อยากสร้างเว็บไซต์สวย ๆ ด้วยตัวเองไหม? หลักสูตรนี้พี่ ๆ จะพาน้อง ๆ ไปเรียนรู้เกี่ยวกับการออกแบบเว็บไซต์ โดยพี่ ๆ จะปูพื้นฐานตั้งแต่ HTML CSS JavaScript เพื่อต่อยอดไปสู่ Framework ยอดนิยมอย่าง React และ Version Control อย่าง Git เครื่องมือที่จะช่วยน้อง ๆ ทำงานร่วมกันได้อย่างราบรื่น ฟังดูน่าสนใจใช่ม๊า แล้วมาสนุกด้วยกันในโลกของ Front-End",
    image: "/images/team/Front-end.png",
    sit: "/images/team/Front-end-sit.png",
  },
  {
    id: "web-design",
    name: "Web Design",
    description:
      "Web Design จะมีการปูพื้นฐานเกี่ยวกับการออกแบบ การจัดองค์ประกอบสำหรับการออกแบบ การใช้งานโปรแกรมสำหรับการออกแบบ💻 ไม่ว่าจะเป็นเรื่องขององค์ประกอบใน website, การใช้เครื่องมือในการออกแบบต่าง ๆ อย่าง Figma, Adobe Illustrator และยังไม่หมดเพียงเท่านี้ เพราะยังมีเรื่องของ Design system และรวมไปถึงเนื้อหาอื่น ๆ ที่น่าสนใจอีกมากมาย เพื่อต่อยอดไปสู่การออกแบบ Website !",
    image: "/images/team/WebDesign.png",
    sit: "/images/team/WebDesign-sit.png",
  },
  {
    id: "game-dev",
    name: "Game Dev",
    description:
      "รู้หรือไม่!? เกมที่มีหลากหลายมาจนถึงทุกวันนี้ที่น้อง ๆ ได้เล่นได้สัมผัสกัน ต่างก็ออกแบบด้วยหลากหลายวิธี และหนึ่งในkeyหลักของการออกแบบนั่นคือ JavaScript แต่เอ๋ JavaScript จะช่วยสร้างเกมได้ยังไงหล่ะ? Part Game Development ก็จะช่วยให้น้องกระจ่างนั่นเองโดยเป็นพื้นฐานที่เกี่ยวกับการสร้างเกมเบื้องต้นรวมทั้ง Version Control อย่าง Git ที่จะทำให้น้องๆ ได้เรียนรู้การทำงานที่เป็นไปอย่างมีประสิทธิภาพ",
    image: "/images/team/GameDev.png",
    sit: "/images/team/GameDev-sit.png",
  },
  {
    id: "devops",
    name: "DevOps",
    description:
      "Website ที่เราสร้างเราออกแบบกันไม่ได้มีแค่นี้น้าน้อง ๆ ยังเหลือส่วนที่จะทำให้คนอื่น ๆ สามารถเข้าถึง เว็บไซต์ของเราได้ แล้วทำได้ยังไงหล่ะ? ในส่วนของ DevOp หรือที่เราเรียก infrastructure จะทำให้น้อง ๆ ได้รู้เกี่ยวกับเครื่องมือหลากหลายชนิด ที่ทำให้ผู้คนสามารถเข้าถึง Website ของเราได้ผ่านทาง Domain จำพวก Docker หรือการใช้ Command Line Interface และ Version Control อย่าง Git ที่ทำให้ Website ของเราสมบูรณ์แบบเลยที่เดียว",
    image: "/images/team/DevOps.png",
    sit: "/images/team/DevOps-sit.png",
  },
];

export const getTeamTypes = () => {
  return teams;
};

export const getTeamType = (id: string) => {
  return teams.find((team) => team.id === id);
};
