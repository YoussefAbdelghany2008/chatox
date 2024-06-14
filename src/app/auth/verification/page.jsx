"use client"

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import useUsers from "@/hooks/useUsers";
import Loading from "@/components/loading";

import useSignIn from "@/hooks/useSignIn";
import useSignUp from "@/hooks/useSignUp";


export default function Verification() {

    const { users, isLoading } = useUsers(),
    [ isRegistered, setIsRegistered] = useState(false),
    signUp = useSignUp(),
    signIn = useSignIn(),
    { data: session, status } = useSession({ required: true, onUnauthenticated() { router.push('/auth/sign_in'); }, });

    useEffect(() => {

            if (status !== "loading" && !isLoading) {
                if (!isRegistered) {
                    setIsRegistered(true);
                    let { name, image, email } = session.user;
                    const user = users.find(u => u.email == email);
                    if (!user) {
                        signUp({
                            fName: name.split(' ')[0],
                            lName: name.split(' ')[1],
                            avatar: image,
                            email: email
                        });
                    } else signIn(user._id)
                }
            }
    }, [session, status])

    return <Loading />;
}