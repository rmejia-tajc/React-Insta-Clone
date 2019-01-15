import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBarContainer from './components/SearchBar/SearchBarContainer';
import PostContainer from './components/PostContainer/PostContainer'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData: dummyData
    };
  }


  render() {
    return (
      <div className="App">

        <SearchBarContainer />
        <PostContainer 
          postList={this.state.dummyData}
        />

      </div>
    );
  }
}

export default App;
