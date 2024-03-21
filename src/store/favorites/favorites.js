import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    toggleFavourites: (state, { payload: recipe }) => {
      const exists = state.some((r) => r.id === recipe.id);

      if (exists) {
        state = state.filter((r) => r.id !== recipe.id);
      } else {
        state.push(recipe);
      }
    },
  },
});

export const { actions, reducer } = favoritesSlice;
