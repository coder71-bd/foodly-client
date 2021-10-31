import {
  faShoppingBasket,
  faStar,
  faStarHalfAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Ingredients from './Ingredients/Ingredients';

const Food = ({ food, handleOrderNow }) => {
  const showRating = (r) => {
    const ratingArr = [];
    for (let i = 0; i < r; i++) {
      ratingArr.push(
        <FontAwesomeIcon
          key={i}
          className="fs-4"
          icon={faStar}
          style={{ color: 'tomato' }}
        />
      );
    }
    for (let i = r; i < 5; i++) {
      ratingArr.push(
        <FontAwesomeIcon
          key={i}
          className="fs-4"
          icon={faStarHalfAlt}
          style={{ color: 'tomato' }}
        />
      );
    }

    return ratingArr;
  };

  return (
    <Card
      key={food._id}
      className="shadow my-3 mx-md-3"
      style={{ maxWidth: '30rem' }}
    >
      <Row className="align-items-center">
        <Col xs={12} md>
          <Card.Img variant="top" src={food.image} />
        </Col>
        <Col xs={12} md>
          <Card.Body>
            <Card.Title>{food.name}</Card.Title>
            <p>{food.desc}</p>
            <div className="mb-2 text-center">Ingredients:</div>
            <Ingredients ingridient={food.ingredients} />
          </Card.Body>
        </Col>
      </Row>
      <Card.Footer className="d-flex flex-wrap justify-content-between align-items-center">
        <div>{showRating(food.rating)}</div>
        <NavLink to="/place-order">
          <Button variant="primary" onClick={() => handleOrderNow(food)}>
            <FontAwesomeIcon icon={faShoppingBasket} />
            <span className="ps-2">order now</span>
          </Button>
        </NavLink>

        <div className="fs-2 fw-bold" style={{ color: '#d90f2d' }}>
          ${food.price}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default Food;
