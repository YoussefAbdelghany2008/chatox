"use client"

import { useState } from 'react'
import SignPage from '@/components/signPage'
import Link from 'next/link';
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import Input from '@/components/signPage/input';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const API_KEY = `${process.env.API_KEY}/users`;

function signIn() {
    const router = useRouter();
    const [error, setError] = useState();

    const [userNameStatus, setUserNameStatus] = useState();
    const [passwordStatus, setPasswordStatus] = useState();


    const validation = async (formData) => {
        const userName =formData.get("userName"),
        password = (formData.get("password"));
        if (!userName) {
            setError("Please enter your user name")
            setUserNameStatus('error')
        }else {
            setError();
            setUserNameStatus()
        }

        if (!password) {
            setPasswordStatus('error')
            setError("Please enter your password")
        }else {
            setError()
            setPasswordStatus()
        }

        if (userName && password) {
            await axios.get(API_KEY).then( ({data: users}) => {
                const user = users.filter(u => u.userName == userName)[0]; // && u.password == password
                if (user) {
                    if (user.password == password ) {
                        Cookies.set('user_id', user._id);
                        router.push('/');
                    }else {
                        setPasswordStatus('error')
                        setError("password is wrong")
                    }
                }else {
                    setUserNameStatus('error')
                    setError("user name is wrong")
                }
            })
        }
    }

    return (
        <SignPage>
           <form action={validation} className='grid gap-y-2'>
            <h1 className='center font-extrabold'>sign In</h1>
                <div className='grid gap-y-4'>
                    <Input status={userNameStatus} name="userName" placeholder="User name" autoFocus={true}><FaUserAlt /></Input>
                    <Input status={passwordStatus} name="password" placeholder="Password" isPasswordFeild={true}><RiLockPasswordFill /></Input>
                </div>
                <button type='submit' className='w-full bg-blue-500 text-white font-semibold py-2 px-4 border border-blue-500 rounded'>submit</button>
           </form>
           <span className='text-sm text-gray-500'>Not registered? <Link href="/auth/sign_up" className="hover:underline text-blue-500 font-semibold">Sign up</Link></span>
        </SignPage>
    )
}

export default signIn;