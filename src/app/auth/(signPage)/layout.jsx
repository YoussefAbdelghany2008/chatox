import Image from 'next/image';

import { signIn } from "@/libs/registering";

function SignPage({children}) {
    return (
        <main className="grid grid-cols-7  bg-current h-screen w-screen signPage max-md:bg-white">
            <div className="right bg-white border-r-indigo-200 rounded-r-lg center col-span-4 max-md:col-span-7">
                <div className='grid gap-4 p-6'>
                    { children }
                    <div className='relative flex center my-2'>
                        <hr className="w-full"/>
                        <h1 className='absolute bg-white px-4'>or</h1> 
                    </div>
                    <form action={signIn} className="grid gap-x-4 h-12 grid-cols-2">
                        <button type="submit" name="action" value="google" className="center size-full bg-white shadow-md text-sm border rounded-md text-gray-800 dark:bg-gray-900 border-gray-300  font-medium dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                            <svg className="size-6 mr-2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="-0.5 0 48 48" version="1.1"> <title>Google-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Color-" transform="translate(-401.000000, -860.000000)"> <g id="Google" transform="translate(401.000000, 860.000000)"> <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"> </path> <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"> </path> <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"> </path> <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"> </path> </g> </g> </g> </svg>
                            <span>Google</span>
                        </button>
                        
                        <button type="submit" name="action" value="facebook" className="center size-full bg-current shadow-md text-sm border rounded-md space-x-3 text-white transition-colors duration-200 transform  dark:text-gray-300 dark:border-gray-300 hover:bg-gray-600 dark:hover:bg-gray-700  focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/></svg>
                            <span className="text-sm text-white dark:text-gray-200">Facebook</span>
                        </button>
                    </form>    
                </div>
            </div>
            <div className="left center col-span-3 max-md:hidden">
                 <Image
                    src="/assets/images/signPageImg.png"
                    width={500}
                    height={500}
                    className="signImage max-lg:size-96"
                />
            </div>
        </main>
    )
}

export default SignPage;