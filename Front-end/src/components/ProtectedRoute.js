import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from './Header';

const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    <Route>
      {
        () => props.isLoggedIn ?
          <>
          <Header link={'/signin'} text={"signout"} onClick={props.handleSignOut}>{props.email}</Header>
            <Component {...props} />
          </>
          : <Redirect to='/signin' />
      }
    </Route>
  )
}

export default ProtectedRoute; 