import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import TableRow from './TableRow/TableRow';
const ManageAllOrder = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get('https://infinite-woodland-69947.herokuapp.com/order/')
      .then((response) => setOrders(response.data));
  }, []);

  const handleApproveOrder = (id) => {
    axios
      .put(`https://infinite-woodland-69947.herokuapp.com/order/${id}`)
      .then(() => {
        axios
          .get('https://infinite-woodland-69947.herokuapp.com/order/')
          .then((response) => setOrders(response.data));
      });
  };

  const handleRejectOrder = (id) => {
    axios
      .delete(`https://infinite-woodland-69947.herokuapp.com/order/${id}`)
      .then(() => {
        const filteredOrder = orders.filter((order) => order._id !== id);
        setOrders(filteredOrder);
      });
  };

  return (
    <Container
      className=" d-flex justify-content-center align-items-center my-3"
      style={{ minHeight: 'calc(100vh - 270px)' }}
    >
      <Table responsive striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Customer</th>
            <th>Order</th>
            <th>Status</th>
            <th>Approve</th>
            <th>Reject</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, i) => (
            <TableRow
              key={order._id}
              index={i}
              order={order}
              handleApproveOrder={handleApproveOrder}
              handleRejectOrder={handleRejectOrder}
            />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ManageAllOrder;
