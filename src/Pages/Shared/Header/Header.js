import React from "react";
import {Link} from "react-router-dom";
import "./Header.css";
import logo from "../../../images/logo.png";
import {Container, Nav, Navbar} from "react-bootstrap";
import {HashLink} from "react-router-hash-link";

const Header = () => {
  return (
    <div className="Menu-container">
      <Navbar
        bg="light"
        variant="light"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#home" className="logo-title fs-4">
            <img alt="" src={logo} width="75" height="75" />
            New Gym Power
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={HashLink} to="/home#home" className="items">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#services" className="items">
              Services
            </Nav.Link>
            <Link to="/services" className="items">
              <li>Services</li>
            </Link>
            {/* <Nav.Link as={HashLink} to="/home#experts">Experts</Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
