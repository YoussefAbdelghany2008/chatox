"use client"

import Image from "next/image";
import Link from "next/link";
import useUser from "@/hooks/useUser";
import signOut from "@/utils/auth/signOut";

export default function Home() {

    const { isLoading, user } = useUser();

    if (!isLoading) {
        return (
            <main className="center h-screen bg-slate-200">
                <div className="grid items-center gap-y-4 shadow bg-white rounded p-4">
                    <Image
                        src={user.avatar}
                        width={200}
                        height={200}
                        alt={user.fName + ' ' + user.lName}
                        className="rounded-full border-2 bordeer-blue-500"
                    />
                    <h1>{user.fName + ' ' + user.lName}</h1>
                    <button onClick={() => { signOut() }} className="bg-blue-500 text-white px-4 py-2 rounded"> logout</button>
                    <Link href="/chat" className="px-4 py-2 rounded text-white bg-blue-500"> chat with ai !! 😎😎😎</Link>
                    <Link href="/about" className="p-4 bg-current text-white rounded">home</Link>
                </div>
            </main>
        );
    } else {
        return (
            <main className="center h-screen">
                <h1 className="text-current font-xl">Loading...</h1>
            </main>
        )
    }
}
