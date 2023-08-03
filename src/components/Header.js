
import React  from 'react';
import { Navbar, Nav} from 'react-bootstrap';
// eslint-disable-next-line
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default function Header() {
    return(
        <div className="header">
        <Navbar expand="lg" className="bg-body-tertiary">
            <Navbar.Brand as={Link} to="/home">
            <img
              src="/logo192.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <b className="padded">Vision Intelligence Network</b>
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/docs">Documentation</Nav.Link>
            <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
        </div>
    )
}