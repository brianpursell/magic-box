import React, { Component } from "react";
import Routes from "./Routes.jsx";
import NavBar from "./NavBar.jsx";
import Login from "./Login.jsx";
import "./styles.scss";

class App extends Component {
  state = {
    authenticated: true
  };

  render = () => {
    return (
      <div className="full height app">
        <NavBar />
        <div className="container">
          {this.state.authenticated ? <Routes /> : <Login />}
        </div>
      </div>
    );
  };
}

export default App;
