"use client"
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const USERS_API = `${process.env.API_KEY}/users`;

export default function Verification() {
    // const [ isRegistered, setIsRegistered ] = useState(false); 
    const { data: session, status } = useSession({ required: true, onUnauthenticated() { router.push('/auth/sign_in'); }, });
    const router = useRouter();
    useEffect(() => {
            (async () => {
                let userId = Cookies.get('user_id');
                if (!userId) {
                    if (status !== "loading") {
                        // if (!isRegistered) {
                            // setIsRegistered(true);
                            let user = session.user;
                            axios.get(USERS_API).then(async ({ data: users }) => {
                            const userDB = users.filter(u => u.email == user.email)[0];
                            if (!userDB) {
                                axios.post(USERS_API, {
                                    fName: user.name.split(' ')[0],
                                    lName: user.name.split(' ')[1],
                                    avatar: user.image,
                                    email: user.email,
                                }).then(({data: user}) => {
                                    Cookies.set("user_id", user._id);
                                    router.push("/");
                                })
    
                            } else {
                                Cookies.set("user_id", userDB._id);
                                router.push("/")
                            }
                        }
                        )
                    // }
                    }
                } else router.push("/")
            })();
    }, [session, status])

    return (
        <main className="center w-screen h-screen">
            <div aria-label="Loading..." role="status" className="flex items-center space-x-2">
                <svg className="h-20 w-20 animate-spin stroke-gray-500" viewBox="0 0 256 256">
                    <line x1="128" y1="32" x2="128" y2="64" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                    <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" strokeLinecap="round" strokeLinejoin="round"
                        strokeWidth="24"></line>
                    <line x1="224" y1="128" x2="192" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
                    </line>
                    <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" strokeLinecap="round" strokeLinejoin="round"
                        strokeWidth="24"></line>
                    <line x1="128" y1="224" x2="128" y2="192" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
                    </line>
                    <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" strokeLinecap="round" strokeLinejoin="round"
                        strokeWidth="24"></line>
                    <line x1="32" y1="128" x2="64" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                    <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
                    </line>
                </svg>
                <span className="text-4xl font-medium text-gray-500">Loading...</span>
            </div>
        </main>
    );
}