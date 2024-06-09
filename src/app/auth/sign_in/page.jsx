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
import bcrypt from "bcryptjs";


const API_KEY = `${process.env.API_KEY}/users`;

function SignIn() {
    const router = useRouter();
    const [error, setError] = useState();

    const validation = async (formData) => {
        const userName = formData.get("userName"),
            password = formData.get("password");
        
        await axios.post(`${process.env.API_KEY}/auth/sign_in`, {
            userName,
            password
        }).then(({data}) => {
            if (data.status === 200) {
                Cookies.set('user_id', data.user._id);
                router.push('/');
            }else {
                setError(data.msg);
            }
        })

    }

    return (
        <SignPage>
            <form action={validation} className='grid gap-y-2'>
                <h1 className='center font-extrabold'>sign In</h1>
                { error ? ( 
                <div className="bg-red-100 border flex items-center border-red-400 text-red-700 px-4 py-2 rounded relative" role="alert">
                    <span className="block sm:inline">{error}</span>
                    <span className="absolute right-3" onClick={() => setError()}>
                        <svg className="fill-current size-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                    </span>
                </div>
                ) : ''} 
                <div className='grid gap-y-4'>
                    <Input name="userName" placeholder="User name" autoFocus={true}><FaUserAlt /></Input>
                    <Input name="password" placeholder="Password" isPasswordFeild={true}><RiLockPasswordFill /></Input>
                </div>
                <button type='submit' className='w-full bg-blue-500 text-white font-semibold py-2 px-4 border border-blue-500 rounded'>submit</button>
            </form>
            <span className='text-sm text-gray-500'>Not registered? <Link href="/auth/sign_up" className="hover:underline text-blue-500 font-semibold">Sign up</Link></span>
        </SignPage>
    )
}

export default SignIn;