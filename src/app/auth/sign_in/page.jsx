"use client"

import React, { useState,useEffect } from 'react'
import SignPage from '@/components/signPage'
import Link from 'next/link';
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import Input from '@/components/signPage/input';
function signIn() {
    // useEffect( () => {

    // }, [])
  return (
    <SignPage>
        <h1 className='center font-extrabold'>sign In</h1>
        <div className='grid gap-y-4'>
            <Input placeholder="User name" id="userName" autoFocus={true}><FaUserAlt /></Input>
            <Input placeholder="Password" id="password" isPasswordFeild={true}><RiLockPasswordFill /></Input>
        </div>
        <button className=' bg-blue-500 text-white font-semibold py-2 px-4 border border-blue-500 rounded'>submit</button>
        <span className='text-sm text-gray-500'>Not registered? <Link href="/auth/sign_up" className="hover:underline text-blue-500 font-semibold">Sign up</Link></span>
    </SignPage>
  )
}

export default signIn;