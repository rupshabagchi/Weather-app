import React, { Component } from 'react';
import SearchBar from '../containers/searchbar';
import List from '../containers/list';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <List />
      </div>
    );
  }
}
