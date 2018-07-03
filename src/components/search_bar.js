import React, { Component } from "react";
//import PropTypes from "prop-types";

class SearchBar extends Component {
  static propTypes = {};

  static defaultProps = {};
  render() {
    return (
      <form className="input-group">
        <input />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}
export default SearchBar;
