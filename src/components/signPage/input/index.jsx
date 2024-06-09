import { useEffect, useState } from 'react';
import { IoEyeOffOutline , IoEyeOutline  } from "react-icons/io5";

function Input({children, placeholder, name , isPasswordFeild = false,autoFocus=false}) {
    const [showPassword, setShowPassword] = useState(false);
    const [isTyped, setIsTyped] = useState(false);
    const [inputValue, setInputValue] = useState('');

    return (
            <div className="flex h-12">
                <label htmlFor={name} className={`h-full rounded-l w-14 center bg-blue-500 text-white`}>{children}</label>
                <div className={`flex items-center w-full relative`} >
                    <input id={name} name={name} autoFocus={autoFocus}
                        type={!isPasswordFeild ? "text" : showPassword ? "text" : "password"}
                        value={inputValue}
                        onChange={e => !e.target.value ? (setIsTyped(false) & setInputValue('')) : (setIsTyped(true) & setInputValue(e.target.value))}
                        className={`${isPasswordFeild ? 'pr-7' : ''} size-full font-medium text-base rounded-r-md px-3 py-2 border-2 bg-white shadow-sm focus:border-blue-500 focus:outline-none block`}/>
                    <label htmlFor={name} className={`absolute font-semibold text-base left-4 ${isTyped ? `bg-white -top-2 font-medium text-xs typed text-slate-500` : `text-slate-500`}`}>{placeholder}</label>
                    {isPasswordFeild ? (
                        <div className='absolute right-2 cursor-pointer' onClick={() => setShowPassword(val => !val)}>
                            { showPassword ? (<IoEyeOffOutline className={`text-slate-500 text-lg`}/>) : (<IoEyeOutline className={`text-slate-500 text-lg`}/>)}
                        </div>
                    ) : ''}
                </div>
            </div>
    )
}

export default Input;
