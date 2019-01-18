import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import SearchBarLogo from './SearchBarLogo';
import SearchBarInput from './SearchBarInput'
import SearchBarNav from './SearchBarNav';


const Header = styled.header`
    background-color: white;
    border-bottom: 1px solid lightgrey;
    max-width: 1024px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
`

function SearchBarContainer(props) {
    return (
        <Header className="searchBar">
            <SearchBarLogo />
            <SearchBarInput             
                filter={props.filter}
                change={props.change}
            />
            <SearchBarNav />
        </Header>
    );
}









export default SearchBarContainer;
