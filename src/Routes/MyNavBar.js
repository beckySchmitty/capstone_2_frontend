import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import "../styles/NavBar.css"

const MyNavBar = () => {

return (
    <div>
<Navbar className="NavBar">
  <Navbar.Brand style={{color: '#888888'}} href="/">Bechdel Movie Ratings</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse style={{color: '#888888'}}  id="basic-navbar-nav">
    <Nav style={{color: '#888888'}} className="mr-auto">
      <Nav.Link style={{color: '#888888'}} href="/search">Search</Nav.Link>
      <Nav.Link  style={{color: '#888888'}} href="/signup">Signup</Nav.Link>
      <Nav.Link  style={{color: '#888888'}} href="/profile">Profile</Nav.Link>
      <Nav.Link style={{color: '#888888'}} href="/login">login</Nav.Link>
      <Nav.Link style={{color: '#888888'}} href="/logout">logout</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
)

}

export default MyNavBar;

{/* <NavDropdown style={{color: '#888888'}} title="Account" id="basic-nav-dropdown">
<NavDropdown.Item style={{color: '#888888'}} href="/profile">Profile</NavDropdown.Item>
<NavDropdown.Item style={{color: '#888888'}} href="/login">Login</NavDropdown.Item>
<NavDropdown.Item style={{color: '#888888'}} href="/logout">Logout</NavDropdown.Item>
</NavDropdown> */}