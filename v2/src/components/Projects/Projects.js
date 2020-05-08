import React, { Component } from "react";

import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

export default class Projects extends Component {
  render() {
    return (
      <div>
        <h1>
          <strong>Personal & School Projects</strong>{" "}
        </h1>
        <CardDeck>
          <Card>
            <Card.Body>
              <Card.Title>FINEX</Card.Title>
              <Card.Text>
                A team based projet to build a website that helps track spending
                and stock information
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>FINEX</Card.Title>
              <Card.Text>
                A team based projet to build a website that helps track spending
                and stock information
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    );
  }
}
