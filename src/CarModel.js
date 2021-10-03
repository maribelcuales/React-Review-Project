import React from 'react';

class CarModel extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h2>I am a {this.props.model} car!</h2>
  }
}

export default CarModel;
