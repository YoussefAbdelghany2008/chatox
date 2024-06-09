"use client"

import Image from "next/image";
import "./page.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from 'js-cookie';
import { useRouter } from "next/navigation";

export default function Home() {
    const [user, setUser] = useState();
    const router = useRouter();

    useEffect(() => {
        (async () => {
            await axios.get(`${process.env.API_KEY}/users/${Cookies.get("user_id")}`).then(async res => setUser(await res.data))
        })()
    })
    if (user) {
        return (
            <>
                <main className="center w-screen h-screen">
                    <div className="grid gap-y-4">
                        <Image 
                            src={user.avatar}
                            width={200}
                            height={200}
                            alt={user.fName + ' ' + user.lName}
                            className="rounded-full"
                        />
                        <h1>{user.fName + ' ' + user.lName}</h1>
                        <button onClick={() => {Cookies.remove('user_id'); router.push('/auth/sign_up')}} className="bg-blue-500 px-4 py-2 rounded"> logout</button>
                    </div>
                </main>
            </>
        );
    }
}
