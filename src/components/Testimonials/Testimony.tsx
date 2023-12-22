const Testimony = () => {
  return (
    <div className="bg-white p-8 lg:hidden">
      <div className="flex gap-6 items-center justify-center">
        <div className="flex-1">
          <div className="w-full aspect-[1/1.5] bg-gray">image</div>
        </div>
        <div className="flex-1 flex flex-col text-xs font-light tracking-wider md:text-lg">
          <div className="text-gray">
            I have been working with Artilence for the past few months and I can
            confidently say that their services are top-notch. They have a team
            of experts in artificial intelligence and they have been able to
            provide us with the best solutions for our projects. Their tech is
            up-to-date and their customer service is second to none. I highly
            recommend Artilence for any AI related project.
          </div>
          <div className="text-primary">company</div>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
