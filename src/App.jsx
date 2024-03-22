import { useState } from "react";
import "./App.css";
import RecipeItem from "./components/recipe-item/RecipeItem";
import { useSelector } from "react-redux";
import Header from "./components/header/Header";
import { useFavorites } from "./hooks/useFavorites";
import User from "./components/user/User";
import { useGetRecipesQuery } from "./store/api/recipe.api";

function App() {
  // const recipes = [
  //   { id: 0, name: "Лазанья" },
  //   { id: 1, name: "Суши" },
  //   { id: 2, name: "Роллы" },
  //   { id: 3, name: "Пицца" },
  // ];
  const { data: recipes, isLoading, error } = useGetRecipesQuery();
  console.log("🚀 ~ App ~ recipes:", recipes);

  return (
    <section>
      <Header />
      {/* <User /> */}
      <div>
        {isLoading ? (
          <div> Loading </div>
        ) : error ? (
          <div> Error: {error.message} </div>
        ) : (
          <div>
            {recipes?.map((recipe) => (
              <RecipeItem recipe={recipe} key={recipe.id} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default App;
