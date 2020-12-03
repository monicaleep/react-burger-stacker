import React, {useState} from "react";
// Components imports
import IngredientList from "./components/IngredientList";
import BurgerPane from "./components/BurgerPane";
// CSS imports
import "./css/App.css";

const App = () => {
  const [ingredients, setIngredients] = useState([
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
]);

  const [bgi, setBgi] = useState([])

  const addIngredient = (ingred) => {
    setBgi([ingred,...bgi])
  }
  const clearBurger = () => {
    setBgi([])
  }
  return (
    <div className="App">
    <div>
    <IngredientList ingredients={ingredients} addIngredient={addIngredient}/>
    </div>
      <div>
      <BurgerPane bgi={bgi} clearBurger={clearBurger} />
      </div>

    </div>
  );
};

export default App;
