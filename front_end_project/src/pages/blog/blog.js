import React from 'react';
import Wrapper from '../../components/shared/Wrapper';
import InfoCard from './InfoCard';
import BlogJSON from '../../constants/Blog.json';
import Footer from '../../components/blog/Footer';
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
        <div className='h-full flex items-center '>
          <input
            type='text'
            placeholder='Your email address here'
            className=' md:w-[20rem] h-full rounded-sm py-3 pl-2 text-black'
          />
          <button className='bg-[#054a83] px-4 rounded-sm text-white h-full py-3'>
            Subcribe
          </button>
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

      <Footer />
    </Wrapper>
  );
};
export default Blog;
