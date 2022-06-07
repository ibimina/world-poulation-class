import React from "react";
import Country from "./Country";

class Main extends React.Component {
//   state = {};
  render() {
    return (
      <ul>
        {/* <div className="country">{this.props.country}</div>
        <div className="length">{this.props.showLength}</div>
        <div className="population"> {this.props.population}</div> */}
        <Country count={this.props.tenHighestPopulation} />
      </ul>
    );
  }
}

export default Main;
