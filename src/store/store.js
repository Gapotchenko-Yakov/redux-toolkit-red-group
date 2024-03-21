import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./favorites/favorites";

export const store = configureStore({
  reducer: reducer,
});
