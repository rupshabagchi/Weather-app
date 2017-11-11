import React,{ Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class List extends Component {

  renderWeather(data) {
    const name = data.city.name;
    console.log(data.list[0])
    const temp_list = data.list.map(weather => weather.main.temp );
    const pressure_list = data.list.map(weather => weather.main.pressure );
    const humidity_list = data.list.map(weather => weather.main.humidity );

    return(
        <tr key={name}>
          <td> {name} </td>
          <td>
            <Chart data={temp_list} color="orange" />
          </td>
          <td>
            <Chart data={pressure_list} color="black" />
          </td>
          <td>
            <Chart data={humidity_list} color="blue" />
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
