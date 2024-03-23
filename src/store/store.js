import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as favoriteReducer } from "./favorites/favorites.slice";
import { userSlice } from "./user/user.slice";
import { recipeApi } from "../store/api/recipe.api";
import { createLogger } from "redux-logger";

const logger = createLogger({
  // collapsed: true,
});

const reducers = combineReducers({
  favorites: favoriteReducer,
  user: userSlice.reducer,
  [recipeApi.reducerPath]: recipeApi.reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(recipeApi.middleware).concat(logger),
});
