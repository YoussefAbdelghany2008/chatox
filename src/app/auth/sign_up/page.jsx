"use client"

import { useState, useRef} from 'react'
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
    const errMsg = useRef();

    const [fNameStatus, setFNameStatus] = useState();
    const [lNameStatus, setLNameStatus] = useState();
    const [userNameStatus, setUserNameStatus] = useState();
    const [passwordStatus, setPasswordStatus] = useState();

    const [error, setError] = useState();
    const DefPatterns = ['!','@','#','$','%','^','*','(',')','_','-','+','=',',','.',':',';','/','?'];
    const validateInput = (value, length, patterns, setStatus, name) => {
        value = value.trim();
        if (!value) {
            setStatus('error');
            setError(`please Enter your ${name}`);
        }else if (value.split('').length < length.min) {
            setStatus('error');
            setError(`${name} length must be > ${length.min}`);
        }else if (value.split('').length > length.max) {
            setStatus('error');
            setError(`${name} length must be < ${length.max}`);
        }else {
            const values = value.split('');
            values.map(l => patterns.map(p => l == p ? setError(`Error: ${name}`) && setStatus('error'): (values[value.length - 1] == l && p == patterns[patterns.length - 1 ]) ? setStatus('succes') && setError(): ''))
        }
    },
    validation = async (formData) => {
        const fName = formData.get("fName"),
        lName = formData.get("lName"),
        userName = formData.get("userName"),
        password = formData.get("password");
        validateInput(fName, {min: 3 , max: 15},DefPatterns, setFNameStatus, "first name");
        validateInput(lName, {min: 3 , max: 15},DefPatterns, setLNameStatus, "last name");
        validateInput(userName, {min: 7 , max: 25},DefPatterns, setUserNameStatus, "user name");
        validateInput(password, {min: 7 , max: 30},DefPatterns, setPasswordStatus, "password");
        
        if ((fNameStatus && lNameStatus && userNameStatus && passwordStatus) == 'succes') {
            await axios.get(`${process.env.API_KEY}/users`).then(async ({data: users}) => {
                if (users.every(u => u.userName == userName)) {
                    setError("this userName is Already used");
                    setUserNameStatus('error');
                } else {
                    await axios.post(`${process.env.API_KEY}/users`, {
                        fName,
                        lName,
                        userName,
                        password,
                        avatar: '/user.png',
                        email: ''
                    }).then(({data: user}) => Cookies.set('user_id', user._id) && router.push('/'))
                }
            })
        }
    };

    return (
        <SignPage>
            <h1 className='center font-extrabold'>sign In</h1>
            { error ? ( 
                <div ref={errMsg} class="bg-red-100 border flex items-center border-red-400 text-red-700 px-4 py-2 rounded relative" role="alert">
                    <span class="block sm:inline">{error}</span>
                    <span class="absolute right-3" onClick={() => errMsg.current.classList.add("hidden")}>
                        <svg class="fill-current size-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                    </span>
                </div>
            ) : ''}
            <form action={validation} className="grid gap-y-2">
                <div className='grid gap-y-4'>
                    <Input status={fNameStatus} placeholder="First name" name="fName" autoFocus={true}><MdDriveFileRenameOutline /></Input>
                    <Input status={lNameStatus} placeholder="Last name" name="lName"><MdDriveFileRenameOutline /></Input>
                    <Input status={userNameStatus} placeholder="User name" name="userName"><FaUserAlt /></Input>
                    <Input status={passwordStatus} placeholder="Password" name="password" isPasswordFeild={true}><RiLockPasswordFill /></Input>
                </div>
                <button className=' bg-blue-500 text-white font-semibold py-2 px-4 rounded'>submit</button>
            </form>
            <span className='w-full text-sm text-gray-500'>already registered? <Link href="/auth/sign_in" className="hover:underline text-blue-500 font-semibold">Sign in</Link></span>
        </SignPage>
    )
}

export default SignUp;