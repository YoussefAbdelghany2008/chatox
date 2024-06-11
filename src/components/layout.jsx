"use client"

import { useState, useEffect } from "react";

export default function Layout({ children }) {
    return (
        <main className="grid grid-cols-layout min-h-screen">
            <nav className="bg-white shadow-lg shadow-slate-200 border border-l-slate-200 rounded-r-sm h-screen"> {/* do not forgot fixed */}

            </nav>
            { children }
        </main> 
    )
}





// import { useRouter, usePathname } from "next/navigation";
// import Cookies from 'js-cookie';
// import Loading from "@/components/loading";

// const layout = (children) => {
    // return (
    //     <main className="grid grid-cols-layout min-h-screen">
    //         <nav className="bg-white shadow-lg shadow-slate-200 border border-l-slate-200 rounded-r-sm h-screen"> {/* do not forgot fixed */}

    //         </nav>
    //         { children }
    //     </main> 
    // )
// };

// export default function Layout({ children }) {
//     const router = useRouter();
//     const pathname = usePathname().split("/")[1];
//     const [content, setContent] = useState(<Loading />);

//     useEffect(() => {
//         if (Cookies.get("user_id")) {
//              pathname.startsWith('/auth') ? router.push("/") : setContent(layout(children))
//         }else { 
//                 !pathname.startsWith('/auth') ? router.push("/auth/sign_in") : setContent(children)
//         }
//     }, []);
    
//     return content
// }
