import { useSelector } from "react-redux";


const getUserById = _id => {
    const { users, isLoading } = useSelector( state => state.users);
    let user;
    if (!isLoading) user = users.find( u => u._id == _id)
    return {
        user,
        isLoading,
    };
};


export default getUserById;