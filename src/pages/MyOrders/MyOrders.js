import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import MyOrderCard from './MyOrderCard/MyOrderCard';

const MyOrder = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    axios
      .get(`https://infinite-woodland-69947.herokuapp.com/order/${user.email}`)
      .then((response) => setMyOrders(response.data));
  }, [user.email]);

  if (myOrders.length === 0) {
    return (
      <section
        className=" d-flex flex-column justify-content-center align-items-center my-3"
        style={{ minHeight: 'calc(100vh - 270px)' }}
      >
        <p className="fs-4 text-info">You haven't ordered anything yet.</p>
        <p>Please go and order something</p>
        <NavLink to="/foods">
          <Button variant="primary" className="mb-5">
            Oder Food
          </Button>
        </NavLink>
      </section>
    );
  }

  const handleCancel = (id) => {
    axios
      .delete(`https://infinite-woodland-69947.herokuapp.com/order/${id}`)
      .then(() => {
        const filteredOrders = myOrders.filter((order) => order._id !== id);
        setMyOrders(filteredOrders);
      });
  };

  return (
    <Container
      fluid
      className=" d-flex justify-content-center align-items-center my-3"
      style={{ minHeight: 'calc(100vh - 270px)' }}
    >
      <Row className="justify-content-evenly">
        {myOrders.map((myOrder) => (
          <MyOrderCard
            key={myOrder._id}
            myOrder={myOrder}
            handleCancel={handleCancel}
          />
        ))}
      </Row>
    </Container>
  );
};

export default MyOrder;
