import React from "react";
import styles from "./RecipeItem.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../store/favorites/favorites.slice";
import { useActions } from "../hooks/useActions";

const RecipeItem = ({ recipe }) => {
  const favorites = useSelector((state) => state.favorites);

  const isInFavorites = favorites.some((r) => r.id === recipe.id);

  // const dispatch = useDispatch();
  const { toggleFavourites } = useActions();
  console.log("🚀 ~ RecipeItem ~ actions:", actions);

  return (
    <div className={styles.item}>
      <h3>{recipe.name}</h3>
      <button onClick={() => toggleFavourites(recipe)}>
        {isInFavorites ? "Remove from" : "Add to"} favorites
      </button>
    </div>
  );
};

export default RecipeItem;
