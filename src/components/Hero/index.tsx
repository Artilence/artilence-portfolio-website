import { useEffect, useState } from "react";
import AnimationFrameOne from "./AnimationFrameOne";
import CircleGrid from "./CircleGrid";
import { getRandomOddNumber } from "../../utils/getRandomOddNumber";

const Hero = () => {
  const [isQuestionClicked, setIsQuestionClicked] = useState<boolean>(false);
  const [isGridVisible, setIsGridVisible] = useState<boolean>(false);
  // const [loadingPercentage, setLoadingPercentage] = useState(0);

  useEffect(() => {
    if (!isQuestionClicked) {
      setTimeout(() => {
        setIsQuestionClicked(true);
        return;
      }, 5700);
    }
  });

  // useEffect(() => {
  //   if (isQuestionClicked && loadingPercentage < 100) {
  //     setTimeout(() => {
  //       setLoadingPercentage(loadingPercentage + 25);
  //       return;
  //     }, 500);
  //   }
  // });

  if (isGridVisible) return <CircleGrid />;

  return (
    <>
      {false ? (
        <AnimationFrameOne setIsGridVisible={setIsGridVisible} />
      ) : (
        <div className="min-h-[40vh]  lg:-top-[100px] sm:min-h-[60vh] w-full flex flex-col items-end  justify-end font-bold relative px-4   lg:min-h-screen  max-w-[1676px] mx-auto">
          <div className="flex flex-col text-[60px] sm:text-[90px] sm:flex-row lg:text-[120px] xl:text-[150px] 2xl:text-[190px] text-white">
            <div className="flex items-center h-[70px] sm:h-[105px] lg:h-[150px] xl:h-[175px] 2xl:h-[220px] overflow-hidden gap-2">
              {"finding".split("").map((letter, index) =>
                index % 2 === 0 ? (
                  <div
                    key={index}
                    className="-translate-y-[100%] flex flex-col justify-center animate-v-bt-scroll"
                  >
                    {new Array(getRandomOddNumber()).fill(0).map(() => (
                      <span>{letter}</span>
                    ))}
                  </div>
                ) : (
                  <div
                    key={index}
                    className="translate-y-[100%] flex flex-col justify-center animate-v-tb-scroll"
                  >
                    {new Array(getRandomOddNumber()).fill(0).map(() => (
                      <span>{letter}</span>
                    ))}
                  </div>
                )
              )}
              <span className="w-[16px] hidden md:block"></span>
            </div>
            <div className="flex items-center justify-end h-[70px] sm:h-[105px]  lg:h-[150px] xl:h-[175px] 2xl:h-[220px] overflow-hidden gap-2">
              {"tech".split("").map((letter, index) =>
                index % 2 === 0 ? (
                  <div
                    key={index}
                    className="-translate-y-[100%] flex flex-col justify-center animate-v-tb-scroll"
                  >
                    {new Array(getRandomOddNumber()).fill(0).map(() => (
                      <span>{letter}</span>
                    ))}
                  </div>
                ) : (
                  <div
                    key={index}
                    className="translate-y-[100%] flex flex-col justify-center animate-v-bt-scroll"
                  >
                    {new Array(getRandomOddNumber()).fill(0).map(() => (
                      <span>{letter}</span>
                    ))}
                  </div>
                )
              )}
            </div>
          </div>
          <div className="flex text-[#FFFFFF]/50 text-[76px] sm:text-[144px] md:text-[170px] lg:text-[230px] xl:text-[290px]  2xl:text-[387px] ">
            <div className="flex items-center h-[80px] sm:h-[110px] md:h-[130px] md:mb-[20px] lg:mb-0   lg:h-[240px] xl:h-[300px] 2xl:h-[300px]  overflow-hidden">
              {"alliance".split("").map((letter, index) =>
                index % 2 === 0 ? (
                  <div
                    key={index}
                    className="-translate-y-[100%] flex flex-col justify-center animate-v-tb-scroll-lg"
                  >
                    {new Array(getRandomOddNumber()).fill(0).map(() => (
                      <span className="leading-loose xl:leading-none">
                        {letter}
                      </span>
                    ))}
                  </div>
                ) : (
                  <div
                    key={index}
                    className="translate-y-[100%] flex flex-col justify-center animate-v-bt-scroll-lg"
                  >
                    {new Array(getRandomOddNumber()).fill(0).map(() => (
                      <span className="leading-loose xl:leading-none">
                        {letter}
                      </span>
                    ))}
                  </div>
                )
              )}
            </div>
            {!isQuestionClicked ? (
              <div
                className="tracking-tighter relative cursor-pointer"
                onClick={() => {
                  setIsQuestionClicked(true);
                }}
              >
                <div className="flex items-center h-[80px] sm:h-[130px] lg:h-[240px] xl:h-[290px] 2xl:h-[300px] overflow-hidden">
                  <div className="-translate-y-[100%] flex flex-col justify-center animate-v-tb-scroll-lg">
                    <span>?</span>
                    <span>?</span>
                    <span>?</span>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="tracking-tighter relative cursor-pointer"
                onClick={() => {
                  setIsQuestionClicked(true);
                }}
              >
                <div className="flex items-center h-[80px] sm:h-[130px] lg:h-[240px] xl:h-[290px] 2xl:h-[300px] overflow-hidden">
                  <div className="flex flex-col justify-center items-center  animated-text relative  animate-fill-text ">
                    <span className="">?</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
