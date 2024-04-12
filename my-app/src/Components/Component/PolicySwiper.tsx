import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore from "swiper";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface PolicySwiperProps {
  imgURLs: string[];
}

const PolicySwiper: React.FC<PolicySwiperProps> = ({ imgURLs }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <div className="relative">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper: SwiperCore) => console.log(swiper)}
        pagination={{
          el: ".swiper-custom-pagination",
          clickable: true,
        }}
        className="w-full aspect-[16/11]  rounded-md"
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {imgURLs.map((url, index) => (
          <SwiperSlide
            key={index}
            style={{
              backgroundImage: `url(${url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-custom-pagination" />
      <div className="swiper-button-next absolute top-1/2 right-2 transform -translate-y-1/2 z-10 text-white text-4xl cursor-pointer">
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
      <div className="swiper-button-prev absolute top-1/2 left-2 transform -translate-y-1/2 z-10 text-white text-4xl cursor-pointer">
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
    </div>
  );
};

export default PolicySwiper;
