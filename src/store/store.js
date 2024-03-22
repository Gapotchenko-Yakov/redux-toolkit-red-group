import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as favoriteReducer } from "./favorites/favorites.slice";
import { userSlice } from "./user/user.slice";

const reducers = combineReducers({
  favorites: favoriteReducer,
  user: userSlice.reducer,
});

export const store = configureStore({
  reducer: reducers,
});
