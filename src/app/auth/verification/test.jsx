import { useSession } from "next-auth/react";
import axios from "axios";
import { redirect } from 'next/navigation';
import { cookies } from "next/headers";

const USERS_API = `${process.env.API_KEY}/users`;

export default async function Verification() {
    const { data: session, status } = useSession({ required: true, onUnauthenticated() { router.push('/auth/sign_in'); }, });
    if (status !== "loading") {
        let user = session.user;
        axios.get(USERS_API).then(async ({ data: users }) => {
            const userDB = users.filter(u => u.email == user.email)[0];
            if (!userDB) {
                axios.post(USERS_API, {
                    fName: user.name.split(' ')[0],
                    lName: user.name.split(' ')[1],
                    userName: '',
                    password: '',
                    avatar: user.image,
                    email: user.email,
                }).then(async ({ data: user }) => {
                    cookies().set("userId", await user._id);
                    router.push("/")
                })

            } else {
                cookies().set("user_id", userDB._id);
                router.push("/")
            }
        })

    }

    return (
        <main className="center w-screen h-screen">
            <div aria-label="Loading..." role="status" class="flex items-center space-x-2">
                <svg class="h-20 w-20 animate-spin stroke-gray-500" viewBox="0 0 256 256">
                    <line x1="128" y1="32" x2="128" y2="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                    <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="24"></line>
                    <line x1="224" y1="128" x2="192" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
                    </line>
                    <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="24"></line>
                    <line x1="128" y1="224" x2="128" y2="192" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
                    </line>
                    <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="24"></line>
                    <line x1="32" y1="128" x2="64" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                    <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
                    </line>
                </svg>
                <span class="text-4xl font-medium text-gray-500">Loading...</span>
            </div>
        </main>
    );
}