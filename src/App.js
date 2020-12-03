import React, {useState} from "react";
// Components imports
import Ingredient from "./components/Ingredient";
import BurgerPane from "./components/BurgerPane";
// CSS imports
import "./css/App.css";

const App = () => {
  // since this doesn't change I'm not making it a state
  const ingredients = [
  { name: "Kaiser Bun", color: "saddlebrown" },
  { name: "Sesame Bun", color: "sandybrown" },
  { name: "Gluten Free Bun", color: "peru" },
  { name: "Lettuce Wrap", color: "olivedrab" },
  { name: "Beef Patty", color: "#3F250B" },
  { name: "Soy Patty", color: "#3F250B" },
  { name: "Black Bean Patty", color: "#3F250B" },
  { name: "Chicken Patty", color: "burlywood" },
  { name: "Lettuce", color: "lawngreen" },
  { name: "Tomato", color: "tomato" },
  { name: "Bacon", color: "maroon" },
  { name: "Onion", color: "lightyellow" },
  // I am highly offended that cheese was not included. I have fixed it.
  { name: 'Cheeeeeese', color: "yellow"}
];

  // bgi === burger ingredients :)
  const [bgi, setBgi] = useState([])

  const addIngredient = (ingred) => {
    setBgi([ingred,...bgi])
  }
  const clearBurger = () => {
    setBgi([])
  }


  return (
    <div className="App">
      <div className="Panel">
      <h1>Build Your Burger</h1>
      {ingredients.map((ingredient,idx)=>(
        <Ingredient
          ingredient={ingredient}
          key={idx}
          addIngredient={addIngredient}/>
        ))}
      </div>
      <div className="Panel">
        <BurgerPane
          bgi={bgi}
          clearBurger={clearBurger} />
      </div>
    </div>
  );
};

export default App;
