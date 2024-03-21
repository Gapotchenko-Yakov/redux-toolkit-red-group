import React from "react";
import styles from "./RecipeItem.module.scss";
import { useDispatch } from "react-redux";
import { actions } from "../store/favorites/favorites";

const RecipeItem = ({ recipe }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.item}>
      <h3>{recipe.name}</h3>
      <button onClick={() => dispatch(actions.toggleFavourites(recipe))}>
        Add Top
      </button>
    </div>
  );
};

export default RecipeItem;
