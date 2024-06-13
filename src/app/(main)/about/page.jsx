"use client"

import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from 'js-cookie';
import { useRouter } from "next/navigation";
import Link from "next/link";
import Layout from "@/components/layout";

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
                    <main className="center h-screen bg-slate-200">
                        <h1>About</h1>
                        <Link href="/" className="p-4 bg-current text-white rounded">home</Link>
                    </main>
            </>
        );
    }
}
