import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "../shared/Image";
import { clientsArray } from "../../constants";

const Clients = () => {
  const { centeredSlides, speed, autoplay } = {
    centeredSlides: true,
    speed: 2000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    // breakpoints: {
    //   1024: {
    //     slidesPerView: 3,
    //   },
    //   768: {
    //     slidesPerView: 2,
    //   },
    //   640: {
    //     slidesPerView: 1,
    //   },
    // },
  };
  return (
    <div className="flex">
      <Swiper
        centeredSlides={centeredSlides}
        speed={speed}
        autoplay={autoplay}
        // breakpoints={breakpoints}
        slidesPerView={3}
        loop
        modules={[Autoplay]}
        className="mySwiper overflow-hidden bg-white"
      >
        {clientsArray?.map(({ id, src, alt }) => (
          <SwiperSlide key={id} className="flex justify-center items-center">
            <Image src={src} alt={alt} width={235} className="py-40" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Clients;
