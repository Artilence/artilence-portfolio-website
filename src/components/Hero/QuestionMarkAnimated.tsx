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
    <>
      <svg
        width="196"
        height="204"
        viewBox="0 0 196 204"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-move-backwards"
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
      <div className="before:animate-move-to-center before:absolute  before:h-16 before:w-16  before:bg-transparent before:rounded-full   w-16 h-16 bg-[#FFFFFF]/50 animate-fill-text rounded-full ml-[9px]"></div>
    </>
  );
};

export default QuestionMarkAnimated;