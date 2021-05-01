import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import "../styles/NavBar.css"

const MyNavBar = () => {

return (
<Navbar bg="dark" expand="lg" className="navbar navbar-dark bg-dark">
  <Navbar.Brand href="/">Bechdel Movie Ratings</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav>
      <Nav.Link href="/search">Search</Nav.Link>
      <NavDropdown className="ml-auto" title="Account" id="basic-nav-dropdown">
      <NavDropdown.Item href="/watchlist">Watchlist</NavDropdown.Item>
      <NavDropdown.Item href="/login">Login</NavDropdown.Item>
      <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)

}

export default MyNavBar;
