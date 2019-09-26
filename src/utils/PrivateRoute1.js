import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute1 = ({ component: Component, ...rest }) => {
    console.log('rest in private route', rest)
    return (
      <Route
        {...rest}
        render={(props) => {
          console.log('props in private route', props)
          if (localStorage.getItem("token")) {
            return <Component {...props} {...rest} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
    );
  };
  export default PrivateRoute1;
 