import Input from "../shared/Input";

const Connect = () => {
  return (
    <div className="bg-white border-t-2 border-primary flex p-9 py-11 gap-7 lg:justify-center lg:border-none lg:min-h-screen">
      <div className="flex flex-col gap-y-4 flex-1 lg:max-w-[644px] ">
        <div className="flex flex-col text-primary text-[45px] leading-tight sm:text-[60px] flex-1 font-light md:max-w-[60%] md:text-9xl xl:text-[174px] ">
          before you go
        </div>
        <div className="h-[8px] w-full bg-yellow xl:h-[16px] "></div>
      </div>
      <div className="text-[6px] shadow-connect flex-1 rounded-2xl rounded-bl-none p-4 flex flex-col justify-between gap-4 md:justify-center md:text-lg md:p-5 lg:text-2xl lg:max-w-[607px] lg:p-20 lg:gap-18 ">
        <h4 className="uppercase md:ml-5 lg:text-4xl">connect with us</h4>
        <div className="">
          <Input label="Full Name" placeholder="Enter your name" />
          <Input label="E-mail" placeholder="Enter your email" />
        </div>
        <div
          className={`
max-w-[50%] rounded-full border border-primary text-primary py-2  text-center cursor-pointer hover:bg-primary hover:text-white
md:border-2
        `}
        >
          connect
        </div>
      </div>
    </div>
  );
};

export default Connect;
