import React from 'react';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: true};
  }
  delHeader = () => {
    this.setState({show: false});
  }
  render() {
    let myHeader;
    if (this.state.show) {
      myHeader = <Child />;
    };
    return (
      <div>
        {myHeader}
        <button type="button" onClick={this.delHeader}>Delete Header</button>
      </div>
    );
  }
}

export default Container;