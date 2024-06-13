"use client"

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createUser } from "@/libs/features/users/usersSlice";

const useUsers = (method = "GET") => {
    const dispatch = useDispatch();
    const { isLoading, users } = useSelector(state => state);

    useEffect(() => {
        dispatch();
    }, [dispatch]);

    return { isLoading, users };
};

export default useUsers;