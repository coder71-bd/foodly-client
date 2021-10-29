import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import delivery from '../../../images/features/delivery.png';
import discount from '../../../images/features/discount.png';
import options from '../../../images/features/options.png';

const Features = () => {
  const features = [
    {
      id: 1,
      image: delivery,
      alt: 'delivery',
      name: 'Fastest delivery',
      desc: 'Get your food delivered less than an hour',
    },
    {
      id: 2,
      image: options,
      alt: 'options',
      name: 'So much options for you',
      desc: 'Find your favourite food from our huge collection',
    },
    {
      id: 3,
      image: discount,
      alt: 'discount',
      name: 'Best Offers for you',
      desc: 'Get the best offers for your favourite food only in Foodly',
    },
  ];

  return (
    <Container fluid className="my-3">
      <Row className="justify-content-evenly">
        {features.map((feature) => (
          <Col xs={12} md={4} key={feature.id} className="mb-md-0 mb-3">
            {/* feature image */}
            <img
              className="img-fluid mb-3"
              src={feature.image}
              alt={feature.alt}
              style={{ minHeight: 350 }}
            />
            {/* feature description */}
            <div className="text-center">
              <h3 className="banner__title">{feature.name}</h3>
              <p>{feature.desc}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Features;
