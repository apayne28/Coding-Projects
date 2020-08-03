import React, { Component } from "react";

//Class Component Info:
//More feature rich
//Maintain their own private data - state
//Complex UI logic
//Provide lifecyle hooks Note: This was before Hooks were a thing, so it's not really exclusive anymore?

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome visitor",
    };
  }

  changeMessage() {
    this.setState({
      message: "Thank you for subscribing",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}

export default Message;
