import { render } from "@testing-library/react";
import React, { Component } from "react";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Hello from React</h1>
        <h2>Goodbye</h2>
      </div>
    );
  }
}

export default App;
