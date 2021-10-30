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

  return (
    <Container>
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
            <TableRow key={order._id} index={i} order={order} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ManageAllOrder;
