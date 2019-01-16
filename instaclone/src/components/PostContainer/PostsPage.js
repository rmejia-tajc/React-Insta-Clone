import React, { Component } from 'react';
import './Post.css';
import dummyData from '../../dummy-data';
import SearchBarContainer from '../SearchBar/SearchBarContainer';
import PostContainer from './PostContainer';

class PostsPage extends Component {
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

export default PostsPage;
