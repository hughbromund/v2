import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import TextLoop from "react-text-loop";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./HomePage.module.css";

export default class HomePage extends Component {
  render() {
    return (
      <div className={classes.wrapper}>
        <Row>
          <Col sm>
            <span style={{ float: "right" }}>
              <div className={classes.picture}>
                <Image
                  fluid
                  rounded
                  src={require("../../assets/hugh.JPG")}
                ></Image>
              </div>
            </span>
          </Col>
          <Col sm>
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
                <span>build awesome websites</span>
                <span>go to school at Purdue University</span>
                <span>compete at hackathons</span>
                <span>teach programming</span>
              </TextLoop>
            </h3>
            <br />
            <Button variant="success">About Me</Button>
          </Col>
        </Row>
      </div>
    );
  }
}
