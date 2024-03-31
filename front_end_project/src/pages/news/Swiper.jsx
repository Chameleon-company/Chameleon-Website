import React from "react";
import articleList from "./articles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
export default function SwiperNews () {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span className="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      {/* Swiper component for mobile view with navigation and pagination */}
      <Swiper
        navigation={true}
        pagination={pagination}
        modules={[Navigation, Pagination]}
        className="mySwiper md:hidden block mt-10 relative"
        style={{ width: "100%" }}
      >
        {articleList.map((index, item) => (
          <SwiperSlide className=" w-[100%]" key={item.key}>
            {/* Swiper slide for each news item */}
            <div className=" max-w-[360px] mx-auto flex flex-col justify-center items-center">
              {/* Container for each news item with maximum width, centered, and flex layout */}
              <h2 className="text-[24px] font-bold text-center text-black uppercase">
                {item.title}
              </h2>
              {/* News title with specific styling */}
              <img
                alt={index}
                src={item.image}
                className="mt-2 w-[360px] h-[180px] border-white border-y-[16px] border-x-[20px]"
              />
              {/* Image with specific dimensions and border styling */}
              <p className="text-black font-medium text-[15px] max-w-[360px] pt-2 text-left hidetext">
                {item.preview}
              </p>
              {/* News preview text with specific styling */}
              <h3 className="text-[14px] text-black font-bold text-left max-w-[360px] w-full">
                {item.date}
              </h3>
              {/* News date with specific styling */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
