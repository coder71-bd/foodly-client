import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {
  const { user, logout, userName, setUserName } = useAuth();

  const history = useHistory();

  const handleLogin = () => {
    history.push('/login');
  };

  const handleLogOut = () => {
    logout();
    setUserName('');
  };

  const logInBtn = (
    <Button variant="outline-info" onClick={handleLogin}>
      <span className="pe-2">login</span>
      <FontAwesomeIcon icon={faSignInAlt} />
    </Button>
  );

  const logOutBtn = (
    <Button variant="outline-danger" onClick={handleLogOut}>
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

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          style={{ backgroundColor: 'salmon' }}
        />

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

            <Nav.Link as={Link} to="/add-food" className="text-white">
              Add Food
            </Nav.Link>

            <Nav.Link as={Link} to="/manage-all-order" className="text-white">
              Manage all order
            </Nav.Link>

            <Nav.Link as={Link} to="/about" className="text-white">
              About us
            </Nav.Link>
          </Nav>

          {/* logged in user name */}
          <Nav className="text-white mt-lg-3 my-lg-0 fs-4">
            {/* logged in user name */}
            <p className="text-white text-center">
              {user.displayName || userName}
            </p>
          </Nav>

          {/* login logout button toggle system */}
          {user.email ? (
            <Nav className="mt-lg-0 mt-3 ms-4">{logOutBtn}</Nav>
          ) : (
            <Nav className="mt-lg-0 mt-3 ms-4">{logInBtn}</Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
