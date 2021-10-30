import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import about from '../../images/about.jpg';

const About = () => {
  return (
    <Container
      className=" d-flex justify-content-center align-items-center my-3"
      style={{ minHeight: 'calc(100vh - 200px)' }}
    >
      <Row className="justify-content-center align-items-center">
        {/* about info */}
        <Col lg={6}>
          <h3 className="pe-2 text-warning mb-3">
            Welcome To <strong>Foodly</strong>
          </h3>
          <p>
            Foodly is a food delivery Platform. Here we will provide your
            favorite food. We're dedicated to providing you the best food in
            quality. with a focus on delivering a order less than an hour. We're
            working to make the food delivery as smooth as possible. We hope you
            enjoy our Food delivey service as much as we enjoy offering them to
            you. We will keep increasing our quality of food and also constantly
            trying to improve the delivery process easier. Please give your
            support and love. Thanks For Visiting Our Site. Have a nice day
          </p>
        </Col>

        {/* about image */}
        <Col className="d-flex flex-column" lg={6} style={{ maxWidth: 500 }}>
          <img className="img-fluid mx-auto" src={about} alt="about" />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
