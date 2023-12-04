import React from 'react';
import SearchBar from './SearchBar';

const FilterBar = (props) => {
  return (
    <div className="flex flex-row justify-center gap-2 flex-wrap">

      <SearchBar />
      <div className="flex flex-row justify-center gap-2 flex-wrap ">
        <select className='appearance-none w-auto h-16 rounded-full border-solid border-2 border-gray-300 text-lg [text-align-last:center]  px-12'>
            <option disabled selected hidden value="*">Category ▾</option>
            <option value="news">All</option>
            <option value="news">News</option>
            <option value="insight">Insight</option>
            <option value="opinion">Opinion</option>
        </select>
        <select className='appearance-none w-auto h-16 rounded-full border-solid border-2 border-gray-300 text-lg [text-align-last:center]  px-12'>
          <option disabled selected value="*">Sort ▾</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="popular">Popular</option>
        </select>
      </div>
      
        


  
    </div>
      
  );
};

export default FilterBar;