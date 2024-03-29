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
       w-[10.052vw] h-[10.833vw]
       3xl:w-[192.998px] 3xl:h-[192.998px]
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
        w-[3vw] h-[3vw] ml-[0.417vw] 
        3xl:w-[57.6px] 3xl:h-[57.6px] 3xl:ml-[8px]
          `}
      ></div>
    </div>
  );
};

export default QuestionMarkAnimated;
