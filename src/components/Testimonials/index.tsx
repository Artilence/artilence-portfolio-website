import Testimony from "./Testimony";

const Testimonials = () => {
  return (
    <>
      <div className="bg-white p-8 md:py-48 xl:min-h-screen max-w-[1676px] mx-auto">
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
