import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import slide1 from "../assets/home/slide1.jpg";
import slide2 from "../assets/home/slide2.jpg";
import slide3 from "../assets/home/slide3.jpg";
import slide4 from "../assets/home/slide4.jpg";
import slide5 from "../assets/home/slide5.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const CategorySlider = () => {
  return (
    <div className="px-28 pb-10">
      {/* for heading text */}
      <div className="text-center my-20 space-y-5">
        <p>---From 11:00am to 10:00pm---</p>
        <h1 className="text-5xl font-interFont border-t-gray-200 border-t-4 border-b-4 p-4 w-1/3 mx-auto">
          ORDER ONLINE
        </h1>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper w-full h-full"
      >
        <SwiperSlide className="relative">
          <img src={slide1} alt="" />
          <h1 className="text-4xl absolute bottom-4 left-16 uppercase text-center text-white  font-cinzelFont">
            Salad
          </h1>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={slide2} alt="" />
          <h1 className="text-4xl absolute bottom-4 left-16 uppercase text-center text-white  font-cinzelFont">
          Soups
          </h1>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={slide3} alt="" />
          <h1 className="text-4xl absolute bottom-4 left-16 uppercase text-center text-white  font-cinzelFont">
          pizzas
          </h1>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={slide1} alt="" />
          <h1 className="text-4xl absolute bottom-4 left-16 uppercase text-center text-white  font-cinzelFont">
            Salad
          </h1>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={slide4} alt="" />
          <h1 className="text-4xl absolute bottom-4 left-16 uppercase text-center text-white  font-cinzelFont">
          desserts
          </h1>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={slide5} alt="" />
          <h1 className="text-4xl absolute bottom-4 left-16 uppercase text-center text-white  font-cinzelFont">
            Salad
          </h1>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={slide2} alt="" />
          <h1 className="text-4xl absolute bottom-4 left-16 uppercase text-center text-white  font-cinzelFont">
          Soups
          </h1>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={slide3} alt="" />
          <h1 className="text-4xl absolute bottom-4 left-16 uppercase text-center text-white  font-cinzelFont">
          pizzas
          </h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CategorySlider;
