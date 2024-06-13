import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMessages = createAsyncThunk('messages/fetchMessages', async () => {
    const response = await axios.get(`${process.env.API_KEY}/messages`);
    const data = await response.data;
    return data;
});

const initialState = {
    isLoading: true,
    messages: [],
    error: null,
    status: "requested",
};

const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        createMessage: (state, action) => {
            const message = action.payload;
            state.messages.push(message);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMessages.pending, state => {
            state.isLoading = true;
            state.status = "loading"
        })
        .addCase(fetchMessages.fulfilled, (state, action) => {
            state.isLoading = false;
            state.status = "succeed";
            state.messages = action.payload;
        })
        .addCase(fetchMessages.rejected, (state, action) => {
            state.isLoading = false;
            state.status = "failed";
            state.error = action.error.message;
        })
    }
});

export const { createMessage } = messageSlice.actions;
export default messageSlice.reducer;