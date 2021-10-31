import React from 'react';
import useFood from '../../../hooks/useFood';
import Food from '../../Shared/Food/Food';

const Foods = ({ handleOrderNow }) => {
  const [foods] = useFood();

  // loader
  if (foods.length === 0) {
    return (
      <div
        className=" d-flex justify-content-center align-items-center my-3 "
        style={{ minHeight: 'calc(100vh - 200px)' }}
      >
        <div className="spinner-border text-info my-5" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <section className="d-flex flex-wrap justify-content-evenly">
      {foods.map((food) => (
        <Food key={food._id} food={food} handleOrderNow={handleOrderNow} />
      ))}
    </section>
  );
};

export default Foods;
