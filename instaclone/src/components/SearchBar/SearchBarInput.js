import React from 'react';
// import PropTypes from 'prop-types';


function SearchBarInput(props) {
    return (
        <form onSubmit={props.filter}>
            <input
                onChange={props.change}
                placeholder="Search"
            />
        </form>
    );
}


export default SearchBarInput;
