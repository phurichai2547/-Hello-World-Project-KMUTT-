import { useState } from "react";
import { motion } from "framer-motion";

type Data = {
  id: number;
  question: string;
  answer: string;
};

const faqs: Data[] = [
  {
    id: 1,
    question: "รูปแบบการเรียนการสอนในโครงการเป็นอย่างไร",
    answer:
      "โครงการ Hello World ในปีนี้ เราได้มีการจัดโครงการในรูปแบบของ Hybrid หรือก็คือเรียนได้ทั้งในรูปแบบของออนไลน์(online) และแบบออนไซต์ (on-site)โดยโครงการจะเริ่มตั้งแต่วันที่ 15 พฤศจิกายน 2566 ไปจนถึง 9 ธันวาคม 2566 เราจะมีนัดเรียนกันในทุกวันพุธ เวลา 17.30 น. - 19.30 น.และทุกวันเสาร์ เวลา 09.30 น. - 17.00 น.",
  },
  {
    id: 2,
    question: "สถานที่จัดกิจกรรมคือที่ไหน",
    answer:
      "ในรูปแบบ on-site จะจัดขึ้นที่อาคาร LX (Learning Exchange Building) ชั้นที่ 11 ในรูปแบบ online เราจะจัดการเรียนการสอนผ่านโปรแกรม Microsoft Teams ของโครงการ",
  },
  {
    id: 3,
    question: "สมัครแล้วมีสิทธิ์เข้าร่วมโครงการทุกคนหรือไม่",
    answer:
      "เนื่องจากมีผู้ที่ให้ความสนใจในโครงการ Hello World เป็นจำนวนมากในทุก ๆ ปี และมีการเปิดรับน้อง ๆ ทุกสาขาในคณะเทคโนโลยีสารสนเทศ(SIT) จึงมีการรับจำนวนที่นั่งที่จำกัด ทางโครงการจึงต้องมีการคัดเลือกน้อง ๆ จากแบบฟอร์มที่สมัครกันเข้ามา",
  },
  {
    id: 4,
    question: " อุปกรณ์ที่จำเป็นในการเข้าร่วมโครงการ ",
    answer:
      "สิ่งที่น้อง ๆ จำเป็นต้องมี- คอมพิวเตอร์ สามารถเลือกใช้ได้ทั้งแบบพกพา (แล็ปท็อป) และแบบตั้งโต๊ะ (พีซี) แต่หากน้อง ๆ ไม่สะดวกที่จะนำคอมพิวเตอร์ส่วนตัวมาเรียนแบบ on-site ก็สามารถยืมคอมพิวเตอร์ของมหาวิทยาลัยที่มีในห้องเรียนได้ - โปรแกรม โปรแกรมที่น้อง ๆ จะต้องติดตั้งนั้น พี่ ๆ แต่ละฝ่ายจะมีโปรแกรมประกอบการเรียนการสอนที่แตกต่างกัน และจะแจ้งให้น้อง ๆ ทราบอีกครั้งในกิจกรรม",
  },
  {
    id: 5,
    question: " จำเป็นต้องมีพื้นฐานก่อนมาไหม",
    answer:
      "ไม่จำเป็นต้องมีพื้นฐานก่อนเรียน เพราะพี่ ๆ จะเริ่มสอนน้อง ๆ ตั้งแต่เริ่มต้น ถ้ามีคำถามหรือข้อสงสัยใด ๆ สามารถถามพี่ ๆ ได้เสมอ มั่นใจได้เลยว่าน้อง ๆ จะได้สนุกสนานเพลิดเพลินและซึมซับสาระความรู้ใหม่ ๆ อย่างแน่นอน!",
  },
  {
    id: 6,
    question: " จำเป็นต้องเข้าร่วมกิจกรรมทุกวันหรือไม่",
    answer:
      "เนื่องจากเนื้อหาในแต่ละบทเรียนของโครงการ Hello World มีความต่อเนื่อง การเข้าร่วมกิจกรรมจึงเป็นสิ่งที่จำเป็น เพื่อให้ได้รับความรู้ที่ครบถ้วนและต่อเนื่อง แต่ถ้าหากมีเหตุจำเป็นจริง ๆ สามารถแจ้งขออนุญาตพี่ ๆ ประจำสาขาได้ แต่มีข้อกำหนดคือ ต้องเข้าร่วมกิจกรรมโครงการมากกว่า 60% จึงจะได้รับชั่วโมงกิจกรรม",
  },
];

const FaqBox = () => {
  const [active, setActive] = useState<number | null>(null);

  const toggleSign = (id: number) => {
    if (active === id) {
      setActive(null);
    } else {
      setActive(id);
    }
  };

  const faqVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" },
  };

  return (
    <>
      {faqs.map((faq) => (
        <div
          key={faq.id}
          className="mb-3 rounded-[25px] bg-white p-3 font-itim 
        text-[1rem] text-black lg:py-4 lg:text-[1.3rem] z-20"
        >
          <div
            className="flex items-center justify-between"
            onClick={() => toggleSign(faq.id)}
          >
            <h2 className="flex-1 text-center">{faq.question}</h2>
            <span className="cursor-pointer">
              {active === faq.id ? "-" : "+"}
            </span>
          </div>

          {faq.id === active && (
            <motion.div
              className="p-2 m-2 border-t-2"
              variants={faqVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.3, type: "tween" }}
            >
              <motion.p
                variants={faqVariants}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-[1.2rem]"
              >
                {faq.answer}
              </motion.p>
            </motion.div>
          )}
        </div>
      ))}
    </>
  );
};

export default FaqBox;
