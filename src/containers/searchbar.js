import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = { searchterm: ''}
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
    this.setState({searchterm:event.target.value})
  }

  onFormSubmit(event){
    event.preventDefault();
    this.props.getWeather(this.state.searchterm);
    this.setState({searchterm: ''});
  }

  render(){
    return(
      <form onSubmit={this.onFormSubmit} className = "input-group">
          <input
          value={this.state.searchterm}
          onChange = {this.onInputChange}
          className="form-control"
          placeholder="Type a city name and country code here to get a five day weather forecast from that city"
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


function mapDispatchToProps(dispatch) {
  return bindActionCreators({getWeather}, dispatch);
}

export default connect(null,mapDispatchToProps)(SearchBar);
