import React, { Component } from "react";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet name="Bruce" heroName="Batman">
          <p>This is children props</p>
        </Greet>
        <Greet name="Clark" heroName="Superman">
          <button>Action</button>
        </Greet>
        <Greet name="Diana" heroName="Wonder Woman" />

        <Welcome name="Bruce" heroName="Batman" />
        <Welcome name="Clark" heroName="Superman" />
        <Welcome name="Diana" heroName="Wonder Woman" />
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
