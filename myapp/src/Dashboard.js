import React from "react";
import Display from "./Display";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balls: 0,
      strikes: 0
    };
  }

  incrementBalls = e => {
    if (this.state.balls === 3) {
      this.setState({
        balls: 0,
        strikes: 0
      });
    } else {
      this.setState(prevstate => ({
        balls: prevstate.balls + 1
      }));
    }
  };

  incrementStrikes = e => {
    if (this.state.strikes === 2) {
      this.setState({
        balls: 0,
        strikes: 0
      });
    } else {
      this.setState({
        strikes: this.state.strikes + 1
      });
    }
  };

  incrementFouls = e => {
    if (this.state.strikes < 2) {
      this.setState({
        strikes: this.state.strikes + 1
      });
    }
  };

  incrementHit = e => {
    this.setState({
      balls: 0,
      strikes: 0
    });
  };

  render() {
    return (
      <>
        <Display balls={this.state.balls} strikes={this.state.strikes} />
        <button onClick={this.incrementStrikes}>Strikes</button>
        <button onClick={this.incrementBalls}>Balls</button>
        <button onClick={this.incrementFouls}>Fouls</button>
        <button onClick={this.incrementHit}>Hits</button>
      </>
    );
  }
}

export default Dashboard;
