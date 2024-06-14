import { useSelector } from "react-redux";

const getUserByEmail = email => {
    const { users, isLoading } = useSelector( state => state.users);
    let user = {
        isLoading: true,
        data: {},
    };
    if (!isLoading) {
        user = {
            data: users.find( u => u.email == email),
            isLoading: false,
        };
    }
    return user;
};


export default getUserByEmail;