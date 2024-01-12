import { useRef } from "react";
import AnimatedBar from "../shared/AnimatedBar";
import Input from "../shared/Input";
import useIsInViewport from "../../hooks/useIsInViewport";

const Connect = () => {
  const titleRef = useRef<HTMLDivElement>(null);

  const isInViewport = useIsInViewport(titleRef);

  return (
    <div className="bg-white border-t-2 border-primary p-8 py-11 gap-7  lg:border-none 2xl:min-h-screen">
      <div className="max-w-[1676px] mx-auto flex gap-[364px]">
        <div className="flex-1 flex flex-col gap-1 sm:gap-2 md:gap-8 xl:gap-16">
          <div
            className="text-primary text-[45px] sm:text-[90px] flex-1 font-light  md:text-[108px] lg:text-[146px] lg:leading-[89%] tracking-[17.4px] xl:text-[174px]"
            ref={titleRef}
          >
            before you go
          </div>
          <AnimatedBar isInviewport={isInViewport} />
        </div>
        <div
          className={`
      shadow-connect flex-1 rounded-[100px]  rounded-bl-none flex flex-col justify-center gap-[65px]
      md:justify-center md:text-lg  md:px-2
      2xl:p-[65px]
      `}
        >
          <h4 className="uppercase text-[32px] font-normal">connect with us</h4>
          <div className="flex flex-col gap-[30px]">
            <Input label="Full Name" placeholder="Enter your name" />
            <Input label="E-mail" placeholder="Enter your email" />
          </div>
          <div className="flex">
            <div
              className={`
uppercase rounded-full border-2 border-primary text-primary cursor-pointer hover:bg-primary hover:text-white py-[14px] px-[61px]
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
