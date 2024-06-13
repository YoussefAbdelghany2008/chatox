import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

// Import Reducers

import userReducer from "@/libs/features/users/usersSlice";
import messageReducer from "@/libs/features/messages/messageSlice";

export const store = configureStore({
    reducer: {
        users: userReducer,
        messages: messageReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware(thunk)
});