import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Carousel, Col, Row } from 'react-bootstrap';
import carouselOne from '../../../images/carousel/carousel-1.jpg';
import carouselTwo from '../../../images/carousel/carousel-2.jpg';
import carouselThree from '../../../images/carousel/carousel-3.png';

const Banner = () => {
  return (
    <div>
      <Row className="bg-warning">
        <Col className="text-center d-flex justify-content-center align-items-center">
          <div>
            {/* banner title */}
            <div classname="my-3">
              <h1 className="banner__title">#1 Platform for Food Delivery</h1>
              <small>get special dishes in low price</small>
            </div>
            <Button
              variant="outline-info"
              className="mt-3"
              style={{ width: 200 }}
            >
              <span className="pe-2">Order food</span>
              <FontAwesomeIcon icon={faLongArrowAltRight} />
            </Button>
          </div>
        </Col>
        <Col>
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={carouselOne}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={carouselTwo}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={carouselThree}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </div>
  );
};

export default Banner;
