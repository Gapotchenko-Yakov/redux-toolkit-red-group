import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "../../types/user.types";

const fetchUserById = (userId: number): Promise<IUser> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: 0, name: "John", age: 30 }), 1000);
  });
};

export const getUserById = createAsyncThunk<IUser, number>(
  "users/getById",
  async (userId, thunkApi) => {
    try {
      const response = await fetchUserById(userId);
      console.log("🚀 ~ response:", response);
      //   const data = await response.json();
      return response;
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);
