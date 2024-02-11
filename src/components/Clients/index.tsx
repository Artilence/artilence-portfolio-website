import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { clientsArray } from "@/constants";
import Image from "../shared/Image";

const Clients = () => {
  const { centeredSlides, speed, autoplay } = {
    centeredSlides: true,
    speed: 2000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
  };
  return (
    <div className="flex scroll-m-80" id="our-partners">
      <Swiper
        centeredSlides={centeredSlides}
        speed={speed}
        autoplay={autoplay}
        slidesPerView={3}
        loop
        modules={[Autoplay]}
        className="mySwiper overflow-hidden bg-white"
        spaceBetween={60}
      >
        {clientsArray?.map(({ id, src, alt }) => (
          <SwiperSlide key={id} className="flex justify-center items-center ">
            <Image
              src={src}
              alt={alt}
              width={235}
              className="px-[6.302vw] py-[7.813vw] 3xl:px-[120px] 3xl:py-[150px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Clients;
