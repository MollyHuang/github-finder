import { render } from "@testing-library/react";
import React, { Component } from "react";
import './App.css';
import Navbar from "./components/layout/Navbar";
import UserItem from "./components/users/UserItem";

class App extends Component {
  render() {

    return (
      <div className="app">
        <Navbar />
        <UserItem />
      </div>
    );
  }
}

export default App;
