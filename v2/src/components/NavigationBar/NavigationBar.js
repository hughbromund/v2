import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import Form from "react-bootstrap/Form";
// import Container from "react-bootstrap/Container";

import history from "../../routing/History";
import { ABOUT_ME, HOME_PATH, PROJECTS } from "../../constants/Constants";

export default class NavigationBar extends Component {
  render() {
    return (
      <div>
        <Navbar fixed="top" expand="lg" bg="dark" variant="dark">
          <Navbar.Brand onClick={() => history.push(HOME_PATH)}>
            <strong>Hugh Bromund</strong>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link onClick={() => history.push(ABOUT_ME)}>
                About Me
              </Nav.Link>
              <Nav.Link>Experience</Nav.Link>
              <Nav.Link onClick={() => history.push(PROJECTS)}>
                Projects
              </Nav.Link>
              <Nav.Link>Skills</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
