import Cookies from "js-cookie";
import getUserById from "../getUserById";

const useUser = () => {
    const data = getUserById(Cookies.get("user_id"));
    return data;
};

export default useUser;