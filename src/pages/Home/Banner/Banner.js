import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import carouselOne from '../../../images/carousel/carousel-1.jpg';
import carouselTwo from '../../../images/carousel/carousel-2.jpg';
import carouselThree from '../../../images/carousel/carousel-3.png';

const Banner = () => {
  const carousels = [
    {
      id: 1,
      image: carouselOne,
      alt: 'first slide',
    },
    {
      id: 2,
      image: carouselTwo,
      alt: 'second slide',
    },
    {
      id: 3,
      image: carouselThree,
      alt: 'third slide',
    },
  ];
  return (
    <Container fluid>
      <Row className="bg-warning">
        <Col
          xs={12}
          md
          className="text-center d-flex justify-content-center align-items-center"
        >
          <div>
            {/* banner title */}
            <div className="my-3">
              <h1 className="banner__title d-3">
                <span className="text-primary">#1</span> Platform for Food
                Delivery
              </h1>
              <small>Get the food you love most</small>
            </div>
            <NavLink to="/foods">
              <Button variant="info" className="my-3" style={{ width: 200 }}>
                <span className="pe-2">Order food</span>
                <FontAwesomeIcon icon={faLongArrowAltRight} />
              </Button>
            </NavLink>
          </div>
        </Col>
        <Col xs={12} md>
          <Carousel fade>
            {carousels.map((carousel) => (
              <Carousel.Item key={carousel.id}>
                <img
                  className="d-block w-100"
                  src={carousel.image}
                  alt={carousel.alt}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
