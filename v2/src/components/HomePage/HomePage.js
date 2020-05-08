import React, { Component } from "react";
import TextLoop from "react-text-loop";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <h4>
          Hi there{" "}
          <span role="img" aria-label="waving hand">
            👋
          </span>
          , I'm
        </h4>
        <h1>Hugh Bromund </h1>
        <h3>
          I{" "}
          <TextLoop>
            <span>Build Awesome Websites</span>
            <span>Learn at Purdue University</span>
            <span>Hack</span>
          </TextLoop>
        </h3>
      </div>
    );
  }
}
