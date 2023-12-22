import Testimony from "./Testimony";

const Testimonials = () => {
  return (
    <>
      <div className="bg-white p-8 md:p-48 xl:p-52 xl:min-h-screen">
        <div className="text-primary text-5xl font-light md:max-w-[60%] md:text-9xl xl:text-[174px] ">
          client testimonial
        </div>
        <div className="h-[8px] w-full bg-yellow md:max-w-[40%] xl:h-[16px] "></div>
      </div>
      <Testimony />
    </>
  );
};

export default Testimonials;
