import React from 'react';
import './Login.css';
import styled from 'styled-components';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`

const Login = props => {

    return (
        <div className="loginForm">
            <form onSubmit={props.login}>
                <input
                    placeholder ="User"
                    onChange={props.change}
                />
                <input
                    placeholder="Password"
                />
                <Button>Login</Button>
            </form>
        </div>
    )
}


export default Login