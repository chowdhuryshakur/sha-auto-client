import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import UseAuth from '../../firebase/UseAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin } = UseAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;