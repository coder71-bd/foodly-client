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
    <Button variant="outline-primary">
      <span className="pe-2" onClick={handleLogin}>
        login
      </span>
      <FontAwesomeIcon icon={faSignInAlt} />
    </Button>
  );

  const logOutBtn = (
    <Button variant="outline-danger">
      <span className="pe-2">logout</span>
      <FontAwesomeIcon icon={faSignOutAlt} />
    </Button>
  );

  return (
    <Navbar collapseOnSelect sticky="top" expand="lg" bg="dark">
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
          <Nav className="me-auto fs-5">
            <Nav.Link as={Link} to="/home" className="text-white">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/foods" className="text-white">
              Foods
            </Nav.Link>

            <Nav.Link as={Link} to="/my-orders" className="text-white">
              My Orders
            </Nav.Link>

            <Nav.Link as={Link} to="/manage-all-order" className="text-white">
              Manage all order
            </Nav.Link>

            <Nav.Link as={Link} to="/about" className="text-white">
              About us
            </Nav.Link>
          </Nav>

          {/* logged in user name */}
          <Nav className="text-white me-lg-3 my-3 my-lg-0 fs-4">
            custom name
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
