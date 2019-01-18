import React from 'react';
import Login from '../Login/Login';

const authenticate = App =>
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state ={
                isLoggedIn: false
            }
        }

        login = event => {
            this.setState({isLoggedIn: true})
        }

        changeHandler = event => {
            this.setState({username: event.target.value})
        }

        render() {
            return (
                this.state.isLoggedIn === true ? <App username={this.state.username} /> : <Login login={this.login} change={this.changeHandler} />
            )
        }
    };


export default authenticate;