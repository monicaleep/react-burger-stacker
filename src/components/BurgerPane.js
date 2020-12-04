import React from "react";
import '../css/components/BurgerPane.css'

const BurgerPane = ({bgi, clearBurger}) => {

  return (
    <>
    <div>

      {bgi.map((burgerlayer,idx)=>(
        <div
          style={{backgroundColor:burgerlayer.color}}
          className='BurgerIngredient'>
          {burgerlayer.name}
        </div>
      )
    )}

    </div>
    <div style={{backgroundColor:'grey'}}>Plate</div>
    <button className="button--clear" onClick={clearBurger}>
      Clear
    </button>
    </>

  )
};

export default BurgerPane;
