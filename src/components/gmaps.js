import React, { Component } from 'react';

class GMap extends Component {
  componentDidMount(){
    new google.maps.Map(this.refs.map, {});
  }

  render(){
    return <div ref="map" />;
  }
}
