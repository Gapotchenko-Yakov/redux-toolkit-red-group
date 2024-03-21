import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavourites: (state, { payload: recipe }) => {
      const exists = state.some((r) => r.id === recipe.id);

      if (exists) {
        const index = state.findIndex((r) => r.id === recipe.id);
        if (index !== -1) {
          state.splice(index, 1);
        }
      } else {
        state.push(recipe);
      }
    },
  },
});

export const { actions, reducer } = favoritesSlice;
