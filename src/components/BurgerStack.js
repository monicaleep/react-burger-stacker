import React from "react";
import BurgerIngredient from './BurgerIngredient'

const BurgerStack = ({bgi}) => {
  const arrayofIngs = bgi.map((ingred,index)=>{
     return <BurgerIngredient ingredient={ingred} key={index}/>
  })
  return (
    <div>
      {arrayofIngs}
    </div>
  );
};


export default BurgerStack;
