import { useSelector } from "react-redux";

const useUsers = () => {

    const { isLoading, users } = useSelector(state => state.users);

    return { isLoading, users };

};

export default useUsers;