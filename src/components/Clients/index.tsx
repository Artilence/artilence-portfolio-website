import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "../shared/Image";
import { clientsArray } from "../../constants";

const Clients = () => {
  const {
    spaceBetween,
    centeredSlides,
    slidesPerView,
    speed,
    autoplay,
    breakpoints,
  } = {
    spaceBetween: 30,
    centeredSlides: true,
    slidesPerView: 5,
    speed: 3000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    breakpoints: {
      1024: {
        slidesPerView: 5,
      },
      768: {
        slidesPerView: 3,
      },
      640: {
        slidesPerView: 2,
      },
    },
  };
  return (
    <div className="h-full w-full flex">
      <Swiper
        spaceBetween={spaceBetween}
        centeredSlides={centeredSlides}
        slidesPerView={slidesPerView}
        speed={speed}
        autoplay={autoplay}
        breakpoints={breakpoints}
        loop
        modules={[Autoplay]}
        className="mySwiper h-full bg-white lg:h-[352px] md:h-[200px] sm:h-[150px]"
      >
        {clientsArray?.map(({ id, src, alt }) => (
          <SwiperSlide
            key={id}
            className="h-full flex justify-center items-center "
          >
            <Image src={src} alt={alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Clients;
