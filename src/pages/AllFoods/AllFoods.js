import React from 'react';
import useFood from '../../hooks/useFood';
import Food from '../Shared/Food/Food';

const Foods = ({ handleOrderNow }) => {
  const [foods] = useFood();

  return (
    <section className="d-flex flex-wrap justify-content-evenly">
      {foods.map((food) => (
        <Food key={food._id} food={food} handleOrderNow={handleOrderNow} />
      ))}
    </section>
  );
};

export default Foods;
