import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "../shared/Image";
import { clientsArray } from "../../constants";

const Clients = () => {
  const { centeredSlides, speed, autoplay, breakpoints } = {
    centeredSlides: true,
    speed: 2000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 1,
      },
    },
  };
  return (
    <div className="flex h-[20vh]">
      <Swiper
        centeredSlides={centeredSlides}
        speed={speed}
        autoplay={autoplay}
        breakpoints={breakpoints}
        loop
        modules={[Autoplay]}
        className="mySwiper h-full bg-white overflow-hidden"
      >
        {clientsArray?.map(({ id, src, alt }) => (
          <SwiperSlide key={id} className="flex justify-center items-center">
            <Image src={src} alt={alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Clients;
