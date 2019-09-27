import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (data) => {
    let { component: Component = null, render: Render = null, ...rest } = data
    return (
        <Route
            {...rest}
            render={(props) => {
                if (localStorage.getItem('token')) {
                  return Render ? ( Render(props) ) : Component ? ( <Component id={data.id && data.id} />) : null
                } else{
                    return <Redirect to = "/accounts/login" />
                }
            }}
        />
    )
}

export default PrivateRoute;