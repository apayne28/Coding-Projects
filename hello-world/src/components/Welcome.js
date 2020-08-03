import React, { Component } from "react";

//Class Component Info:
//More feature rich
//Maintain their own private data - state
//Complex UI logic
//Provide lifecyle hooks Note: This was before Hooks were a thing, so it's not really exclusive anymore?

class Welcome extends Component {
  render() {
    return (
      <h1>
        Welcome {this.props.name} a.k.a {this.props.heroName}
      </h1>
    );
  }
}

export default Welcome;
