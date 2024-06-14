import Cookies from 'js-cookie';
import { redirect } from "next/navigation";
import { signOut as nextAuthSignOut } from '@/auth';

// Do not forget to try making it working in server side !!!!!!!

const signOut = () => {
    Cookies.remove("user_id");
    // nextAuthSignOut();
    redirect("/");
};

export default signOut;