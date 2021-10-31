import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PlaceOrder = ({ orderedFood }) => {
  const history = useHistory();
  const { user, userName } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //would come from context api
  const user_name = user.displayName || userName;
  const email = user.email;

  const onSubmit = (data) => {
    if (orderedFood._id) {
      const orderData = {
        user_name,
        email,
        product_id: orderedFood._id,
        ...data,
      };
      axios
        .post('https://infinite-woodland-69947.herokuapp.com/order', orderData)
        .then((response) => {
          console.log(response);
          history.push('/my-orders');
        });
    } else {
      history.push('/foods');
    }
  };

  return (
    <div className="mt-3" style={{ minHeight: 'calc(100vh - 270px)' }}>
      {orderedFood?.image && (
        <div className="text-danger my-3">
          <img
            className="img-fluid"
            style={{ maxWidth: 200 }}
            src={orderedFood.image}
            alt={orderedFood.name}
          />
          <div>{orderedFood?.name}</div>
        </div>
      )}

      <h3 className="d-3 my-3 text-center text-primary fw-bold">
        Place your order
      </h3>
      <form
        className="form w-50 mx-auto"
        onSubmit={handleSubmit(onSubmit)}
        style={{ maxWidth: 600 }}
      >
        {/* name of the customer */}
        <input
          className="w-75 mb-3 d-block mx-auto form-control"
          value={user_name}
          readOnly
        />

        {/* email of the customer */}
        <input
          className="w-75 mb-3 d-block mx-auto form-control"
          value={email}
          readOnly
        />

        {/* address of the customer */}
        <input
          placeholder="Address"
          className="w-75 mb-3 d-block mx-auto form-control"
          {...register('address', {
            required: 'this field is required',
            minLength: {
              value: 3,
              message: 'Your address should be more big.',
            },
            maxLength: {
              value: 25,
              message: 'Your address should be within 25 characters',
            },
          })}
        />
        {errors.address && (
          <p className="text-danger mb-3 w-75 mx-auto">
            {errors.address.message}
          </p>
        )}

        {/* card number */}
        <input
          type="text"
          placeholder="Card Number: 111-222-333-444"
          className="w-75 mb-3 d-block mx-auto form-control"
          {...register('card_number', {
            required: 'this field is required',
            minLength: {
              value: 3,
              message: 'Card number should be greater than 3 digit',
            },
            maxLength: {
              value: 11,
              message: 'Card number should be within 12 digit',
            },
          })}
        />
        {errors.card_number && (
          <p className="text-danger mb-3 w-75 mx-auto">
            {errors.card_number.message}
          </p>
        )}

        {/* order date of the customer */}
        <div className="mb-3 w-75  mx-auto d-block form-control text-center">
          <span>date: </span>
          <input type="date" />
        </div>

        <input
          className="btn btn-primary text-white w-50 d-block mx-auto mb-3"
          type="submit"
          value="place order"
        />
      </form>
    </div>
  );
};

export default PlaceOrder;
