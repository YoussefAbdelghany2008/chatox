"use client"

import { useDispatch, useSelector } from "react-redux";
import { createUser, fetchUsers } from "@/libs/features/users/usersSlice";
import { useEffect, useState } from "react";

const Home = () => {
    const { users, isLoading, status, error} = useSelector( state => state.users);
    const [user, setUser] = useState();
    const dispatch = useDispatch();

    const createUserHandler = () => {
      dispatch(createUser({
        fName: "Haneen",
        lName: "Ali"
      }));
    };

    // useEffect(() => {
    //     if (status === 'requested') {
    //       dispatch(fetchUsers());
    //     }
    // }, [status, dispatch]);

    // useEffect(() => {
    //   if (isLoading) return (
    //     <main className='h-screen center'>
    //         <h1>Loading...</h1>
    //     </main>
    //   );
    // }, [isLoading])

    return (
      <div>
		<h1 className="rounded bg-current text-white px-4 py-2" onClick={createUserHandler}>create a new user</h1>
		{isLoading && <main className='h-screen center'><h1>Loading... 😍😍😍</h1></main>}
		{status === 'succeed' && users.map((user) => (
			<li  key={user._id} >{user.fName + ' ' + user.lName}</li>
		))}
      	{status === 'failed' && <p>{error}</p>}
      </div>
    );
  };
  
  export default Home;
