"use client"

import { useState, useEffect } from "react";
import { redirect } from "next/navigation";
import axios from "axios";

export default function Layout({ children }) {

    const [userId, setUserId] = useState();
    const [isRegistered, setIsRegistered] = useState(false);

    const content = (
        <>
            {children}
        </>
    );

    useEffect(() => {
        let storage = localStorage.getItem("userId");
        if (storage && storage != false) {
                    setUserId(storage);
                    setIsRegistered(true)
        }else { 
            storage =false;
            if (storage == false && window.location.pathname == '/') {
                setIsRegistered(true)
            }else {
                const routes = window.location.pathname.split('/');

                routes[1] != ('auth' || 'api') ? redirect("/auth/sign_in") : setIsRegistered(true)
            }
        }
    }, [userId]);

    if (isRegistered) {
        return content;
    } 

}
