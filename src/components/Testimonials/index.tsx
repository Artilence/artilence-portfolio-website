import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import AnimatedBar from "../shared/AnimatedBar";
import Testimony from "./Testimony";
import useIsInViewport from "@/hooks/useIsInViewport";
import { clientTestimonialsList } from "@/constants";
import Image from "../shared/Image";

const Testimonials = () => {
  const clientTestimonialRef = useRef<HTMLDivElement>(null);
  const isInView = useIsInViewport(clientTestimonialRef);

  return (
    <div className=" bg-white max-w-[100%] mx-auto">
    <div className=" bg-white mx-auto">
      <div
        className="flex flex-col w-[85.78%] max-w-[1676px] mx-auto md:flex-row items-center md:py-48 xl:min-h-screen scroll-m-[147px] sticky"
        id="client-testimonials"
      >
        <div className="">
          <div
            className="text-primary text-5xl font-light md:max-w-[60%] md:text-9xl xl:text-[174px] "
            ref={clientTestimonialRef}
          >
            client testimonial
          </div>
          <AnimatedBar isInviewport={isInView} className="md:max-w-[64%] xl:max-w-[795px]" />
        </div>
      </div>
      {clientTestimonialsList?.length && (
        <Swiper
          slidesPerView={1}
          className="mySwiper  w-[85.78%] max-w-[1676px] mx-auto"
          navigation
          loop
          modules={[Navigation]}

        >
          <div className="swiper-button-prev!">
            <Image
              src="/navigation-arrow.svg"
              alt="left arrow"
              height={20}
              width={20}
              className="rotate-180 select-none"
            />
          </div>
          {clientTestimonialsList?.map(({ id, src, alt, name, review }) => (
            <SwiperSlide key={id}>
              <Testimony src={src} alt={alt} name={name} review={review} />
            </SwiperSlide>
          ))}

          <div className="swiper-button-next!">
            <Image
              src="/navigation-arrow.svg"
              alt="right arrow"
              className="select-none"
              height={20}
              width={20}
            />
          </div>
        </Swiper>
      )}
    </div>
    </div>
  );
};

export default Testimonials;
