import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = { searchterm: ''}
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event){
    this.setState({searchterm:event.target.value})
  }

  onFormSubmit(event){
    event.preventDefault();
  }

  render(){
    return(
      <form onSubmit={this.onFormSubmit} className = "input-group">
          <input
          value={this.state.searchterm}
          onChange = {this.onInputChange}
          className="form-control"
          placeholder="Type a city name here to get a five day weather forecast from that city"
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
