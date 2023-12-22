import { useEffect, useState } from "react";
import AnimationFrameOne from "./AnimationFrameOne";
import CircleGrid from "./CircleGrid";

const Hero = () => {
  const [isQuestionClicked, setIsQuestionClicked] = useState<boolean>(false);
  const [isGridVisible, setIsGridVisible] = useState<boolean>(false);
  const [loadingPercentage, setLoadingPercentage] = useState(0);

  useEffect(() => {
    if (isQuestionClicked && loadingPercentage < 100) {
      setTimeout(() => {
        setLoadingPercentage(loadingPercentage + 25);
        return;
      }, 500);
    }
  });

  if (isGridVisible) return <CircleGrid />;

  return (
    <>
      {}
      {isQuestionClicked ? (
        <AnimationFrameOne setIsGridVisible={setIsGridVisible} />
      ) : (
        <div className="flex-1 w-full flex flex-col justify-end items-end font-bold py-8 min-h-screen">
          <div className="text-[150px] text-white  leading-[100%]">
            finding tech
          </div>
          <div className="flex text-[#FFFFFF]/50  text-[390px]  leading-[80%] ">
            <div className="">alliance</div>
            {!isQuestionClicked ? (
              <div
                className="tracking-tighter relative animate-gelatine cursor-pointer"
                onClick={() => {
                  setIsQuestionClicked(true);
                }}
              >
                ?
                <div className="w-[55px] h-[50px] overflow-hidden absolute bottom-[8%] left-[43%]">
                  <div className=" w-[100px] text-lg  text-primary absolute bottom-[12%] left-[43%] tracking-normal  translate-x-[100%] animate-move ">
                    Click Me
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="tracking-tighter relative transition-colors hover:color-yellow-300 text"
                onClick={() => console.log("question mark clicked")}
              >
                ?
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
