import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const history = useHistory();

  const handleLogin = () => {
    history.push('/login');
  };

  const logInBtn = (
    <Button variant="success">
      <span className="pe-2" onClick={handleLogin}>
        login
      </span>
      <FontAwesomeIcon icon={faSignInAlt} />
    </Button>
  );

  const logOutBtn = (
    <Button variant="danger">
      <span className="pe-2">logout</span>
      <FontAwesomeIcon icon={faSignOutAlt} />
    </Button>
  );

  return (
    <Navbar collapseOnSelect sticky="top" expand="lg">
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="fst-italic fw-bold text-warning"
        >
          FOODLY
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/foods">
              Foods
            </Nav.Link>

            <Nav.Link as={Link} to="/my-orders">
              My Orders
            </Nav.Link>

            <Nav.Link as={Link} to="/manage-all-order">
              Manage all order
            </Nav.Link>

            <Nav.Link as={Link} to="/about">
              About us
            </Nav.Link>
          </Nav>

          <Nav>
            {/* logged in user name */}
            <Nav.Link as={Link} className="text-white text-center">
              custom name
            </Nav.Link>
          </Nav>

          {/* login logout button */}
          <Nav>
            {logOutBtn}
            {logInBtn}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
