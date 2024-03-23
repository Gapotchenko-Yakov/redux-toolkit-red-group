import React from "react";
import styles from "./RecipeItem.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../store/favorites/favorites.slice";
import { useActions } from "../../hooks/useActions";
import { useFavorites } from "../../hooks/useFavorites";
import { IRecipe } from "../../types/recipe.types";

interface IRecipeItem {
  recipe: IRecipe;
}

const RecipeItem = ({ recipe }: IRecipeItem) => {
  const favorites = useFavorites();

  const isInFavorites = favorites.some((r) => r.id === recipe.id);

  // const dispatch = useDispatch();
  const { toggleFavourites } = useActions();

  return (
    <div className={styles.item}>
      <img src={recipe.image} alt={recipe.name} />
      <h3>{recipe.name}</h3>
      <button onClick={() => toggleFavourites(recipe)}>
        {isInFavorites ? "Remove from" : "Add to"} favorites
      </button>
    </div>
  );
};

export default RecipeItem;
