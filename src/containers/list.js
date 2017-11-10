import React,{ Component } from 'react';
import { connect } from 'react-redux';

class List extends Component {

  renderWeather(event) {
    const name = event.city.name;
    return(
        <tr key={name}>
          <td>
            {name}
          </td>
        </tr>
    );
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
            {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({weather}) {
  return { weather};
}

export default connect(mapStateToProps)(List);
