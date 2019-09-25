// import React, { useEffect } from 'react';
// import { connect } from 'react-redux';
// import { getUsers } from '../actions';
// import Dashboard from './Dashboard';

// const UserList = ({ getUsers, isFetching, ...props }) => {

//     useEffect(() => {
//         getUsers();
//     }, [getUssers]);

//     if (isFetching) {
//         return <h3>Loading list of Users</h3>;
//     };
    
//     return (
//         <div>
//             <h1>List of Users:</h1>
//             {props.users.map}
//         </div>
//     )
// }