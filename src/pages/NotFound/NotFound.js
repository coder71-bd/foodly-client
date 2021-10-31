import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <section
      className=" d-flex flex-column justify-content-center align-items-center my-3"
      style={{ minHeight: 'calc(100vh - 270px)' }}
    >
      <p style={{ fontSize: 100 }} className="text-danger">
        404
      </p>
      <p className="fs-4 text-info">
        The page you are looking for is not available
      </p>
      <p>Please go back to home page</p>
      <NavLink to="/home">
        <Button variant="primary" className="mb-5">
          Home
        </Button>
      </NavLink>
    </section>
  );
};

export default NotFound;
