import React from "react";

class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h2>Balls:{this.props.balls}</h2>
        <h2>Strikes:{this.props.strikes}</h2>
      </>
    );
  }
}

export default Display;