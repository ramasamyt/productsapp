import React from 'react';

const SearchBox = ({searchfiled, searchChange}) => {
    // pa2 - padding 2
    // bg - background
    return (
        <div className='pa2'> 
        <input 
        className='pa3 ba b--green bg-lightest-blue'
        type='search' 
        placeholder='search products here' 
        onChange={searchChange}
        />
        </div>

    );
}

export default SearchBox;