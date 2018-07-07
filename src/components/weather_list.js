import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Chart from "./chart";

class WeatherList extends Component {
  static propTypes = { weather: PropTypes.array };

  //static defaultProps = {}

  renderWeather(cityData) {
    const name = cityData.city.name;

    const mainData = cityData.list.map(listData => listData.main);

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Chart data={mainData} dataKey="temp" color="red" units="K" />
        </td>
        <td>
          <Chart data={mainData} dataKey="pressure" color="blue" units="hPa" />
        </td>
        <td>
          <Chart data={mainData} dataKey="humidity" color="green" units="%" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="WeatherList table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
