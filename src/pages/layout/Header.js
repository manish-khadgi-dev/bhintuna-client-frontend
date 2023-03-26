import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand to="/">
          <div className="fa-solid "> Bhintuna Momo </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="nav-link ">
              Menu
            </Link>
            <Link to="/" className="nav-link ">
              Promos & Rewards
            </Link>
            <Link to="/" className="nav-link ">
              <i class="fa-solid fa-user"></i>
            </Link>
            <Link to="/" className="nav-link ">
              My Carts
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
