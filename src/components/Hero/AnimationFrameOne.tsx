import { useState } from "react";

const AnimationFrameOne = ({ setIsGridVisible }: AnimationFrameOneProps) => {
  const [isCircleClicked, setIsCircleClicked] = useState<boolean>(false);
  return (
    <div className="flex-1 flex flex-col justify-center ">
      <div className="flex  justify-between min-h-[632px] ">
        <div className="flex flex-col justify-between">
          <div className="w-full h-1/2 self-start relative animate-vertical-up">
            {Array.from({ length: 5 }, (_, index) => index + 1)
              .reverse()
              .map((i: number, _: number, arr: number[]) => (
                <div
                  className={`flex gap-[40px] ${i !== arr[0] && "mt-[40px]"}`}
                >
                  {Array.from({ length: i }, (_, index) => index + 1).map(
                    () => (
                      <div className="w-[37px] h-[37px] rounded-full bg-white"></div>
                    )
                  )}
                </div>
              ))}
          </div>
          <p className="text-[150px] text-white font-bold leading-[80%]  -translate-x-[200%] animate-left-to-right ">
            to innovate
          </p>
        </div>
        <div className="self-center">
          {!isCircleClicked ? (
            <div
              className="absolute scale-0 w-[100px] h-[100px] rounded-full bg-yellow   animate-appear"
              onClick={() => {
                setIsCircleClicked(true);
                setTimeout(() => {
                  setIsGridVisible(true);
                }, 1500);
              }}
            ></div>
          ) : (
            <div className="absolute w-[100px] h-[100px] rounded-full bg-yellow animate-conver-screen z-50"></div>
          )}
        </div>

        <div className="flex flex-col justify-between">
          <p className="text-right text-[150px] text-white font-bold  leading-[80%] translate-x-[200%] animate-right-to-left ">
            collaborate
          </p>
          <div className="w-full h-1/2 self-end animate-vertical-down ">
            {Array.from({ length: 5 }, (_, index) => index + 1).map(
              (i: number, _: number, arr: number[]) => (
                <div
                  className={`flex justify-end gap-[40px] ${
                    i !== arr[0] && "mt-[40px]"
                  }`}
                >
                  {Array.from({ length: i }, (_, index) => index + 1).map(
                    () => (
                      <div className="w-[37px] h-[37px] rounded-full bg-white"></div>
                    )
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

interface AnimationFrameOneProps {
  setIsGridVisible: (isGridVisible: boolean) => void;
}

export default AnimationFrameOne;
