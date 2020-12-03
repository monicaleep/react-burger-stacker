import React from "react";

const BurgerPane = ({bgi, clearBurger}) => {
  const arrayOfBgi = bgi.map((burgerlayer,idx)=>{
    return <div style={{backgroundColor:burgerlayer.color}}>{burgerlayer.name}</div>
  })
  return(
    <>
    {arrayOfBgi}
    <button onClick={clearBurger}>Clear</button>
    </>

  )
};

export default BurgerPane;
