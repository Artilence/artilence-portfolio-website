import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

import QuestionMark from "./QuestionMark";
import { getTimeline } from "@/utils/getTimeline";
import ScrollAnimation from "../shared/ScrollAnimation";

gsap.registerPlugin(ScrollTrigger);
const ScrollRoutine = () => {
  const textRef = useRef<HTMLDivElement>(null!);
  const textRef2 = useRef<HTMLDivElement>(null!);
  const scrollRef = useRef<HTMLDivElement>(null!);

  useGSAP(() => {
    const textHidingTimeline = getTimeline(textRef);
    textHidingTimeline.to(textRef.current, {
      y: "100%",
      duration: 1,
    });

    const textHidingTimeline2 = getTimeline(textRef2);
    textHidingTimeline2.to(textRef2.current, {
      y: "100%",
      duration: 1,
    });

    const textHidingTimeline3 = getTimeline(".alliance", "top top", "30% top");
    textHidingTimeline3.to(scrollRef.current, {
      y: "100%",
      duration: 1,
    });
  }, [textRef, textRef2, scrollRef]);
  return (
    <div className="relative">
      <div className="flex flex-col text-[12.5vw]  sm:flex-row 2xl:text-[240px] text-white font-light relative top-0 text-white">
        <div className="flex items-center h-[17.875vw] sm:h-[16vw] md:h-[15vw] lg:h-[14.5vw] 2xl:h-[290px] overflow-hidden">
          <div className="tracking-wide flex" ref={textRef}>
            {"finding".split("").map((letter, index) => (
              <div key={index}>{letter}</div>
            ))}
            <span
              className={`
                h-[8px] w-[8px] sm:h-4 sm:w-4
                xl:h-12 xl:w-[18px]`}
            >
              {" "}
            </span>
            {"tech".split("").map((letter, index) => (
              <div key={index}>{letter}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="alliance flex text-yellow text-[21.313vw] sm:text-[22.313vw] 2xl:text-[390px] overflow-hidden">
        <div
          className="flex items-center h-[18vw] sm:h-[19vw] lg:h-[20vw] 2xl:h-[310px]"
          ref={textRef2}
        >
          alliance
          <div className="flex items-center h-[25vw]  overflow-hidden"></div>
          <QuestionMark color="#CFFF47" />
        </div>
      </div>
      <div className="hidden md:block overflow-hidden mt-8">
        <div ref={scrollRef} className="flex items-center justify-center">
          <ScrollAnimation />
        </div>
      </div>
    </div>
  );
};

export default ScrollRoutine;
