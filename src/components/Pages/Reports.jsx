import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

export default function Reports() {
  const rowStyle = {
    display: 'flex',
    wrap: 'no-wrap',
    justifyContent: 'space-between',
  };
  const flexStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '33%',

  };
  const contStyle = {
    border: 'solid black 2px',
    marginBottom: '10px',
    borderRadius: '15px',
  };
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/reports">Твой единственный и минималистичный таскхелпер</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Выход</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="row" style={rowStyle}>
        <div className="container" style={flexStyle}>
          <h3>Section</h3>
          <div className="section" style={contStyle}>
            <br />
            -------
            <br />
          </div>
          <label htmlFor="">
            <input type="text" />
            <button type="submit">+</button>
          </label>
        </div>
        <div className="container" style={flexStyle}>
          <h3>Upgrade</h3>
          <div className="updates" style={contStyle}>
            <br />
            --------
            <br />
          </div>
          <label htmlFor="">
            <input type="text" />
            <button type="submit">+</button>
          </label>
        </div>
        <div className="container" style={flexStyle}>
          <h3>Changing</h3>
          <div className="changes" style={contStyle}>
            <br />
            --------
            <br />
          </div>
          <label htmlFor="">
            <input type="text" />
            <button type="submit">+</button>
          </label>
        </div>
      </div>
    </>
  );
}
