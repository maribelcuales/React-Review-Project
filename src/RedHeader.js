import React from 'react';

class RedHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoriteColor: "red"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoriteColor: "yellow"})
    }, 1000)
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML = "Before the update, the favorite color was " + prevState.favoriteColor;
  }
  componentDidUpdate() {
    document.getElementById("div2").innerHTML = "The updated favorite color is " + this.state.favoriteColor;
  }
  render() {
    return(
      <div>
        <h1>My Favorite Color is {this.state.favoriteColor}</h1>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    );
  }
}

export default RedHeader;