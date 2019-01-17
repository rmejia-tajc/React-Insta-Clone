import React from 'react';
import './SearchBar.css'
// import PropTypes from 'prop-types';
import SearchBarLogo from './SearchBarLogo';
import SearchBarInput from './SearchBarInput'
import SearchBarNav from './SearchBarNav'
import styled from 'styled-components';


function SearchBarContainer(props) {
    return (
        <div className="searchBar">
            <SearchBarLogo />
            <SearchBarInput             
                filter={props.filter}
                change={props.change}
            />
            <SearchBarNav />
        </div>
    );
}









export default SearchBarContainer;
