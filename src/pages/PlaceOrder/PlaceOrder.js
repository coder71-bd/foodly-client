import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

const PlaceOrder = ({ orderedFood }) => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //would come from context api
  const user_name = 'user3';
  const email = 'use3@gmail.com';

  const onSubmit = (data) => {
    if (orderedFood._id) {
      console.log({ user_name, email, product_id: orderedFood._id, ...data });
      history.push('/my-orders');
    } else {
      history.push('/foods');
    }
  };

  return (
    <div style={{ minHeight: 'calc(100vh - 270px)' }}>
      <h3 className="d-3 my-3 text-center text-primary fw-bold">
        Place your order
      </h3>
      <form
        className="w-50 mx-auto"
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
          type="text"
          placeholder="Address"
          className="w-75 mb-3 d-block mx-auto form-control"
          {...register('address', {
            required: 'this field is required',
            minLength: {
              value: 3,
              message: 'Your address should be more big.',
            },
            maxLength: {
              value: 12,
              message: 'Your address should be within 12 characters',
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
          placeholder="Card Number"
          className="w-75 mb-3 d-block mx-auto form-control"
          {...register('card-number', {
            required: 'this field is required',
            minLength: {
              value: 3,
              message: 'Card number is greater than 3 digit',
            },
            maxLength: {
              value: 11,
              message: 'Card number should be within 12 digit',
            },
          })}
        />
        {errors.card && (
          <p className="text-danger mb-3 w-75 mx-auto">{errors.card.message}</p>
        )}

        {/* order date of the customer */}
        <div className="w-75 mb-3 d-block mx-auto form-control">
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
