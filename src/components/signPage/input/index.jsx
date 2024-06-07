import { useState } from 'react';
import { IoEyeOffOutline , IoEyeOutline  } from "react-icons/io5";

function Input({children, placeholder, name , status, isPasswordFeild = false,autoFocus=false}) {
    const [showPassword, setShowPassword] = useState(false);
    const [isTyped, setIsTyped] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const mainColor = status == "error"? "red-600" : status == "succes" ? "green-500" : "green-500";
    const textColor = status == "error" ? "red-600" : status == "succes" ? "green-500" : "slate-500";
    return (
        <div className="grid gap-y-2" >
            <div className="flex h-12">
                <label htmlFor={name} className={`h-full rounded-l w-12 center bg-${mainColor} text-white`}>{children}</label>
                <div className={`flex items-center w-auto relative`} >
                    <input id={name} name={name} autoFocus={autoFocus}
                        type={!isPasswordFeild ? "text" : showPassword ? "text" : "password"}
                        value={inputValue}
                        onChange={e => !e.target.value ? (setIsTyped(false) & setInputValue('')) : (setIsTyped(true) & setInputValue(e.target.value))}
                        className={`${isPasswordFeild ? 'padding right = 4rem' : ''} ${status == "error" ? 'border-red-600' : ''} font-medium text-base size-full rounded-r-md px-3 py-2 border-2 bg-white shadow-sm focus:border-${mainColor} focus:outline-none block`}/>
                    <label htmlFor={name} className={`absolute font-semibold text-base left-4 ${isTyped ? `bg-white -top-2 font-medium text-xs typed text-${textColor}` : `text-${textColor}`}`}>{placeholder}</label>
                    {isPasswordFeild ? (
                        <div className='absolute right-2 cursor-pointer' onClick={() => setShowPassword(val => !val)}>
                            { showPassword ? (<IoEyeOffOutline className={`text-${textColor} text-lg`}/>) : (<IoEyeOutline className={`text-${textColor} text-lg`}/>)}
                        </div>
                    ) : ''}
                </div>
            </div>
        </div>
    )
}

export default Input;
