import React from 'react';

// Create a Class Component with a constructor function and add a color property

// extends React.Component creates an inheritance for this component giving it access to React.Component's functions     
class Car extends React.Component {
  // constructor() is called when a component is initiated; also initiates the component's properties 
  constructor() {
    // super() executes the parent component's constructor function allowing this component access to all the parent component's functions  
    super();
    // component properties are kept in an object called state   
    this.state = {color: "red"};
  }
  // render method returns HTML 
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