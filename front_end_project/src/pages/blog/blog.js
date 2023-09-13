import React from 'react';
import Wrapper from '../../components/shared/Wrapper';
import InfoCard from './InfoCard';
import BlogJSON from '../../constants/Blog.json';
<<<<<<< Updated upstream
import Footer from '../../components/blog/Footer';
=======
>>>>>>> Stashed changes
const Blog = () => {
  return (
    <Wrapper id='#blog' Style='w-full h-[100vh-80px]'>
      {/* Add Breadcrumb here */}
      <div className='w-full mt-4'>
        <h1 className={`text-center font-bold uppercase text-3xl `}>
          Latest News
        </h1>
        {/* Search Section Here */}
        <div className='w-full gap-3 md:gap-0 px-2 grid lg:grid-cols-3 md:grid-cols-2 mt-4 '>
          {BlogJSON.news?.map((item, idx) => {
            const { title, img, date, shortInfo } = item;
            return (
              <InfoCard
                key={idx}
                title={title}
                img={img}
                date={date}
                shortInfo={shortInfo}
              />
            );
          })}
        </div>
        {/* Pagination(Sroll to ability here) */}
      </div>

      <div className='w-full my-4 flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center bg-green-emerald px-16 py-3'>
        <h1 className='uppercase text-white'>get updates</h1>
<<<<<<< Updated upstream
        <div className='h-full flex items-center '>
=======
        <div className='h-full flex items-center ' >
>>>>>>> Stashed changes
          <input
            type='text'
            placeholder='Your email address here'
            className=' md:w-[20rem] h-full rounded-sm py-3 pl-2 text-black'
          />
<<<<<<< Updated upstream
          <button className='bg-[#054a83] px-4 rounded-sm text-white h-full py-3'>
            Subcribe
          </button>
=======
          <button className='bg-[#054a83] px-4 rounded-sm text-white h-full py-3'>Subcribe</button>
>>>>>>> Stashed changes
        </div>
      </div>

      <div className='w-full mt-4'>
        <h1 className={`text-center font-bold uppercase text-3xl `}>
          Latest Stories
        </h1>
        {/* Search Section Here */}
        <div className='w-full gap-3 md:gap-0 px-2 rounded-lg grid lg:grid-cols-3 md:grid-cols-2 mt-4 '>
          {BlogJSON.stories?.map((item, idx) => {
            const { title, img, date, shortInfo } = item;
            return (
              <InfoCard
                key={idx}
                title={title}
                img={img}
                date={date}
                shortInfo={shortInfo}
              />
            );
          })}
        </div>
        {/* Pagination(Sroll to ability here) */}
      </div>

<<<<<<< Updated upstream
      <Footer />
=======
      <div className="w-full h-full bg-blue py-2 px-4">
        <div className="grid md:grid-cols-2 ">
          <div className="w-full h-full flex items-center">
            <div className="w-[100px] h-[100px]">
              <img
                src="/AboutUs/logo.png"
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-full h-full flex flex-col justify-start items-start">
              <div className="flex  md:justify-start justify-center">
                <img
                  src="/AboutUs/insta.png"
                  alt=""
                  className="w-[40px] h-[40px] object-contain rounded-md"
                />
                <img
                  src="/AboutUs/facebook.png"
                  alt=""
                  className="w-[40px] h-[40px] object-contain rounded-md"
                />
                <img
                  src="/AboutUs/twitter.png"
                  alt=""
                  className="w-[40px] h-[40px] object-contain rounded-md"
                />
                <img
                  src="/AboutUs/Mail.png"
                  alt=""
                  className="w-[40px] h-[40px] object-contain rounded-md"
                />
              </div>
              <div>
                <h1 className=" text-2xl text-white flex md:justify-start justify-center">
                  &copy;2023 Copyright reserved by Chameleon
                </h1>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex justify-between items-center">
            <div className="w-full h-full pt-3 flex flex-col justify-start items-start font-semibold text-white">
              <div>
                <h1 className="text-xl text-center mb-2">Contact Us</h1>
                <p className="text-lg text-center">PH: 03 59756586</p>
                <p className="text-lg text-center">E:info@chameleon.com</p>
              </div>
            </div>
            <div className="w-[100px] h-[100px]">
              <img
                src="/AboutUs/deakin.png"
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
>>>>>>> Stashed changes
    </Wrapper>
  );
};
export default Blog;
