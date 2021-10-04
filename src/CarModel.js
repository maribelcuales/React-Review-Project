import React from 'react';

class CarModel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoriteModel:"Ferrari"}
  }
  shouldComponentUpdate(){
    return false;
  }
  changeColor = () => {
    this.setState({favoriteModel: "Lamborgini"});
  }
  render() {
    return (
    <div>
      <h1>My Favorite Model is {this.state.favoriteModel}</h1>
      <button type="button" onClick={this.changeColor}>Change Model</button>
    </div>
    );
  }
}

export default CarModel;
