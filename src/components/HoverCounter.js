import React, { Component } from 'react'

import UpdatedComponent from "./withCounter";

 class HoverCounter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }

  incrementCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    const { count, incrementCount } = this.props;

    return (
      <div>
        <button onMouseOver={incrementCount}>Hovered {count} times</button>
      </div>
    )
  }
}

export default UpdatedComponent(HoverCounter)