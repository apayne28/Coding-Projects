import React, { Component } from "react";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";

class App extends Component {
  render() {
    return (
      <div className="App">
        <EventBind />
        {/* <FunctionClick /> */}
        {/* <ClassClick /> */}
        {/* <Counter /> */}
        {/* <Message /> */}
        {/* <Greet name="Bruce" heroName="Batman">
          <p>This is children props</p>
        </Greet>
        <Greet name="Clark" heroName="Superman">
          <button>Action</button>
        </Greet> */}
        {/* <Greet name="Diana" heroName="Wonder Woman" /> */}

        {/* <Welcome name="Bruce" heroName="Batman" /> */}
        {/* <Welcome name="Clark" heroName="Superman" />
        <Welcome name="Diana" heroName="Wonder Woman" />  */}
      </div>
    );
  }
}

export default App;

//Functional Components Info:
//Use as much as possible
//Don't have to use "this"
//Solution without using state
//Mainly responsible for the UI
//Stateless/Dumb/Presentational

// function App() {
//   return (
//     <div className="App">
//       <Greet />
//       {/*<Welcome />*/}
//       {/*<Hello />*/}
//     </div>
//   );
// }
