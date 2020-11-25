import React from 'react';
import { Route ,Redirect} from 'react-router-dom';

const ProtectedRoute = ({ auth,component: Component, ...rest }) => {

    const token = localStorage.getItem('authToken')
        return (
          <Route {...rest} render={
            props => {
              if (token != null) {
                return <Component {...rest} {...props} />
              } else {
                return <Redirect to={
                  {
                    pathname: '/',
                    state: {
                      from: props.location
                    }
                  }
                } />
              }
            }
          } />
        )
      }

export default ProtectedRoute;
