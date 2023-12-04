import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Slider = ({ JSONDATA }) => {
  return (
    <Swiper
      className='max-w-full max-h-full'
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      // install Swiper modules
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
      {JSONDATA?.map(({ id, image, title, link }) => {
        return (
          <SwiperSlide key={id}>
            <div className='w-full h-full flex flex-col relative z-[10]'>
              <img
                src={image}
                alt={id}
                className='max-h-[480px] object-contain md:object-cover'
              />
            </div>
            <div className='absolute bottom-4 right-4 hidden md:flex flex-col justify-end items-end z-[99]'>
              <h1 className='text-white uppercase font-bold text-2xl'>
                {title}
              </h1>
              <Link
                to={link}
                className='bg-[#ffffff] px-2 py-2 font-bold text-md text-green-sage rounded-lg no-underline hover:underline text-green-emerald hover:text-green-emerald '>
                Learn More
              </Link>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
