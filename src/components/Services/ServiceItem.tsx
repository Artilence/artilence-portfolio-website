const ServiceItem = () => {
  return (
    <div className="flex flex-col xl:flex-row 2xl:min-h-screen">
      <div className="bg-primary  p-6 xl:flex-1 xl:p-32 xl:flex xl:flex-col xl:justify-center">
        <h4 className="text-4xl text-white xl:text-8xl">name</h4>
        <div className="h-[8px] w-full bg-yellow xl:h-[16px]"></div>
      </div>
      <div className="bg-yellow p-6  xl:flex-1 xl:p-32 flex justify-center items-center">
        <div className="grid grid-cols-3 gap-24">
          <div className="h-[100px] w-[100px] bg-white rounded-full 2xl:h-[180px] 2xl:w-[180px]"></div>
          <div className="h-[100px] w-[100px] bg-white rounded-full 2xl:h-[180px] 2xl:w-[180px]"></div>
          <div className="h-[100px] w-[100px] bg-white rounded-full 2xl:h-[180px] 2xl:w-[180px]"></div>
          <div className="h-[100px] w-[100px] bg-white rounded-full 2xl:h-[180px] 2xl:w-[180px]"></div>
          <div className="h-[100px] w-[100px] bg-white rounded-full 2xl:h-[180px] 2xl:w-[180px]"></div>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
