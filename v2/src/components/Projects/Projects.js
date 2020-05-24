import React, { Component } from "react";

import { TEXT_COLOR } from "../../constants/Constants";

import classes from "./Projects.module.css";

import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Projects extends Component {
  render() {
    return (
      <div className={classes.wrapper}>
        <h1 className={classes.title}>
          <strong>Personal & School Projects</strong>
          <hr />
        </h1>
        <div className={classes.cards}>
          <CardColumns>
            <Card>
              <Card.Img
                variant="top"
                src={require("../../assets/finex_logo.jpg")}
              />
              <Card.Body>
                <Card.Title>
                  <strong>
                    <strong>FINEX</strong>
                  </strong>
                </Card.Title>
                <Card.Text>
                  A team based project to build a website that helps track
                  spending and stock information
                </Card.Text>
                <hr />
                <Card.Title>
                  <strong>My Role</strong>
                </Card.Title>
                <Card.Text>
                  For this project, I helped create the initial designs and then
                  worked on the frontend team to bring those designs to life. I
                  specifically worked on the frontend design and functionality
                  of the budgeting feature. Additionally, I took on the task of
                  hosting the website once it was completed.
                </Card.Text>
                <hr />
                <Card.Title>
                  <strong>Technologies</strong>
                </Card.Title>
                <Card.Text>
                  <FontAwesomeIcon
                    icon={["fab", "react"]}
                    color={{ TEXT_COLOR }}
                    size="2x"
                  />
                  &nbsp;&nbsp;
                  <FontAwesomeIcon
                    icon={["fab", "js"]}
                    color={{ TEXT_COLOR }}
                    size="2x"
                  />
                  &nbsp;&nbsp;
                  <FontAwesomeIcon
                    icon={["fab", "node"]}
                    color={{ TEXT_COLOR }}
                    size="2x"
                  />
                  &nbsp;&nbsp;
                  <FontAwesomeIcon
                    icon={["fab", "html5"]}
                    color={{ TEXT_COLOR }}
                    size="2x"
                  />
                  &nbsp;&nbsp;
                  <FontAwesomeIcon
                    icon={["fab", "css3-alt"]}
                    color={{ TEXT_COLOR }}
                    size="2x"
                  />
                  &nbsp;&nbsp;
                  <FontAwesomeIcon
                    icon={["fab", "npm"]}
                    color={{ TEXT_COLOR }}
                    size="2x"
                  />
                </Card.Text>
                <hr />
                <Button
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.finex.money"
                  variant="primary"
                >
                  Check It Out!{" "}
                  <span role="img" aria-label="rocket launch">
                    🚀
                  </span>
                </Button>
                &nbsp;&nbsp;
                <span style={{ float: "right" }}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/hughbromund/FINEX"
                  >
                    <FontAwesomeIcon
                      icon={["fab", "github"]}
                      color={{ TEXT_COLOR }}
                      size="2x"
                    />
                  </a>
                </span>
              </Card.Body>
              <Card.Footer>
                <strong>
                  Completed{" "}
                  <span role="img" aria-label="check-mark">
                    ✅
                  </span>
                </strong>{" "}
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
                  <strong>
                    <strong>StarStats</strong>
                  </strong>
                </Card.Title>
                <Card.Text>
                  An iOS companion app for the popular game BrawlStars.
                  StarStats displays information about games played and trophy
                  changes.
                </Card.Text>
                <hr />
                <Card.Title>
                  <strong>My Role</strong>
                </Card.Title>
                <Card.Text>
                  I worked on a number of different components for this project.
                  My first job was building the backend for our app. I built the
                  backend using NodeJS and hosted it in Google Cloud. I then
                  moved on to creating the trophy graphing system and our
                  persistent data system.
                </Card.Text>
                <hr />
                <Card.Title>
                  <strong>Technologies</strong>
                </Card.Title>
                <Card.Text>
                  &nbsp;&nbsp;
                  <FontAwesomeIcon
                    icon={["fab", "swift"]}
                    color={{ TEXT_COLOR }}
                    size="2x"
                  />
                  &nbsp;&nbsp;
                  <FontAwesomeIcon
                    icon={["fab", "node"]}
                    color={{ TEXT_COLOR }}
                    size="2x"
                  />
                  &nbsp;&nbsp;
                  <FontAwesomeIcon
                    icon={["fab", "sketch"]}
                    color={{ TEXT_COLOR }}
                    size="2x"
                  />
                </Card.Text>
                <hr />
                <Card.Title>
                  <strong>Awards</strong>
                </Card.Title>
                <Card.Text>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://blog.codepath.org/codepath-hosts-first-national-virtual-demo-day/"
                  >
                    <span role="img" aria-label="trophy">
                      🏆
                    </span>{" "}
                    - Best Design - 2020 CodePath National Demo Day
                  </a>
                </Card.Text>
                <hr />
                <Button variant="primary" disabled>
                  {" "}
                  Check It Out!{" "}
                  <span role="img" aria-label="rocket launch">
                    🚀
                  </span>
                </Button>
                &nbsp;&nbsp;
                <span style={{ float: "right" }}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/BrawlStats-Purdue/BrawlStats"
                  >
                    <FontAwesomeIcon
                      icon={["fab", "github"]}
                      color={{ TEXT_COLOR }}
                      size="2x"
                    />
                  </a>
                </span>
              </Card.Body>
              <Card.Footer>
                <strong>
                  Completed{" "}
                  <span role="img" aria-label="check-mark">
                    ✅
                  </span>
                </strong>
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
                  <strong>
                    <strong>Adventurous Sloth</strong>
                  </strong>
                </Card.Title>
                <Card.Text>
                  A web app that helps create an itinerary based on a simple set
                  of questions.
                </Card.Text>
                <hr />
                <Card.Title>
                  <strong>My Role</strong>
                </Card.Title>
                <Card.Text>
                  I came up with the initial idea for the website and then
                  worked on the frontend team. I built the home page and the
                  results page using React.
                </Card.Text>
                <hr />
                <Card.Title>
                  <strong>Technologies</strong>
                </Card.Title>
                <Card.Text>
                  <FontAwesomeIcon
                    icon={["fab", "react"]}
                    color={{ TEXT_COLOR }}
                    size="2x"
                  />
                  &nbsp;&nbsp;
                  <FontAwesomeIcon
                    icon={["fab", "js"]}
                    color={{ TEXT_COLOR }}
                    size="2x"
                  />
                  &nbsp;&nbsp;
                  <FontAwesomeIcon
                    icon={["fab", "node"]}
                    color={{ TEXT_COLOR }}
                    size="2x"
                  />
                  &nbsp;&nbsp;
                  <FontAwesomeIcon
                    icon={["fab", "html5"]}
                    color={{ TEXT_COLOR }}
                    size="2x"
                  />
                  &nbsp;&nbsp;
                  <FontAwesomeIcon
                    icon={["fab", "css3-alt"]}
                    color={{ TEXT_COLOR }}
                    size="2x"
                  />
                  &nbsp;&nbsp;
                  <FontAwesomeIcon
                    icon={["fab", "tripadvisor"]}
                    color={{ TEXT_COLOR }}
                    size="2x"
                  />
                  &nbsp;&nbsp;
                  <FontAwesomeIcon
                    icon={["fab", "npm"]}
                    color={{ TEXT_COLOR }}
                    size="2x"
                  />
                </Card.Text>
                <hr />
                <Card.Title>
                  <strong>Awards</strong>
                </Card.Title>
                <Card.Text>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://devpost.com/software/adventurous-sloth"
                  >
                    <span role="img" aria-label="trophy">
                      🏆
                    </span>{" "}
                    - 3rd Place Overall - Boilermake VII
                  </a>
                </Card.Text>
                <hr />
                <Button
                  variant="primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://adventurous-sloth-1.ue.r.appspot.com/"
                >
                  {" "}
                  Check It Out!{" "}
                  <span role="img" aria-label="rocket launch">
                    🚀
                  </span>
                </Button>
                &nbsp;&nbsp;
                <span style={{ float: "right" }}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/hughbromund/AdventurousSloth"
                  >
                    <FontAwesomeIcon
                      icon={["fab", "github"]}
                      color={{ TEXT_COLOR }}
                      size="2x"
                    />
                  </a>
                </span>
              </Card.Body>
              <Card.Footer>
                <strong>
                  Completed{" "}
                  <span role="img" aria-label="check-mark">
                    ✅
                  </span>
                </strong>
                <span style={{ float: "right" }}>
                  <Badge variant="secondary">
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
