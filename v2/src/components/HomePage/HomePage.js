import React, { Component } from "react";
import Button from "react-bootstrap/Button";
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
        <h1>
          <strong>Hugh Bromund</strong>
        </h1>
        <h3>
          I{" "}
          <TextLoop>
            <span>Build Awesome Websites</span>
            <span>Learn at Purdue University</span>
            <span>Hack</span>
          </TextLoop>
        </h3>
        <Button variant="success">About Me</Button>
      </div>
    );
  }
}
