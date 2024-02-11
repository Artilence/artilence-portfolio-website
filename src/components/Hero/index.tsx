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
      <div className="bg-primary">
        <div
          className={`relative justify-end min-h-[70vh] pb-8
 w-full flex flex-col xl:justify-end font-bold relative lg:min-h-screen  w-[85.78%] max-w-[1676px] mx-auto 
        `}
        >
          {startScrollRoutine ? (
            <ScrollRoutine />
          ) : (
            <>
              <div className="flex text-[7.813vw] sm:flex-row text-white font-light 3xl:text-[150px]">
                <div className="flex items-center h-[9.0vw] tracking-wide overflow-hidden 3xl:h-[172.8px]">
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
                <div className="flex items-center xl:justify-end h-[9.0vw] overflow-hidden 3xl:h-[172.8px]">
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
              <div className="flex text-[#FFFFFF]/50 text-[20.313vw] 3xl:text-[390px]">
                {!isQuestionReady ? (
                  <>
                    <div className="flex items-center h-[20.313vw] overflow-hidden 3xl:h-[390px] ">
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
                      <div className="flex items-center h-[20.313vw] overflow-hidden 3xl:h-[390px]">
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
                    <div className="flex items-center h-[20.313vw] overflow-hidden animated-text 3xl:h-[390px]">
                      alliance
                    </div>
                    <div className="flex items-center h-[20.313vw] overflow-hidden 3xl:h-[390px]">
                      <QuestionMarkAnimated />
                    </div>
                  </>
                )}
              </div>
              <div className="h-[40px] w-[80px] md:h-[67px] mt-8"></div>
            </>
          )}
        </div>
      </div>
      <TechAnimation />
    </>
  );
};

export default Hero;
