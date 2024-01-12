import { useRef } from "react";
import AnimatedBar from "../shared/AnimatedBar";
import Testimony from "./Testimony";
import useIsInViewport from "../../hooks/useIsInViewport";

const Testimonials = () => {
  const clientTestimonialRef = useRef<HTMLDivElement>(null);
  const isInView = useIsInViewport(clientTestimonialRef);
  return (
    <>
      <div className="bg-white p-8 md:py-48 xl:min-h-screen">
        <div className="max-w-[1676px] mx-auto">
          <div
            className="text-primary text-5xl font-light md:max-w-[60%] md:text-9xl xl:text-[174px] "
            ref={clientTestimonialRef}
          >
            client testimonial
          </div>
          <AnimatedBar isInviewport={isInView} className="md:max-w-[45%]" />
        </div>
      </div>
      <Testimony />
    </>
  );
};

export default Testimonials;
