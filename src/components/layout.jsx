"use client"

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Cookies from 'js-cookie';
import Loading from "@/components/loading";

export default function Layout({ children }) {
    const router = useRouter();
    const pathname = usePathname().split("/")[1];
    const [content, setContent] = useState(<Loading />);

    useEffect(() => {
        if (Cookies.get("user_id")) {
             pathname == 'auth' ? router.push("/") : setContent(children)
        }else { 
                pathname != 'auth' ? router.push("/auth/sign_in") : setContent(children)
        }
    })
    
    return content
}
