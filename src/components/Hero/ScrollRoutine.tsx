import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getTimeline } from "../../utils/getTimeline";
import { useRef } from "react";
import QuestionMark from "./QuestionMark";

gsap.registerPlugin(ScrollTrigger);
const ScrollRoutine = () => {
  const textRef = useRef<HTMLDivElement>(null!);

  const textRef2 = useRef<HTMLDivElement>(null!);
  useGSAP(() => {
    const rotationTimeline = getTimeline(textRef);
    rotationTimeline.to(textRef.current, {
      y: "100%",
      duration: 1,
    });

    const rotationTimeline2 = getTimeline(textRef2);
    rotationTimeline2.to(textRef2.current, {
      y: "100%",
      duration: 1,
    });
  }, [textRef, textRef2]);
  return (
    <>
      <div className="flex flex-col text-[60px] sm:text-[90px] sm:flex-row lg:text-[120px] xl:text-[150px] 2xl:text-[190px] text-white font-light relative top-0 ">
        <div className="flex items-center h-[70px] sm:h-[105px] lg:h-[150px] xl:h-[175px] 2xl:h-[220px] overflow-hidden gap-2 ">
          <div className="hide-text" ref={textRef}>
            finding tech
          </div>
        </div>
      </div>

      <div className="flex text-[#FFFFFF]/50 text-[76px] sm:text-[144px] md:text-[170px] lg:text-[230px] xl:text-[290px]  2xl:text-[387px] overflow-hidden hide-text">
        <div
          className="flex items-center h-[80px] sm:h-[110px] md:h-[130px] md:mb-[20px] lg:mb-0   lg:h-[240px] xl:h-[300px] 2xl:h-[300px]"
          ref={textRef2}
        >
          alliance
          <div className="relative top-[7px]">
            <QuestionMark color="#CFFF47" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollRoutine;
