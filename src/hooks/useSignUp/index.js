import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import axios from "axios";
import { useDispatch } from "react-redux";
import { createUser } from "@/libs/features/users/usersSlice";

const useSignUp =  () => {

    const router = useRouter();
    const dispatch = useDispatch();

    const signUp = async (user) => {
        axios.post(`${process.env.API_KEY}/users`, user).then(({data}) => {
            dispatch(createUser(data));
            Cookies.set("user_id", data._id);
            router.push("/");
        })
    };
    return signUp;
};

export default useSignUp;