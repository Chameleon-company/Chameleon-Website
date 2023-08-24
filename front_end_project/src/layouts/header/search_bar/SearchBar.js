import React from 'react';
import { FaSearch } from 'react-icons/fa';

import './SearchBar.css';

export const SearchBar = ({ value, onChange }) => {
  return (
    <div className="search-input-container">
      <div className="search-icon">
        <FaSearch />
      </div>
      <input
        type="text"
        className="search-input"
        placeholder="Search"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}