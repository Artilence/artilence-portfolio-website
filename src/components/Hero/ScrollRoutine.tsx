import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

import QuestionMark from "./QuestionMark";
import { getTimeline } from "@/utils/getTimeline";
import ScrollAnimation from "../shared/ScrollAnimation";
import { getTimelineStart } from "@/utils/getTimelineStart";

gsap.registerPlugin(ScrollTrigger);
const ScrollRoutine = () => {
  const textRef = useRef<HTMLDivElement>(null!);
  const textRef2 = useRef<HTMLDivElement>(null!);
  const scrollRef = useRef<HTMLDivElement>(null!);

  useGSAP(() => {
    const textHidingTimeline = getTimeline(
      textRef,
      getTimelineStart(window.innerWidth).startString
    );
    textHidingTimeline.to(textRef.current, {
      y: "100%",
      duration: 1,
    });

    const textHidingTimeline2 = getTimeline(
      textRef2,
      getTimelineStart(window.innerWidth).startString
    );
    textHidingTimeline2.to(textRef2.current, {
      y: "100%",
      duration: 1,
    });

    const textHidingTimeline3 = getTimeline(
      ".alliance",
      getTimelineStart(window.innerWidth).startString,
      "30% top"
    );
    textHidingTimeline3.to(scrollRef.current, {
      y: "100%",
      duration: 1,
    });
  }, [textRef, textRef2, scrollRef]);
  return (
    <div className="relative">
      <div className="flex flex-col text-[7.813vw]  sm:flex-row 2xl:text-[240px] text-white font-light relative top-0 text-white 3xl:text-[150px]">
        <div className="flex items-center h-[9.0vw]  overflow-hidden 3xl:h-[172.8px]">
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
      <div className="alliance flex text-yellow text-[20.313vw] overflow-hidden 3xl:text-[390px]">
        <div
          className="flex items-center h-[20.313vw] 3xl:h-[390px]"
          ref={textRef2}
        >
          alliance
          <div className="flex items-center h-[20.313vw]  overflow-hidden 3xl:h-[390px]"></div>
          <QuestionMark color="#CFFF47" />
        </div>
      </div>
      <div className="overflow-hidden mt-8">
        <div ref={scrollRef} className="flex items-center justify-center">
          <ScrollAnimation />
        </div>
      </div>
    </div>
  );
};

export default ScrollRoutine;
