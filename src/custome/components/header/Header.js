import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../../../firebase/UseAuth';
import './header.css'

const Header = () => {
  const { user, logout } = UseAuth();
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand className="brand" to="/">SHA<span className="subbrand">-AUTO</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-end head">
            <Nav.Link as={Link} className="menue-item" to="/home">Home</Nav.Link>
            <Nav.Link as={Link} className="menue-item" to="/services">Cars</Nav.Link>
            {user.email && <Nav.Link as={Link} className="menue-item" to="/dashboard">Dashboard</Nav.Link>}
           {
            user.email ?
            <Nav.Link className="d-flex ">
              <span style={{ color: 'grey', marginRight: '10px' }}>{user.displayName} </span>
              <button className='hbutton' onClick={logout}>log out</button></Nav.Link>:
              <Nav.Link as={Link} className="menue-item" to="/login">Login</Nav.Link>}
          </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar >
  );
};

export default Header;