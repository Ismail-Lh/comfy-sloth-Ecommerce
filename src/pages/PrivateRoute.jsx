import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useUserContext } from '../contexts/user_context';

function PrivateRoute({ children, ...restProps }) {
  const { myUser } = useUserContext();

  return (
    <Route
      {...restProps}
      render={() => {
        return myUser ? children : <Redirect to='/' />;
      }}
    />
  );
}

export default PrivateRoute;
