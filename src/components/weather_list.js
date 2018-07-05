import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { LineChart, Line } from "recharts";

class WeatherList extends Component {
  static propTypes = { weather: PropTypes.array };

  //static defaultProps = {}

  renderWeather(cityData) {
    const name = cityData.city.name;

    const temps = cityData.list.map(listData => listData.main.temp);

    console.log(temps);

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <LineChart width={120} height={180} data={temps}>
            <Line type="monotone" stroke="#8884d8" />
          </LineChart>
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
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
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
