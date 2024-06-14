"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link';
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";

import useUsers from '@/hooks/useUsers';
import bcrypt from "bcryptjs";


import Input from '@/components/signPage/input';
import Spinner from '@/components/loading/spinner';
import useSignIn from "@/hooks/useSignIn";

function SignIn() {
    const [err, setError] = useState();
    const [ showLoading, setShowLoading ] = useState(false);
    const [ formData, setFormData ] = useState(false);
    const { users, isLoading } = useUsers();
    const signIn = useSignIn();
    const validation = async (formData) => {
        setShowLoading(true);
        const userName = formData.get("userName"),
            password = formData.get("password");
            if (userName) {
                if (password) {
                    setFormData({
                        userName,
                        password
                    });

                }else {
                    setError("please enter your password");
                    setShowLoading(false);
                }
            }else {
                setError("please enter your userName");
                setShowLoading(false);
            }
    }

    useEffect(() => {
        if (formData) {
            if (!isLoading) {
                const userName = formData.userName,
                password = formData.password;
                let user = users.find( u => u.userName == userName);
                if (user) {
                        (async () => {
                            const isMatch = await bcrypt.compare(password, user.password);
                            if (isMatch) { signIn(user._id) }else {
                                setError("password is wrong");
                                setShowLoading(false);
                            }
                        })()
                }else {
                    setError("user name is wrong");
                    setShowLoading(false);
                }
            }
        }
    }, [isLoading, formData])

    return (
        <>
            <form action={validation} className='grid gap-y-2'>
                <h1 className='center font-extrabold'>sign In</h1>
                { err ? ( 
                <div className="bg-red-100 border flex items-center border-red-400 text-red-700 px-4 py-2 rounded relative" role="alert">
                    <span className="block sm:inline">{err}</span>
                    <span className="absolute right-3" onClick={() => setError()}>
                        <svg className="fill-current size-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                    </span>
                </div>
                ) : ''} 
                <div className='grid gap-y-4'>
                    <Input name="userName" placeholder="User name" autoFocus={true}><FaUserAlt /></Input>
                    <Input name="password" placeholder="Password" isPasswordFeild={true}><RiLockPasswordFill /></Input>
                </div>
                <button type='submit' className='w-full center gap-x-2 bg-current text-white font-semibold py-2 px-4 border border-current rounded'>
                    { showLoading ? <Spinner /> : '' }
                    submit
                </button>
            </form>
            <span className='text-sm text-gray-500'>Not registered? <Link href="/auth/sign_up" className="hover:underline text-current font-semibold">Sign up</Link></span>
        </>
    )
}

export default SignIn;
