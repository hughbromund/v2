import React, { Component } from "react";

import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

export default class Projects extends Component {
  render() {
    return (
      <div>
        <h1>
          <strong>Personal & School Projects</strong>{" "}
        </h1>
        <a href="https://www.linkedin.com/in/hughbromund/">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <CardDeck>
          <Card>
            <Card.Img
              variant="top"
              src={require("../../assets/finex_logo.jpg")}
            />
            <Card.Body>
              <Card.Title>FINEX</Card.Title>
              <Card.Text>
                A team based projet to build a website that helps track spending
                and stock information
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
              <Card.Title>StarStats</Card.Title>
              <Card.Text>
                An iOS companion app for the popular game BrawlStars. StarStats
                displays information about games played and trophy changes.
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
              <Card.Title>Adventerous Sloth</Card.Title>
              <Card.Text>
                A team based projet to build a website that helps track spending
                and stock information
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
        </CardDeck>
      </div>
    );
  }
}
