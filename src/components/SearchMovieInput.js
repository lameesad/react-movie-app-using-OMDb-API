import React from 'react';
import '../styles/search.css';


const SearchMovieInput = ({ handleSearch }) => {
    return (
        <div className='input-wrapper'>
            <input
                className='search'
                placeholder='Search for a movie'
                onChange={handleSearch}
            />
        </div>
    );
};

export default SearchMovieInput;