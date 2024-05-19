import React from 'react';

// Functional component for rendering a filter bar
const FilterBar = (props) => {
  return (
    // Container div for the filter bar, using flex layout to align items horizontally and wrap them when needed
    <div className="flex flex-row justify-center flex-wrap">

      {/* Input field for search */}
      <input type="text" placeholder="Search" className='appearance-none w-auto sm:w-max h-16 rounded-full border-solid border-2 border-gray-300 placeholder-black mx-1 text-lg px-12 my-2' />
      
      {/* Dropdown for selecting category */}
      <div>
        <select className='appearance-none w-auto h-16 rounded-full border-solid border-2 border-gray-300 mx-1 text-lg [text-align-last:center]  px-12 my-2'>
          {/* Default option for category dropdown */}
          <option disabled selected value="*">Category ▾</option>
          {/* Options for different categories */}
          <option value="news">All</option>
          <option value="news">News</option>
          <option value="insight">Insight</option>
          <option value="opinion">Opinion</option>
        </select>
        
        {/* Dropdown for sorting options */}
        <select className='appearance-none w-auto h-16 rounded-full border-solid border-2 border-gray-300 mx-1 text-lg [text-align-last:center]  px-12 my-2'>
          {/* Default option for sorting dropdown */}
          <option disabled selected value="*">Sort ▾</option>
          {/* Options for sorting */}
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="popular">Popular</option>
        </select>
      </div>
  
    </div>
  );
};

export default FilterBar;
