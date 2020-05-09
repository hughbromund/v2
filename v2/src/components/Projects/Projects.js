import React, { Component } from "react";

import classes from "./Projects.module.css";

import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

export default class Projects extends Component {
  render() {
    return (
      <div className={classes.wrapper}>
        <h1 className={classes.title}>
          <strong>Personal & School Projects</strong>
          <hr />
        </h1>
        <a href="https://www.linkedin.com/in/hughbromund/">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <div className={classes.cards}>
          <CardColumns>
            <Card>
              <Card.Img
                variant="top"
                src={require("../../assets/finex_logo.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <strong>FINEX</strong>
                </Card.Title>
                <Card.Text>
                  A team based projet to build a website that helps track
                  spending and stock information
                </Card.Text>
                <hr />
                <Button variant="primary">Learn More</Button>
              </Card.Body>
              <Card.Footer>
                <strong>Completed</strong>{" "}
                <span style={{ float: "right" }}>
                  <Badge variant="primary">
                    School{" "}
                    <span role="img" aria-label="pencil">
                      ✏️
                    </span>
                  </Badge>
                </span>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src={require("../../assets/starstats.png")}
              />
              <Card.Body>
                <Card.Title>
                  <strong>StarStats</strong>
                </Card.Title>
                <Card.Text>
                  An iOS companion app for the popular game BrawlStars.
                  StarStats displays information about games played and trophy
                  changes.
                </Card.Text>
                <hr />
                <Button variant="primary">Learn More</Button>
              </Card.Body>
              <Card.Footer>
                <strong>Completed</strong>{" "}
                <span style={{ float: "right" }}>
                  <Badge variant="primary">
                    School{" "}
                    <span role="img" aria-label="pencil">
                      ✏️
                    </span>
                  </Badge>
                </span>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src={require("../../assets/sloth_logo.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <strong>Adventerous Sloth</strong>
                </Card.Title>
                <Card.Text>
                  A team based projet to build a website that helps track
                  spending and stock information
                </Card.Text>
                <hr />
                <Button variant="primary">Learn More</Button>
              </Card.Body>
              <Card.Footer>
                <strong>Completed</strong>{" "}
                <span style={{ float: "right" }}>
                  <Badge variant="success">
                    Personal{" "}
                    <span role="img" aria-label="laptop">
                      💻
                    </span>
                  </Badge>
                </span>
              </Card.Footer>
            </Card>
          </CardColumns>
        </div>
      </div>
    );
  }
}
