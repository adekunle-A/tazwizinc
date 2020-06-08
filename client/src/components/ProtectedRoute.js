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
// import React, {useContext,useEffect} from 'react'
// import { Route, Redirect } from 'react-router-dom'
// import {UserContext} from '../context/UsersContext'
// //Protected route
// const  ProtectedRoute = ({component:Component, ...rest})  => {
//     const token = localStorage.getItem('authToken')
//     const [isLoggedIn, setIsLoggedIn] = useContext(UserContext)
//     useEffect(() => {
//         if(token != null ){
//             setIsLoggedIn(true)
//         }
//     });
//     return (
//        <Route {...rest} render={(props) => localStorage.getItem('authToken') ? (
    
//               <Component {...props}/>
//        ) :
//               <Redirect to="/"/>
//         //    }else{
//         //     console.log(props)
//         //         return <Redirect to="/"/>
//         //    }
//         }
//        />
//     )
// }

// export default ProtectedRoute
