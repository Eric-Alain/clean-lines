import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import logo from '../img/logo.png';
import { Container, Navbar, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { gsap, Sine } from 'gsap';

const NavbarHeader = () => {
  const toggleRef = useRef();
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      toggleRef.current,
      {
        autoAlpha: 0,
        fontSize: 0
      },
      {
        autoAlpha: 1,
        fontSize: '1em',
        ease: Sine.easeIn,
        duration: 0.4
      }
    );
  }, [expand]);

  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='white'>
      <Container className='g-1 mx-3 mx-md-auto'>
        <Navbar.Brand>
          <Link to='/'>
            <img width='120px' height='auto' className='img-responsive' src={logo} alt='Clean lines logo' />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' ref={toggleRef} onClick={() => setExpand(!expand)}>
          <div className='navbar-toggler-inner'>
            <FontAwesomeIcon icon={expand ? faTimes : faBars} size='2x' className='text-white' />
          </div>
        </Navbar.Toggle>
        <Navbar.Collapse id='responsive-navbar-nav' className='justify-content-end'>
          <Row>
            <Col xs='12'>
              <Nav className='justify-content-end site-menu'>
                <Link to='/about' className='nav-link'>
                  About
                </Link>
                <NavDropdown title='Services' id='services-dropdown' renderMenuOnMount={true}>
                  <Link to='/demo' className='dropdown-item'>
                    CMS Demo
                  </Link>
                  <Link to='/services' className='dropdown-item'>
                    Services
                  </Link>
                </NavDropdown>
                <Link to='/blog' className='nav-link'>
                  Blog
                </Link>
                <NavDropdown title='Galleries' id='galleries-dropdown' renderMenuOnMount={true}>
                  <Link to='/galleries' className='dropdown-item'>
                    All galleries
                  </Link>
                  <Link to='/galleries/demo-1' className='dropdown-item'>
                    Demo 1
                  </Link>
                </NavDropdown>
                <Link to='/contact' className='nav-link'>
                  Contact
                </Link>
              </Nav>
            </Col>
            <Col xs='12'>
              <Nav className='justify-content-start justify-content-lg-end social-nav'>
                <Nav.Link href='#'>
                  <FontAwesomeIcon icon={faFacebook} size='lg' />
                </Nav.Link>
                <Nav.Link href='#'>
                  <FontAwesomeIcon icon={faInstagram} size='lg' />
                </Nav.Link>
                <Nav.Link href='#'>
                  <FontAwesomeIcon icon={faTwitter} size='lg' />
                </Nav.Link>
                <Nav.Link href='#'>
                  <FontAwesomeIcon icon={faYoutube} size='lg' />
                </Nav.Link>
              </Nav>
            </Col>
          </Row>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarHeader;
