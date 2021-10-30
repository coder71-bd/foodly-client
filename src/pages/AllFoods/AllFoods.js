import React from 'react';
import useFood from '../../hooks/useFood';
import Food from '../Shared/Food/Food';

const Foods = () => {
  const [foods] = useFood();

  return (
    <section className="d-flex flex-wrap justify-content-evenly">
      {foods.map((food) => (
        <Food key={food._id} food={food} />
      ))}
    </section>
  );
};

export default Foods;
