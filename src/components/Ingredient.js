import React from "react";
import '../css/components/Ingredient.css'
const Ingredient = ({ingredient, addIngredient}) => {

  return (
    <div className="Ingredient">
      {ingredient.name}
      <button
        onClick={()=>addIngredient(ingredient)}>
        >>
      </button>
    </div>
  )
};

export default Ingredient;
