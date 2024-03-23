import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getUserById } from "./user.actions";
import { IInitialUserState, IUser } from "../../types/user.types";

const initialState: IInitialUserState = {
  isLoading: false,
  error: null,
  user: { id: 1, name: "Jack", age: 22 },
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.user = {} as IUser;
      })
      .addCase(
        getUserById.fulfilled,
        (state, { payload }: PayloadAction<IUser>) => {
          state.isLoading = false;
          state.error = null;
          state.user = payload;
        }
      )
      .addCase(getUserById.rejected, (state, { payload }: any) => {
        state.isLoading = false;
        state.error = payload.error;
        state.user = {} as IUser;
      });
  },
});

export const { actions, reducer } = userSlice;
