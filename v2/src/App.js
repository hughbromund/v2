import React, { Component } from "react";
import classes from "./App.module.css";
import "./App.scss";
import NavigationBar from "./components/NavigationBar/NavigationBar";
// import logo from './logo.svg';
import Routes from "./routing/Routes";
// import { render } from "@testing-library/react";

class App extends Component {
  render() {
    return (
      <div>
          <div className={classes.navContainer}>
            <NavigationBar />
          </div>
          <div className={classes.bodyDiv}>
            <Routes />
          </div>
      </div>
    );
  }
}

export default App;
