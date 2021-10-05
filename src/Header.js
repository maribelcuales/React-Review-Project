import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoriteColor: "red"};
  }
  //static getDerivedStateFromProps(props, state) {
  //  return {favoriteColor: props.favCol};
  //}
  changeColor = () => {
    this.setState({favoriteColor: "blue"});
  }
  render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoriteColor}</h1>
      <button type="button" onClick={this.changeColor}>Change Color</button>
      </div>
    );
  }
}

export default Header;