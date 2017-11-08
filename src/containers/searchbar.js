import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = { searchterm: ''}
  }

  onInputChange(searchterm){
    this.setState({searchterm})
  }

  render(){
    return(
      <form className = "input-group">
          <input
          value={this.state.searchterm}
          onChange = {event => this.onInputChange(event.target.value)}
          className="form-control"
          placeholder="Type Here"
          />
          <span className="input-group-btn">
            <button
            className="btn">
            Search
            </button>
          </span>
      </form>
    );
  }
}
