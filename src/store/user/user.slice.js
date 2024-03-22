import { createSlice } from "@reduxjs/toolkit";
import { getUserById } from "./user.actions";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    error: null,
    user: { id: 1, name: "Jack", age: 22 },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.user = {};
      })
      .addCase(getUserById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.user = payload;
      })
      .addCase(getUserById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.error;
        state.user = {};
      });
  },
});

export const { actions, reducer } = userSlice;
