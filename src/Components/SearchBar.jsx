import React, { useState } from 'react';
import './SearchBar.css'; // Import your custom styles here

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [searchResults, setSearchResults] = useState('');

  const handleInputChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
    setIsActive(value.trim().length > 0);

    // Clear previous search results
    setSearchResults('');
  };

  const handleEnterKeyPress = (event) => {
    if (event.key === 'Enter') {
      enterTextHandler();
    } else if (event.key === 'Escape') {
      clearSearch();
    }
  };

  const enterTextHandler = () => {
    if (inputValue.trim().length === 0) {
      showNoResultsMessage();
    } else {
      showSearchResultMessage();
    }
    clearSearch();
  };

  const showNoResultsMessage = () => {
    setSearchResults(`Your search for <b>${inputValue}</b> did not match any results.`);
  };

  const showSearchResultMessage = () => {
    setSearchResults(`∞ ${inputValue} ∞`);
  };

  const clearSearch = () => {
    setInputValue('');
    setIsActive(false);
  };

  return (
    <div className="wrapper-search">
      <div className={`search-input ${isActive ? 'active' : ''}`}>
        <input
          type="text"
          placeholder="Type to search..."
          value={inputValue}
          onChange={handleInputChange}
          onKeyUp={handleEnterKeyPress}
        />
        <div className="icon1" onClick={enterTextHandler}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </div>
        {isActive && (
          <div className="autocom-box">
            <p dangerouslySetInnerHTML={{ __html: searchResults }} className="resaultSearch"></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
