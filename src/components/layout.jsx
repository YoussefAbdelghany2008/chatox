"use client"

import { useDispatch } from "react-redux";
import { fetchUsers } from "@/libs/features/users/usersSlice";
import { fetchMessages } from "@/libs/features/messages/messageSlice";
import { useEffect } from "react";

import { SessionProvider } from "next-auth/react";

import { Provider } from 'react-redux';
import { store } from "@/libs/store";

const UseRedux = ({children}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsers());
        dispatch(fetchMessages());
    }, [dispatch]);

    return children;
};


export default function RootLayout({ children }) {
    return (
        <Provider store={store}>
            {/* <SessionProvider> */}
                <UseRedux>{children}</UseRedux>
            {/* </SessionProvider> */}
        </Provider>
    );
}
