import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
    width: 200px;
    display: flex;
    justify-content: space-around;
`
const Img = styled.img`
    height: 32px;
`

function SearchBarLogo(props) {
    return (
        <Div className="logos">
            <Img className="logo" src="img/instagram-logo-black.png" alt="logo"/>
            <Img className="logo" src="img/instagram-logo-text-black.png" alt="logo"/>
        </Div>
    );
}


export default SearchBarLogo;
