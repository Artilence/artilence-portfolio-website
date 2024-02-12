import { useRef } from "react";

import useIsInViewport from "@/hooks/useIsInViewport";
import AnimatedBar from "../shared/AnimatedBar";
import Input from "../shared/Input";

const Connect = () => {
  const titleRef = useRef<HTMLDivElement>(null);

  const isInViewport = useIsInViewport(titleRef);

  return (
    <div
      className="bg-white border-t-2 border-primary scroll-m-[147px] py-[8.646vw] 2xl:min-h-screen 3xl:py-[166px]"
      id="contact-us"
    >
      <div className="flex-1 w-[85.78%] max-w-[1676px] mx-auto flex gap-[10%] justify-between">
        <div className="flex flex-col justify-between gap-[5.417vw] 3xl:gap-[104px] min-w-[40%] ">
          <div
            className="text-primary text-[12.063vw] font-light  3xl:text-[174px] leading-[89%] tracking-widest"
            ref={titleRef}
          >
            before
            <br />
            you
            <br />
            go
          </div>
          <AnimatedBar isInviewport={isInViewport} />
        </div>
        <div
          className={`
      shadow-connect rounded-[3.125vw]  rounded-bl-none flex flex-col min-w-[50%]
      p-[5vw] 
      3xl:p-[96px] 3xl:rounded-[60px] 3xl:gap-[65px] 3xl:rounded-bl-none justify-between
      `}
        >
          <h4 className="uppercase text-[1.667vw] font-normal 3xl:text-[32px]">
            connect with us
          </h4>
          <Input label="Full Name" placeholder="Enter your name" />
          <Input label="E-mail" placeholder="Enter your email" />
          <div className="flex">
            <div
              className={`
uppercase rounded-full border  border-primary text-primary text-[1.042vw] cursor-pointer hover:bg-primary hover:text-white py-[0.729vw] px-[3.177vw] 3xl:text-[20px] 3xl:px-[61px]  3xl:py-[14px]
        `}
            >
              Connect
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
