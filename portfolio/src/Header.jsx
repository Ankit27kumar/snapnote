import { useState } from 'react'
import './App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGithub } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faTwitter, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'


function Header(){
    return(
<section id="header">
      <Navbar expand="lg" className=' mainnav'>
      <Container>
        <Navbar.Brand href="#home">AK</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navlink">
            <Nav.Link href="#home"><span className='navnum'>01.</span>About</Nav.Link>
            <Nav.Link href="#link"><span className='navnum'>02.</span>Skills</Nav.Link>
            <Nav.Link href="#link"><span className='navnum'>03.</span>Project</Nav.Link>
            <Nav.Link href="#link"><span className='navnum'>04.</span>Contact</Nav.Link>
            <Button className="resume" variant="primary" href="https://drive.google.com/file/d/1CiB7Z1gxrJ9UH62exs75PUK_FxC-RO4c/view?usp=sharing" target="_blank">Resume</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* <nav className='nawbar'> <a   href="https://github.com/Ankit27kumar"  target="_blank"><FontAwesomeIcon className='social' icon={faGithub} size="xl" style={{color: "#8892b0",}} /></a><br />

    <a   href="https://www.instagram.com/ankitkumar0.7?igsh=MTF2NzVsZzNmdDJ5MQ=="  target="_blank"> <FontAwesomeIcon className='social' icon={faInstagram} size="xl" style={{color: "#8892b0",}} /></a> <br />
    <a  href="https://www.linkedin.com/in/ankit-kumar-625aba288"  target="_blank"> <FontAwesomeIcon className='social' icon={faTwitter} size="xl" style={{color: "#8892b0",}} /></a> <br />
    <a  href="https://x.com/itsankitkumar07?s=09"  target="_blank"> <FontAwesomeIcon className='social' icon={faLinkedinIn} size="xl" style={{color: "#8892b0",}} /></a> <br />
    <div className="vertical-line"></div>
    </nav>
    <nav className='nawbar2'> 
    <div class="vertical-text">
  itsankitkumar07@gmail.com
</div>
<div className="vertical-line1"></div>
    </nav> */}
      </section>
    )
}
export default Header;