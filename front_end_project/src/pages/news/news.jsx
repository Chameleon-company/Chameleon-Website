import React, { Component } from "react";
import SwiperNews from "./Swiper";
import articleList from "./articles";

import "./styles.css";
import SearchButton from "./images/SearchButton.png"
class News extends Component {
  constructor(props) {
    super(props);

    // Initialize the state
  }

  const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: articleList,
      loading: false,
    };

    // Debounce the handleScroll function to improve performance
    this.debouncedHandleScroll = debounce(this.handleScroll, 200);
    window.addEventListener("scroll", this.debouncedHandleScroll);
  }

  componentWillUnmount() {
    // Remove the debounced event listener when the component is unmounted
    window.removeEventListener("scroll", this.debouncedHandleScroll);
  }

  handleScroll = () => {
    const { loading } = this.state;
    const scrollThreshold = document.body.offsetHeight - 0.8 * window.innerHeight;

    if (!loading && window.scrollY >= scrollThreshold) {
      this.loadMoreArticles();
    }
  };

  loadMoreArticles = () => {
    // Simulate loading by setting loading to true
    this.setState({ loading: true });

    setTimeout(() => {
      // Simulating loading 5 articles at a time
      const repeatedArticles = Array.from({ length: 5 }, () => this.state.articles).flat();

      this.setState((prevState) => ({
        articles: [...prevState.articles, ...repeatedArticles],
        loading: false,
      }));
    }, 20); // Simulating a delay
  };

  render() {
    return (
      <main className="bg-[#4fa373] py-10 ">
        {/* Main container with a green background and padding */}
        <h1 className="text-[27px] font-bold text-center text-black">
          Latest News
        </h1>
        {/* Header with bold, centered, and black text */}
        <div className="bg-[#deece3] w-full py-6 mt-4 flex flex-col gap-y-2 min-[400px]:flex-row flex-shrink justify-center items-center gap-3 px-[10px]">
          {/* Container with light blue background, flex layout, and padding */}
          <div className="flex relative">
            {/* Flex container with relative positioning */}
            <img
              src={SearchButton}
              className="h-[25px] mt-2 absolute ml-2 object-center"
              alt="searchBar"
            />
            {/* Search icon with absolute positioning */}
            <input
              type="text"
              className="py-2 placeholder:text-black shrink outline-none pl-10  w-40 md:w-52"
              placeholder="Search News"
            />
            {/* Input field with padding, placeholder styling, and width based on screen size */}
            <button className="bg-sky-600 py-2 px-3 text-white border">
              Search
            </button>
            {/* Search button with sky blue background, white text, and border */}
          </div>

          <select className="flex relative justify-center items-center gap-2 bg-white text-[18px]  px-4 py-2">
            {/* Dropdown selection with white background and styling */}
            <option value="" className="">
              Year
              {/* Default option with text "Year" */}
              {/* Arrow icon (commented out as it's not present in the code) */}
            </option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            {/* Options for the year dropdown */}
          </select>
        </div>
        {/* End of the search and dropdown container */}
        <div className=" grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start justify-center mt-10 gap-3 gap-y-5 overflow-hidden md:grid hidden px-[20px]">
          {/* Container for grid layout with specified column sizes, spacing, and hidden on medium screens */}
          {articleList.map((item) => (
            <div
              className="flex flex-col justify-center items-center "
              key={item.key}
            >
              {/* Individual news item container */}
              <h2 className="text-[24px] font-bold text-center text-black uppercase">
                {item.title}
              </h2>
              {/* News title with specific styling */}
              <img
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
          ))}
        </div>
        {/* End of the news grid layout container */}
        <div className="px-[10px] md:hidden block">
          <SwiperNews />
        </div>
        {/* Container for mobile view with a SwiperNews component */}

      </main>
    );
  }
}

export default News;
