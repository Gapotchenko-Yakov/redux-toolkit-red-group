import React, { useState } from "react";
import styles from "./CreateRecipe.module.scss";
import { useCreateRecipeMutation } from "../../store/api/recipe.api";

const defaultValue = {
  name: "",
  image: "",
};

const CreateRecipe = () => {
  const [recipe, setRecipe] = useState(defaultValue);

  const [createRecipe, result] = useCreateRecipeMutation();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("recipe", recipe);
    createRecipe(recipe).then(() => setRecipe(defaultValue));
  };

  return (
    <div>
      <form className={styles.creationForm} onSubmit={handleOnSubmit}>
        <div>
          <input
            type="text"
            name="recipe-name"
            value={recipe.name}
            onChange={(e) => setRecipe({ ...recipe, name: e.target.value })}
          />
          <br />
          <input
            type="text"
            name="recipe-image"
            value={recipe.image}
            onChange={(e) => setRecipe({ ...recipe, image: e.target.value })}
          />
        </div>

        <button className={styles.creationButton} type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateRecipe;
