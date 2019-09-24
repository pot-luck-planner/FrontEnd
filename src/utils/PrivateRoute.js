import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (data) => {
    let { component: Component, ...rest } = data
    console.log(data)
    return (
        <Route
            {...rest}
            render={() => {
                if (localStorage.getItem('token')) {
                    return <Component id = {data.id && data.id} />;
                } else{
                    return <Redirect to = "/accounts/login" />
                }
            }}
        />
    )
}

export default PrivateRoute;