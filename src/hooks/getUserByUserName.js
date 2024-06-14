import { useSelector } from "react-redux";

const { users, status } = useSelector( state => state.users);

let user;

const getUserByUserName = userName => {
    if (status != "loading") {
        if (status == "succed") {
            user.data = users.filter( u => u.userName == userName);
        }else {
            user.status = "faild";
        }
    }else {
        user.status = "Loading";
    }
    return user;
};


export default getUserByUserName;