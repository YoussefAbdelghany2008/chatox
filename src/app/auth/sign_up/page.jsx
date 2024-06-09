"use client"

import { useState } from 'react'
import SignPage from '@/components/signPage'
import Link from 'next/link';
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { MdDriveFileRenameOutline } from "react-icons/md";
import Input from '@/components/signPage/input';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

function SignUp() {
    const router = useRouter();
    const [error, setError] = useState();
    const [isUserCreated, setIsUserCreated] = useState();

    const validation = async (formData) => {
        const fName = formData.get("fName"),
        lName = formData.get("lName"),
        userName = formData.get("userName"),
        password = formData.get("password");
        
        await axios.post(`${process.env.API_KEY}/users`, {
            fName,
            lName,
            userName,
            password,
            avatar: '/user.png',
            email: ''
        }).then(({data}) => {
            if (data.status === 200) {
                if (!isUserCreated) {
                    setIsUserCreated(true);
                    Cookies.set('user_id', data.user._id);
                    router.push('/');
                }
            }else {
                setError(data.msg)
            }
        })
    };

    return (
        <SignPage>
            <h1 className='center font-extrabold'>sign In</h1>
            { error ? ( 
                <div className="bg-red-100 border flex items-center border-red-400 text-red-700 px-4 py-2 rounded relative" role="alert">
                    <span className="block sm:inline">{error}</span>
                    <span className="absolute right-3" onClick={() => setError()}>
                        <svg className="fill-current size-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                    </span>
                </div>
            ) : ''}
            <form action={validation} className="grid gap-y-2">
                <div className='grid gap-y-4'>
                    <Input placeholder="First name" name="fName" autoFocus={true}><MdDriveFileRenameOutline /></Input>
                    <Input placeholder="Last name" name="lName"><MdDriveFileRenameOutline /></Input>
                    <Input placeholder="User name" name="userName"><FaUserAlt /></Input>
                    <Input placeholder="Password" name="password" isPasswordFeild={true}><RiLockPasswordFill /></Input>
                </div>
                <button className=' bg-blue-500 text-white font-semibold py-2 px-4 rounded'>submit</button>
            </form>
            <span className='w-full text-sm text-gray-500'>already registered? <Link href="/auth/sign_in" className="hover:underline text-blue-500 font-semibold">Sign in</Link></span>
        </SignPage>
    )
}

export default SignUp;