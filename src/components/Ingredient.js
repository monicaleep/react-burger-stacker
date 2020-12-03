import React from "react";

const Ingredient = ({ingredient, addIngredient}) => {

  return <div>
  {ingredient.name}
  <button onClick={()=>addIngredient(ingredient)}>Add</button>
  </div>;
};

export default Ingredient;
