import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const signIn = () => {
    const router = useRouter();
    return id => {
        Cookies.set("user_id", id);
        router.push("/");
    }
};

export default signIn;