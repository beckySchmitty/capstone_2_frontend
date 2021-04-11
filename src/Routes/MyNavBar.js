import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
const MyNavBar = () => {


return (
    <div>
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">Bechdel Movie Ratings</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/search">Search</Nav.Link>
      {/* <Nav.Link href="#profile">Profile</Nav.Link> */}
      <NavDropdown title="Profile" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Account</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
        {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
)

}

export default MyNavBar;