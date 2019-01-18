import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';


const Input = styled.input`
    text-align: center;
`


function SearchBarInput(props) {
    return (
        <form onSubmit={props.filter}>
            <Input
                onChange={props.change}
                placeholder="Search"
            />
        </form>
    );
}


export default SearchBarInput;
