import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class SearchBar extends Component {
  render(){
    return(
      <div className = "input-group">
          <input className="form-control"/>
          <div className="input-group-btn">
            <button className="btn" > Search </button>
          </div>
      </div>
    );
  }
}
