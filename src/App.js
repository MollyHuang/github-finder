import { render } from "@testing-library/react";
import React, { Component } from "react";
import './App.css';
import Navbar from "./components/layout/Navbar";

class App extends Component {
  render() {
    // const numbers = [1, 2, 3, 4]   // wrong type

    return (
      <div className="app">
        {/* <Navbar title={numbers} />   // wrong type */}
        <Navbar />
      </div>
    );
  }
}

export default App;
