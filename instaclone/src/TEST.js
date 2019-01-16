import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBarContainer from './components/SearchBar/SearchBarContainer';
import PostContainer from './components/PostContainer/PostContainer'

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: []
    };
  }

  componentDidMount() {
    this.setState({dummyData: dummyData});
  }

  searchFilter = event => {
    event.preventDefault();
    this.setState({
      dummyData: this.state.dummyData.filter(item => {
        if (item.username === this.state.newSearch) {
          return item;
        }
      })
    })
  }

  changeHandler = (event) => {
    this.setState({newSearch: event.target.value})
  };  

  render() {
    return (
      <div className="App">

        <SearchBarContainer 
          filter={this.searchFilter}
          change={this.changeHandler}
          />
        <PostContainer 
          postList={this.state.dummyData}
        />

      </div>
    );
  }
}

export default App;
