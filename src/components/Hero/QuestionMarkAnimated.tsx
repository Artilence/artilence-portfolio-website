import { useEffect, useState } from "react";

const QuestionMarkAnimated = () => {
  const [isQuestionClicked, setIsQuestionClicked] = useState<boolean>(false);

  useEffect(() => {
    if (!isQuestionClicked) {
      setTimeout(() => {
        setIsQuestionClicked(true);
        return;
      }, 1000);
    }
  });
  return (
    <div className="flex flex-col justify-start items-center gap-2 2xl:gap-8">
      <svg
        width="196"
        height="204"
        viewBox="0 0 196 204"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`relative z-0 top-0
       w-[40px] h-[42px]
       sm:w-[80px] sm:h-[88px]
       md:w-[100px] md:h-[100px]
       lg:w-[140px] lg:h-[140px]
       xl:w-[190px] xl:h-[190px]
       2xl:w-[220px] 2xl:h-[220px]
        `}
      >
        <path
          d="M72.498 180.002V159.002C73.298 131.802 96.3261 118.5 111.998 109.002C145 89 141.478 32.6075 111.998 13.5C90.398 -0.500024 62.1667 1.00002 49 4.00002C11.0001 12 1.99791 46.0019 2.49791 63.5019V69.0019"
          stroke="rgba(255, 255, 255, 0.5)"
          strokeWidth="53"
          transform="translate(30, 28)"
        />

        <path
          d="M72.498 180.002V159.002C73.298 131.802 96.3261 118.5 111.998 109.002C145 89 141.478 32.6075 111.998 13.5C90.398 -0.500024 62.1667 1.00002 49 4.00002C11.0001 12 1.99791 46.0019 2.49791 63.5019V69.0019"
          stroke="#CFFF47"
          strokeWidth="53"
          id="pth"
          transform="translate(30, 28)"
          style={{ strokeDasharray: 500, strokeDashoffset: 500 }}
        />
      </svg>
      <div
        className={` bg-[#FFFFFF]/50 rounded-full
        animate-fill-text
        w-[14px] h-[14px] ml-[1px] 
        sm:w-[24px] sm:h-[24px] sm:ml-[4px]
        md:w-[28px] md:h-[28px] sm:ml-[5px]
        lg:w-[41px] lg:h-[41px] sm:ml-[6px]
        xl:w-[52px] xl:h-[52px]
        2xl:w-[58px] 2xl:h-[58px]
          `}
      ></div>
    </div>
  );
};

export default QuestionMarkAnimated;
