import React from 'react';

const FilterBar = (props) => {
  return (
    <div className="flex flex-row justify-center flex-wrap">

      <input type="text" placeholder="Search" className='appearance-none w-auto sm:w-max h-16 rounded-full border-solid border-2 border-gray-300 placeholder-black mx-1 text-lg px-12 my-2' />
      <div>
        <select className='appearance-none w-auto h-16 rounded-full border-solid border-2 border-gray-300 mx-1 text-lg [text-align-last:center]  px-12 my-2'>
          <option disabled selected value="*">Category ▾</option>
          <option value="news">All</option>
          <option value="news">News</option>
          <option value="insight">Insight</option>
          <option value="opinion">Opinion</option>
        </select>
        <select className='appearance-none w-auto h-16 rounded-full border-solid border-2 border-gray-300 mx-1 text-lg [text-align-last:center]  px-12 my-2'>
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