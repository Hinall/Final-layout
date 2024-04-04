import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import  { Button,Container,Nav,NavDropdown,NavItem,Navbar, NavbarBrand, NavbarOffcanvas, NavbarToggle, Offcanvas } from 'react-bootstrap';
const MyNavbar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleOffcanvasToggle = () => setShowOffcanvas(!showOffcanvas);

  return (<>
 <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleOffcanvasToggle} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Offcanvas show={showOffcanvas} onHide={handleOffcanvasToggle}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="#home" onClick={handleOffcanvasToggle}>Home</Nav.Link>
            <Nav.Link href="#link" onClick={handleOffcanvasToggle}>Link</Nav.Link>
            <Nav.Link href="#about" onClick={handleOffcanvasToggle}>About</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    
  
  
</>
  )
}

export default MyNavbar