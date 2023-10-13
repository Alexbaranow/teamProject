import React from 'react';
import { Container, Navbar, Nav, Form, InputGroup } from 'react-bootstrap';

export default function Reports() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/reports">Your one and only minimalised task helper</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/reports">Reports</Nav.Link>
            <Nav.Link href="/">LogOut</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Container>
        <InputGroup className="mb-3">
          <InputGroup.Text>Секции</InputGroup.Text>
          <Form.Control aria-label="First name" />
          <Form.Control aria-label="Last name" />
          <Form.Control aria-label="Third name" />
        </InputGroup>
      </Container>
    </Navbar>
  );
}
