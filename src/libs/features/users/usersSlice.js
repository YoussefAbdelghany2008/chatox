import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get(`${process.env.API_KEY}/users`);
    const data = await response.data;
    return data;
});

const initialState = {
    isLoading: true,
    users: [],
    error: null,
    status: "requested",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        createUser: (state, action) => {
            const user = action.payload;
            state.users.push(user);
        },
        removeUser: (state, action) => {
            const id = action.payload;
        },
        updateUser: (state, action) => {},
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchUsers.pending, (state) => {
            state.isLoading = true;
            state.status = "loading";
          })
          .addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.status = "succeed";
            state.users = action.payload;
          })
          .addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.status = 'failed';
            state.error = action.error.message;
          });
      },
});

export const { createUser, removeUser, updateUser } = userSlice.actions;
export default userSlice.reducer;