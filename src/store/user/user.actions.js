import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchUserById = (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: 0, name: "John", age: 30 }), 1000);
  });
};

export const getUserById = createAsyncThunk(
  "users/getById",
  async (userId, thunkApi) => {
    try {
      const response = await fetchUserById(userId);
      console.log("🚀 ~ response:", response);
      //   const data = await response.json();
      return response;
    } catch (e) {
      thunkApi.rejectWithValue(e);
    }
  }
);
