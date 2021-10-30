const Ingredients = ({ ingridient }) => {
  const colors = ['#0a0ac9', '#078f56', '#ab0e32', '#054166'];
  return (
    <h5 className="d-flex flex-wrap text-white text-center">
      {ingridient.map((ingr, i) => (
        <span
          key={i}
          className="m-1 py-1 border rounded-pill w-100"
          style={{
            fontSize: 13,
            backgroundColor: colors[i],
          }}
        >
          {ingr}
        </span>
      ))}
    </h5>
  );
};

export default Ingredients;
