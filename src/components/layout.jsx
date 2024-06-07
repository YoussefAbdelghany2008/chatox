"use client"

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie';

export default function Layout({ children }) {
    const router = useRouter();
    const [isRegistered, setIsRegistered] = useState(false);

    const content = (
        <>
            {children}
        </>
    );

    useEffect(() => {
        const routes = window.location.pathname.split('/');
        let userId = Cookies.get("user_id");
        if (userId) {
             routes[1] == ('auth') ? router.push("/") : setIsRegistered(true)
        }else { 
                routes[1] != ('auth') ? router.push("/auth/sign_in") : setIsRegistered(true)
        }
    }, []);

    if (isRegistered) { return content  } 

}
