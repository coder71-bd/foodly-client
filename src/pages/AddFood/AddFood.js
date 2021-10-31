import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

const AddFood = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const ingredientArr = data.ingredients.split(',');
    data.ingredients = ingredientArr;
    console.log(data);
    history.push('/foods');
  };

  return (
    <div style={{ minHeight: 'calc(100vh - 270px)' }}>
      <h3 className="d-3 my-3 text-center text-primary fw-bold">
        Add Food in Foodly
      </h3>
      <form
        className="w-50 mx-auto"
        onSubmit={handleSubmit(onSubmit)}
        style={{ maxWidth: 600 }}
      >
        {/* name of the food */}
        <input
          className="w-75 mb-3 d-block mx-auto form-control"
          placeholder="food name"
          {...register('name', {
            required: 'this field is required',
            minLength: {
              value: 3,
              message: 'food name should be bigger than 3 characters',
            },
            maxLength: {
              value: 9,
              message: "food name can't exceed 6 characters",
            },
          })}
        />
        {errors.name && (
          <p className="text-danger mb-3 w-75 mx-auto">{errors.name.message}</p>
        )}

        <textarea
          placeholder="about the food"
          className="w-75 mb-3 d-block mx-auto form-control"
          {...register('food', {
            required: 'this field is required',
            minLength: {
              value: 3,
              message: 'at least add something about the food',
            },
            maxLength: {
              value: 16,
              message: "don't add too much info about the food.",
            },
          })}
        />
        {errors.food && (
          <p className="text-danger mb-3 w-75 mx-auto">{errors.food.message}</p>
        )}

        {/* price of the food */}
        <input
          className="w-75 mb-3 d-block mx-auto form-control"
          type="number"
          placeholder="food price"
          {...register('price', {
            required: 'this field is required',
            min: {
              value: 50,
              message: 'price should be between 50 to 5000',
            },
            max: {
              value: 5000,
              message: 'rating should be between 50 to 5000',
            },
          })}
        />
        {errors.price && (
          <p className="text-danger mb-3 w-75 mx-auto">
            {errors.price.message}
          </p>
        )}

        {/* image url of the food */}
        <input
          className="w-75 mb-3 d-block mx-auto form-control"
          placeholder="Image url"
          {...register('image', {
            required: 'this field is required',
          })}
        />
        {errors.image && (
          <p className="text-danger mb-3 w-75 mx-auto">
            {errors.image.message}
          </p>
        )}

        {/* rating of the food */}
        <input
          type="number"
          className="w-75 mb-3 d-block mx-auto form-control"
          placeholder="food rating"
          {...register('rating', {
            required: 'this field is required',
            min: {
              value: 0,
              message: 'rating should be between 0 to 5',
            },
            max: {
              value: 5,
              message: 'rating should be between 0 to 5',
            },
          })}
        />
        {errors.rating && (
          <p className="text-danger mb-3 w-75 mx-auto">
            {errors.rating.message}
          </p>
        )}

        {/* Ingredients of food */}
        <textarea
          placeholder="add comma seperated ingredient names and don't use space after comma (Ex: tomato salad,onion,radish)"
          className="w-75 mb-3 d-block mx-auto form-control"
          {...register('ingredients', {
            required: 'this field is required',
            minLength: {
              value: 3,
              message: 'at least add one ingredient',
            },
            maxLength: {
              value: 30,
              message: "don't add too much ingredients",
            },
          })}
        />
        {errors.ingredients && (
          <p className="text-danger mb-3 w-75 mx-auto">
            {errors.ingredients.message}
          </p>
        )}

        <input
          className="btn btn-primary text-white w-50 d-block mx-auto"
          type="submit"
          value="add food"
        />
      </form>
    </div>
  );
};

export default AddFood;
