import React, { Component } from "react";
import classes from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import NavigationBar from "./components/NavigationBar/NavigationBar";
// import logo from './logo.svg';
import Routes from "./routing/Routes";
// import { render } from "@testing-library/react";

// Initialization of Fontawesome Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);

// Color Pallet https://colorhunt.co/palette/15697

class App extends Component {
  render() {
    return (
      <div className={classes.container}>
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
