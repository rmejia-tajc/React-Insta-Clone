import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBarContainer from './components/SearchBar/SearchBarContainer';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: [],
      searchTerm: '',
    };
  }

  componentDidMount() {
    this.setState({dummyData: dummyData});
  }

  searchFilter = event => {
    event.preventDefault();

    if (!this.state.newSearch) {
      this.setState({
        dummyData: dummyData,
      });
    } else {
      this.setState({
        dummyData: this.state.dummyData.filter(post => {
          return post.username === this.state.newSearch;
        }),
      });
    }
  };

  changeHandler = (event) => {
    this.setState({newSearch: event.target.value});
    console.log(event.target.value);
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
