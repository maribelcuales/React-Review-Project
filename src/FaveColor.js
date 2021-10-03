import React from 'react';

class FaveColor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoriteColor: "red"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoriteColor: "yellow"})
    }, 1000)
  }
  render() {
    return (
      <h1>My Favorite Color is {this.state.favoriteColor}</h1>
    );
  }
}

export default FaveColor;  