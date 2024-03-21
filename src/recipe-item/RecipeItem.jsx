import React from "react";
import styles from "./RecipeItem.module.scss";

const RecipeItem = ({ recipe }) => {
  return (
    <div className={styles.item}>
      <h3>{recipe.name}</h3>
      <button>Add Top</button>
    </div>
  );
};

export default RecipeItem;
