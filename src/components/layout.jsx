"use client"

import { redirect } from "next/navigation";
import { useState, useEffect } from "react";

export default function Layout({ children }) {

    const content = (
        <>
            {children}
        </>
    );    

    const [userId, setUserId] = useState();
    const [isRegistered, setIsRegistered] = useState(false);
    useEffect(() => {
        const storage = localStorage.getItem("userId");
        if (storage) {
            setUserId(storage);
            setIsRegistered(true)
            return content;
        }else {
            const routes = window.location.pathname.split('/');
            routes[1] != ('auth' || 'api') ? (redirect("/auth/sign_in") & setIsRegistered(false)) : setIsRegistered(true)
        }
    }, [userId]);

    if (isRegistered) {
        return content;
    } 

}
