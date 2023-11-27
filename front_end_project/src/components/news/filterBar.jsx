import React from 'react';

const FilterBar = (props) => {
  return (
    <div className="flex flex-row justify-center ">
      <select className='appearance-none w-auto h-12 rounded-full border-solid border-2 border-gray-300 mx-1 text-lg [text-align-last:center]  px-12'>
        <option disabled selected value="*">Category ▾</option>
        <option value="news">News</option>
        <option value="insight">Insight</option>
        <option value="opinion">Opinion</option>
      </select>
      <select className='appearance-none w-auto h-12 rounded-full border-solid border-2 border-gray-300 mx-1 text-lg [text-align-last:center]  px-12'>
        <option disabled selected value="*">Sort ▾</option>
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="popular">Popular</option>
      </select>
        


  
    </div>
      
  );
};

export default FilterBar;