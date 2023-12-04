import { useState } from 'react';


function SearchBar({value}) {
    return (
        <input type="text" placeholder="Search" value = {value} className='appearance-none w-auto sm:w-max h-16 rounded-full border-solid border-2 border-gray-300 placeholder-black text-lg px-12' />
    )
}

export default SearchBar;