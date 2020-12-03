import React from "react";
import Ingredient from './Ingredient.js'



const IngredientList = ({ingredients, addIngredient}) => {
  const arrayofIngs = ingredients.map((ingred,index)=>{
     return <Ingredient ingredient={ingred} key={index} addIngredient={addIngredient}/>
  })
  return (
    <div>
      {arrayofIngs}
    </div>
  );
};

export default IngredientList;
