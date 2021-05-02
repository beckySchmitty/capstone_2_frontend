import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import { useSelector } from "react-redux";
import "../styles/NavBar.css"

/**
 * Different display depending on if user is logged in
 * @returns Navbar component for entire site
 */

const MyNavBar = () => {
  const user = useSelector(st => st.currentUser);
  let NAV;

  if (user.id) { 
  NAV = <Navbar bg="dark" expand="lg" className="navbar navbar-dark bg-dark">
  <Navbar.Brand href="/">Bechdel Movie Ratings</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav>
      <Nav.Link href="/search">Search</Nav.Link>
      <NavDropdown className="ml-auto" title="Account" id="basic-nav-dropdown">
      <NavDropdown.Item href="/watchlist">Watchlist</NavDropdown.Item>
      <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  } else {
    NAV = <Navbar bg="dark" expand="lg" className="navbar navbar-dark bg-dark">
    <Navbar.Brand href="/">Bechdel Movie Ratings</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav>
        <Nav.Link href="/search">Search</Nav.Link>
        <NavDropdown className="ml-auto" title="Account" id="basic-nav-dropdown">
        <NavDropdown.Item href="/signup">Signup</NavDropdown.Item>
        <NavDropdown.Item href="/login">Login</NavDropdown.Item>
        <NavDropdown.Item href="/watchlist">Watchlist</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  }

return (
  NAV
)

}

export default MyNavBar;
