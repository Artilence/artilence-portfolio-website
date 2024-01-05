import Input from "../shared/Input";

const Connect = () => {
  return (
    <div className="bg-white border-t-2 border-primary max-w-[1676px] mx-auto flex p-8 py-11 gap-7  lg:border-none 2xl:min-h-screen">
      <div className="flex-1 flex flex-col gap-1 sm:gap-2 md:gap-8 xl:gap-16">
        <div className="text-primary text-[45px] leading-1 sm:text-[90px] flex-1 font-light  md:text-[108px] lg:text-[146px] lg:leading-[0.9] xl:text-[200px] ">
          before you go
        </div>
        <div className="h-[4px] w-full bg-yellow xl:h-[16px] "></div>
      </div>
      <div
        className={`
      text-[6px] shadow-connect flex-1 rounded-2xl rounded-bl-none p-4 flex flex-col justify-between
      sm:p-8 
      md:justify-center md:text-lg  md:px-2
      lg:p-5 lg:text-2xl lg:p-20 lg:gap-18 
      xl:p-8 xl:gap-[50px]
      2xl:rounded-[100px] 2xl:p-20
      `}
      >
        <h4 className="uppercase sm:text-[18px] md:ml-5 lg:text-4xl xl:text-5xl xl:mb-8">
          connect with us
        </h4>
        <div className="">
          <Input label="Full Name" placeholder="Enter your name" />
          <Input label="E-mail" placeholder="Enter your email" />
        </div>
        <div
          className={`
max-w-[50%] rounded-full border border-primary text-primary py-1  text-center cursor-pointer hover:bg-primary hover:text-white
sm:text-[14px]
md:border-2 md:ml-5
lg:mt-6
        `}
        >
          Connect
        </div>
      </div>
    </div>
  );
};

export default Connect;
