import { useState } from "react";
import "./App.css";
import RecipeItem from "./recipe-item/RecipeItem";
import { useSelector } from "react-redux";

function App() {
  // const recipes = useSelector((state) => state);
  const recipes = [
    { id: 0, name: "Лазанья" },
    { id: 1, name: "Суши" },
    { id: 2, name: "Роллы" },
    { id: 3, name: "Пицца" },
  ];

  return (
    <div>
      <h1>Recipe App</h1>
      <div>
        {recipes?.map((recipe) => (
          <RecipeItem recipe={recipe} key={recipe.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
