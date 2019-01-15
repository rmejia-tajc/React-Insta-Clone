import React from 'react';
import './SearchBar.css'
// import PropTypes from 'prop-types';
import SearchBarLogo from './SearchBarLogo';
import SearchBarInput from './SearchBarInput'
import SearchBarNav from './SearchBarNav'


function SearchBarContainer(props) {
    return (
        <div className="searchBar">
            <SearchBarLogo />
            <SearchBarInput />
            <SearchBarNav />
        </div>
    );
}









export default SearchBarContainer;
