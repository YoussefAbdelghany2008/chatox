"use client"

import React, { useState } from 'react'
import SignPage from '@/components/signPage'
import Link from 'next/link';
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { MdDriveFileRenameOutline } from "react-icons/md";
import Input from '@/components/signPage/input';
function signUp() {
  return (
    <SignPage>
        <h1 className='center font-extrabold'>sign In</h1>
        <div className='grid gap-y-4'>
            <Input placeholder="First name" id="fName"  autoFocus={true}><MdDriveFileRenameOutline /></Input>
            <Input placeholder="Last name" id="lName"><MdDriveFileRenameOutline /></Input>
            <Input placeholder="User name" id="userName"><FaUserAlt /></Input>
            <Input placeholder="Password" id="password" isPasswordFeild={true}><RiLockPasswordFill /></Input>  
        </div>
        <button className=' bg-blue-500 text-white font-semibold py-2 px-4 border border-blue-500 rounded'>submit</button>
        <span className='text-sm text-gray-500'>already registered? <Link href="/auth/sign_in" className="hover:underline text-blue-500 font-semibold">Sign in</Link></span>
    </SignPage>
  )
}

export default signUp;