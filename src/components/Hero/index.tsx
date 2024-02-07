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
        <div className="relative min-h-[370px] lg:-top-[100px] sm:min-h-[60vh] w-full flex flex-col justify-end font-bold relative lg:min-h-screen  max-w-[1676px] mx-auto ">
          {startScrollRoutine ? (
            <ScrollRoutine />
          ) : (
            <>
              <div className="flex flex-col text-[60px] sm:text-[90px] sm:flex-row lg:text-[120px] xl:text-[150px] 2xl:text-[190px] text-white font-light  ">
                <div className="flex items-center h-[70px] sm:h-[105px] lg:h-[150px] xl:h-[175px] 2xl:h-[220px] overflow-hidden tracking-wide">
                  {"finding".split("").map((letter, index) =>
                    index % 2 === 0 ? (
                      <div
                        key={index}
                        className="-translate-y-[100%] flex flex-col justify-center animate-v-bt-scroll tracking-wide"
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
                <span className="w-[18px] h-12"> </span>
                <div className="flex items-center justify-end h-[70px] sm:h-[105px]  lg:h-[150px] xl:h-[175px] 2xl:h-[220px] overflow-hidden">
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
              <div className="flex text-[#FFFFFF]/50 text-[76px] sm:text-[144px] md:text-[170px] lg:text-[230px] xl:text-[290px]  2xl:text-[387px]">
                {!isQuestionReady ? (
                  <>
                    <div className="flex items-center h-[80px] sm:h-[110px] md:h-[130px] md:mb-[20px] lg:mb-0   lg:h-[240px] xl:h-[300px] 2xl:h-[300px]  overflow-hidden  ">
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
                      <div className="flex items-center h-[80px] sm:h-[130px] lg:h-[240px] xl:h-[290px] 2xl:h-[300px] overflow-hidden">
                        <div className="-translate-y-[100%] flex flex-col justify-center animate-v-tb-scroll-lg">
                          <QuestionMark />
                          <QuestionMark />
                          <QuestionMark />
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center h-[80px] sm:h-[110px] md:h-[130px] md:mb-[20px] lg:mb-0   lg:h-[240px] xl:h-[300px] 2xl:h-[300px]  overflow-hidden animated-text">
                      alliance
                    </div>
                    <div className="flex items-center h-[80px] sm:h-[130px] lg:h-[240px] xl:h-[290px] 2xl:h-[300px] overflow-hidden">
                      <div className="flex flex-col justify-center items-center gap-[18px]">
                        <QuestionMarkAnimated />
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="w-[80px] h-[67px] mt-8"></div>
            </>
          )}
        </div>
        <TechAnimation />
      </div>
    </>
  );
};

export default Hero;
