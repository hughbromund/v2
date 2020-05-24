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
            <h3>
              Hi there{" "}
              <span role="img" aria-label="waving hand">
                👋
              </span>
              , I'm
            </h3>
            <h1>
              <strong>Hugh Bromund</strong>
            </h1>
            <h3>
              I{" "}
              <TextLoop
                children={[
                  "build awesome websites",
                  "go to school at Purdue University",
                  "compete at hackathons",
                  "teach programming",
                ]}
              ></TextLoop>
            </h3>
            <p style={{ "max-width": "30rem" }}>
              I'm a full-time student studying Computer Science at Purdue
              University. I have a passion for all things Computer Science. In
              my free time I am a teaching assistant for a{" "}
              <i>Fundamentals of C</i> programming class. I am also a member of
              the <i>Purdue Autonomous Robotics Club</i> where I am working to
              create fully autonomous drones and cars.
            </p>
            <Button variant="primary">About Me</Button>
          </Col>
        </Row>
      </div>
    );
  }
}
