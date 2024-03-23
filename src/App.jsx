import { useState } from "react";
import "./App.css";
import RecipeItem from "./components/recipe-item/RecipeItem";
import { useSelector } from "react-redux";
import Header from "./components/header/Header";
import { useFavorites } from "./hooks/useFavorites";
import User from "./components/user/User";
import { useGetRecipesQuery } from "./store/api/recipe.api";
import CreateRecipe from "./components/create-recipe/CreateRecipe";

const userId = 1;

function App() {
  const {
    data: recipes,
    isLoading,
    error,
  } = useGetRecipesQuery(undefined, {
    skip: !userId,
  });

  return (
    <section>
      <Header />
      {/* <User /> */}
      <CreateRecipe />
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
