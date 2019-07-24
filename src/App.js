import React, { Component } from "react";
import Header from "./component/header";
import Content from "./component/content";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
