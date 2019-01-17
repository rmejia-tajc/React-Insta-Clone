import React, { Component } from 'react';
import './App.css';

import PostsPage from './components/PostContainer/PostsPage';
import authenticate from './components/authentication/authenticate'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username
    }
  };


  componentDidMount() {
    localStorage.setItem("username", this.state.username)
  }


  render() {
    return (
      <div className="App">

        <PostsPage />

      </div>
    );
  }
}


export default authenticate(App);
