import React from "react";
import SwiperNews from "./Swiper";
import articleList from "./articles";
import "./styles.css";
import SearchButton from "./images/SearchButton.png";
import Screen from '../../components/app/Screen';

function News() {
  return (
    <Screen>
      <main className="bg-[#4fa373] py-10 ">
        <h1 className="text-[27px] font-bold text-center text-black">
          Latest News
        </h1>
        <div className="bg-[#deece3] w-full py-6 mt-4 flex flex-col gap-y-2 min-[400px]:flex-row flex-shrink justify-center items-center gap-3 px-[10px]">
          <div className="flex relative">
            <img
              src={SearchButton}
              className="h-[25px] mt-2 absolute ml-2 object-center"
              alt="searchBar"
            />
            <input
              type="text"
              className="py-2 placeholder:text-black shrink outline-none pl-10  w-40 md:w-52"
              placeholder="Search News"
            />
            <button className="bg-sky-600 py-2 px-3 text-white border">
              Search
            </button>
          </div>
          <select className="flex relative justify-center items-center gap-2 bg-white text-[18px]  px-4 py-2">
            <option value="">Year</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
          </select>
        </div>
        <div className=" grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start justify-center mt-10 gap-3 gap-y-5 overflow-hidden md:grid hidden px-[20px]">
          {articleList.map((item, index) => (
            <div className="flex flex-col justify-center items-center" key={index}>
              <h2 className="text-[24px] font-bold text-center text-black uppercase">
                {item.title}
              </h2>
              <img
                alt={item.title}
                src={item.image}
                className="mt-2 w-[360px] h-[180px] border-white border-y-[16px] border-x-[20px]"
              />
              <p className="text-black font-medium text-[15px] max-w-[360px] pt-2 text-left hidetext">
                {item.preview}
              </p>
              <h3 className="text-[14px] text-black font-bold text-left max-w-[360px] w-full">
                {item.date}
              </h3>
            </div>
          ))}
        </div>
        <div className="px-[10px] md:hidden block">
          <SwiperNews />
        </div>
      </main>
    </Screen>
  );
}

export const newsSearchableContents = articleList.reduce((acc, article) => {
  return [...acc, article.title, article.preview, article.author];
}, []);

export default News;
