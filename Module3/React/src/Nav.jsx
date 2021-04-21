import React from 'react';
import {Navbar, NavDropdown } from 'react-bootstrap';
import './css/style.css';


export default function Nav() {
    return (
        <Navbar collapseOnSelect  bg="dark" variant="dark">
  <Navbar.Brand href="#home">WEB DEV</Navbar.Brand>
  <Navbar.Collapse id="responsive-navbar-nav">
  <NavDropdown className="navdrop">
        <NavDropdown.Item href="">HTML</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="">CSS</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="">JAVASCRIPT</NavDropdown.Item>
        
        </NavDropdown>
        </Navbar.Collapse>
  </Navbar>
    )
}
