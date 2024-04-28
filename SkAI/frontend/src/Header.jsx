import React, { useEffect, useState } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import logo from '/images/logo/logo.jpg.jpeg';

function Header() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Navbar expand="lg" className={`bg-body-tertiary  ${scrolling ? 'scrolled' : 'mainnav'}`} fixed="top">
        <Container>
          <Navbar.Brand className='brand' href="#home">
            <img className='logo' src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div>
            <Nav className={`me-auto ${scrolling ? 'navcolor' : ''}`}>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <Nav.Link href="#team">Team</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
                <NavDropdown title="Pages" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">About Page</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Pricing Page</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Contact Page</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Blog Grid Page</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Blog Details Page</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Sign in Page</NavDropdown.Item>
                </NavDropdown>
                <div className='regbutton'>
                  <Button className="signin" style={{ color: scrolling ? '#ffaa00' : '' }} variant="link" href="/signin">Sign In</Button>
                  <Button className='signup' variant="dark" href="/signup">Sign Up</Button>
                </div>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
