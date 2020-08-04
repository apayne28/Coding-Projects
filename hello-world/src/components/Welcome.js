import React, { Component } from "react";

//Class Component Info:
//More feature rich
//Maintain their own private data - state
//Complex UI logic
//Provide lifecyle hooks Note: This was before Hooks were a thing, so it's not really exclusive anymore?

class Welcome extends Component {
  render() {
    const { name, heroName } = this.props;
    //const {state1, state2} = this.state
    return (
      <h1>
        Welcome {name} a.k.a {heroName}
      </h1>
    );
  }
}

export default Welcome;
