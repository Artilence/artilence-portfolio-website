import { useEffect, useState } from "react";
import QuestionMarkAnimated from "./QuestionMarkAnimated";
import QuestionMark from "./QuestionMark";
import { generateRandomArray } from "../../utils/generateRandomArray";
import TechAnimation from "./TechAnimation";
import ScrollRoutine from "./ScrollRoutine";

const Hero = () => {
  const [isQuestionReady, setIsQuestionReady] = useState<boolean>(false);
  const [startScrollRoutine, setStartScrollRoutine] = useState<boolean>(false);
  useEffect(() => {
    if (!isQuestionReady) {
      setTimeout(() => {
        setIsQuestionReady(true);
        return;
      }, 5900);
    }
  });

  useEffect(() => {
    if (!startScrollRoutine) {
      setTimeout(() => {
        setStartScrollRoutine(true);
        return;
      }, 9000);
    }
  });

  return (
    <>
      <div className="px-[18px] bg-primary">
        <div
          className={`relative justify-end min-h-[40vh] pb-8
          sm:min-h-[60vh]
 w-full flex flex-col xl:justify-end font-bold relative lg:min-h-screen  max-w-[1676px] mx-auto
        `}
        >
          {startScrollRoutine ? (
            <ScrollRoutine />
          ) : (
            <>
              <div className="flex text-[12.5vw] sm:flex-row text-white font-light 2xl:text-[240px]">
                <div className="flex items-center h-[17.875vw] sm:h-[16vw] md:h-[15vw] lg:h-[14.5vw] 2xl:h-[290px] tracking-wide overflow-hidden">
                  {"finding".split("").map((letter, index) =>
                    index % 2 === 0 ? (
                      <div
                        key={index}
                        className="-translate-y-[100%] flex flex-col justify-start  animate-v-bt-scroll tracking-wide"
                      >
                        {generateRandomArray(letter)}
                      </div>
                    ) : (
                      <div
                        key={index}
                        className="translate-y-[100%] flex flex-col justify-center animate-v-tb-scroll tracking-wide"
                      >
                        {generateRandomArray(letter)}
                      </div>
                    )
                  )}
                </div>
                <span
                  className={`
                h-[8px] w-[8px] sm:h-4 sm:w-4
                xl:h-12 xl:w-[18px]`}
                >
                  {" "}
                </span>
                <div className="flex items-center xl:justify-end h-[17.875vw] sm:h-[16vw] md:h-[14vw] lg:h-[13.5vw] 2xl:h-[290px] overflow-hidden">
                  {"tech".split("").map((letter, index) =>
                    index % 2 === 0 ? (
                      <div
                        key={index}
                        className="-translate-y-[100%] flex flex-col justify-center animate-v-tb-scroll tracking-wide"
                      >
                        {generateRandomArray(letter)}
                      </div>
                    ) : (
                      <div
                        key={index}
                        className="translate-y-[100%] flex flex-col justify-center animate-v-bt-scroll tracking-wide"
                      >
                        {generateRandomArray(letter)}
                      </div>
                    )
                  )}
                </div>
              </div>
              <div className="flex text-[#FFFFFF]/50 text-[21.313vw] sm:text-[22.313vw] 2xl:text-[390px]">
                {!isQuestionReady ? (
                  <>
                    <div className="flex items-center h-[18vw] sm:h-[19vw] lg:h-[20vw] 2xl:h-[310px] overflow-hidden">
                      {"alliance".split("").map((letter, index) =>
                        index % 2 === 0 ? (
                          <div
                            key={index}
                            className="-translate-y-[100%] flex flex-col justify-center animate-v-tb-scroll-lg"
                          >
                            {generateRandomArray(letter)}
                          </div>
                        ) : (
                          <div
                            key={index}
                            className="translate-y-[100%] flex flex-col justify-center animate-v-bt-scroll-lg"
                          >
                            {generateRandomArray(letter)}
                          </div>
                        )
                      )}
                    </div>
                    <div className="tracking-tighter relative cursor-pointer">
                      <div className="flex items-center h-[18vw] sm:h-[19vw] lg:h-[20vw] 2xl:h-[310px] overflow-hidden">
                        <div className="-translate-y-[100%] flex flex-col justify-center gap-[10vw] animate-v-tb-scroll-lg">
                          <QuestionMark />
                          <QuestionMark />
                          <QuestionMark />
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center h-[18vw] sm:h-[19vw] lg:h-[20vw] 2xl:h-[310px] overflow-hidden animated-text">
                      alliance
                    </div>
                    <div className="flex items-center h-[18vw] sm:h-[19vw] lg:h-[20vw] 2xl:h-[310px] overflow-hidden">
                      <QuestionMarkAnimated />
                    </div>
                  </>
                )}
              </div>
              <div className="hidden md:block w-[80px] h-[67px] mt-8"></div>
            </>
          )}
        </div>
        {/* <TechAnimation /> */}
      </div>
    </>
  );
};

export default Hero;
