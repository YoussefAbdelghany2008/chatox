"use client"

import { FaHome, FaUser, FaFileAlt, FaInbox  } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { IoSettings } from "react-icons/io5";
import Link from "next/link";

export default function Layout({ children }) {
    return (
        <main className="relative grid grid-cols-layout min-h-screen bg-slate-100">
            <nav className="bg-white flex flex-col shadow-lg shadow-slate-200 border border-l-slate-200 rounded-r-md h-screen"> {/* do not forgot fixed */}
                <div className="center w-full h-header">
                    <button className="rounded-md bg-current text-white font-bold py-2 px-4 text-center text-xl">c</button>
                </div>
                <div className="flex flex-col flex-grow justify-between h-auto pb-4">
                    <ul className="w-full mt-12 flex flex-col gap-4 items-center">
                        <li>
                            <Link href="/" className="flex items-center text-gray-400 hover:text-current py-3 px-2 transition-colors duration-300 ease-in-out">
                                <FaHome className="h-6 w-6" />
                            </Link>
                        </li>
                        <li>
                            <Link href="/chat" className="flex items-center text-gray-400 hover:text-current py-3 px-2 transition-colors duration-300 ease-in-out">
                                <AiFillMessage className="h-6 w-6" />
                            </Link>
                        </li>
                        <li>
                            <Link href="/users" className="flex items-center text-gray-400 hover:text-current py-3 px-2 transition-colors duration-300 ease-in-out">
                                <FaUser className="h-6 w-6" />
                            </Link>
                        </li>
                        <li>
                            <Link href="/documents" className="flex items-center text-gray-400 hover:text-current py-3 px-2 transition-colors duration-300 ease-in-out">
                                <FaFileAlt className="h-6 w-6" />
                            </Link>
                        </li>
                        <li>
                            <Link href="/inbox" className="flex items-center text-gray-400 hover:text-current py-3 px-2 transition-colors duration-300 ease-in-out">
                                <FaInbox className="h-6 w-6" />
                            </Link>
                        </li>
                    </ul>
                    <div  className="center text-gray-400 hover:text-current py-3 px-2 transition-colors duration-300 ease-in-out">
                        <IoSettings className="h-6 w-6"/>
                    </div>
                </div>
            </nav>
            { children }
            <button className="p-4 absolute right-8 bottom-8 bg-current text-white rounded">up</button>
        </main> 
    )
}