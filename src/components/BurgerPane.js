import React from "react";
import BurgerStack from './BurgerStack.js'

const BurgerPane = ({bgi, clearBurger}) => {

  return(
    <>
    <BurgerStack bgi={bgi}/>
    <button onClick={clearBurger}>Clear</button>
    </>

  )
};

export default BurgerPane;
