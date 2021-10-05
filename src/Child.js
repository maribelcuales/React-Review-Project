import React from 'react';

class Child extends React.Component {
  componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
  }
  render() {
    return (
      <h1>This is the Header.</h1>
    );
  }
}

export default Child;