import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Slider.scss";

export default function Slider({ data }) {
  return (
    <div className="welcomeSwiperWrapper">
      <Swiper
        slidesPerView={3}
        spaceBetween={23}
        centeredSlides={true}
        pagination={{
          type: "fraction",
          clickable: true,
        }}
        navigation={true}
        loop={true}
        modules={[Pagination, Navigation]}
        className="welcomeSwiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
