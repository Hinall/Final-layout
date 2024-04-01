import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
import { Navbar, Container, Nav, NavDropdown, Offcanvas, Button } from 'react-bootstrap';
const MyNavbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (<>

<Navbar expand="lg" className="bg-body-tertiary " bg="dark" data-bs-theme="dark">
<Button variant="outline-light" onClick={handleShow}>
      <span class="navbar-toggler-icon"></span>  
      </Button>
      <Container>
     
        <Navbar.Brand href="#home">Digital Twin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Offcanvas style={{top: '56px'}}  data-bs-theme="dark" backdropClassName="invisible"
        className="text-light" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         
        </Offcanvas.Body>
      </Offcanvas>

  </>
     
  )
}

export default MyNavbar