import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";

//Functional Components Info:
//Use as much as possible
//Don't have to use "this"
//Solution without using state
//Mainly responsible for the UI
//Stateless/Dumb/Presentational

function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
    </div>
  );
}

export default App;
