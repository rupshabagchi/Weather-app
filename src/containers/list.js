import React,{ Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GMap from './gmaps';

class List extends Component {

  renderWeather(data) {
    const name = data.city.name;
    console.log(data.list[0])
    const temp_list = data.list.map(weather => weather.main.temp );
    const pressure_list = data.list.map(weather => weather.main.pressure );
    const humidity_list = data.list.map(weather => weather.main.humidity );

    return(
        <tr key={name}>
          <td> <GMap /> </td>
          <td>
            <Chart data={temp_list} color="red" units="K" />
          </td>
          <td>
            <Chart data={pressure_list} color="black" units="hPa" />
          </td>
          <td>
            <Chart data={humidity_list} color="blue" units="%" />
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
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
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
