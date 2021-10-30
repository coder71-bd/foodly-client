import axios from 'axios';
import { useEffect, useState } from 'react';

const useFood = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios
      .get('https://infinite-woodland-69947.herokuapp.com/')
      .then((response) => setFoods(response.data));
  }, []);

  return [foods, setFoods];
};

export default useFood;
