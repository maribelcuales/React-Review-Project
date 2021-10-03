import React from 'react';

// Create a constructor function and add a color property:
class Car extends React.Component { 
  constructor() {
    super();
    this.state = {color: "red"};
  }
  render() {
    return <h2>I am a {this.state.color} Car!</h2>;
  }
}

export default Car;


/**
function Car() {
  return <h2>Hi, I am a Car!</h2>

export default Car;
**/