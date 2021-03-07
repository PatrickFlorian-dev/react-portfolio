import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

// Stateless Functional Component
const NavbarLayout = () => {
    
    return ( 
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">Patrick's Dynamic HTTP Form</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
     );
};

export default NavbarLayout;