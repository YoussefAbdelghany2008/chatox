import { redirect } from "next/navigation";
import Cookies from "js-cookie";
import axios from "axios";
// import { useDispatch } from "react-redux";

const signUp = async (user, dispatch) => {

    // const dispatch = useDispatch();

        axios.post(`${process.env.API_KEY}/users`, user).then(({data}) => {
            dispatch(createUser(data));
            Cookies.set("user_id", data._id);
            redirect("/");
        })
};

export default signUp;