import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
    loading: false,
    users: [],
    error: null,
};

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
});

export default userSlice.reducer;