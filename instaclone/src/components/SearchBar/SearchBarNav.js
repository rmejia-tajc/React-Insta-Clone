import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
    width: 200px;
    display: flex;
    justify-content: space-around;
`

const I = styled.i`
    font-size: 2rem;
`


function SearchBarNav(props) {
    return (
        <Div className="logos">
            <I className="far fa-compass"></I>
            <I className="far fa-heart"></I>
            <I className="far fa-user"></I>
        </Div>
    );
}


export default SearchBarNav;
