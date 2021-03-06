import React, { Component } from "react";
import Search from "./Search";
import Sort from "./Sort";

class Control extends Component {
  render() {
    return (
      <div>
        <div className="row mt-15">
          <Search onSearch = {this.props.onSearch} ></Search>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <Sort></Sort>
          </div>
        </div>
      </div>
    );
  }
}

export default Control;
