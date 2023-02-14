import React from 'react';
import { UserAuth } from '../context/AuthContext';
// import Home from './Home';

const Account = () => {

    const { user } = UserAuth();

    // const handleSignOut = async () => {
    //     try {
    //         await logOut();
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    return (
        <div className='row account mt-5'>
            <div className='col-12'><p className='mt-5'>Welcome, {user.displayName}.</p></div>
            {/* <button onClick={handleSignOut}>LogOut</button> */}
            {/* <Home /> */}
        </div>
    )
}

export default Account