import React from "react";

class MyCar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ferrari",
      model: "365 GTB/4 Daytona",
      color: "red",
      year: 1968
    };
  }
  changeColor = () => {
    this.setState({ color: "blue" });
  };
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color} {this.state.model} from {this.state.year}.
        </p>
        <button type="button" onClick={this.changeColor}>
          Change Color
        </button>
      </div>
    );
  }
}

export default MyCar;
