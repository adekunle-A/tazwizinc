import React, {useState, useEffect,createContext} from 'react'
import axios from 'axios'
export const UserContext = createContext();

export const UserProvider = props => {
      const [users, setUsers] = useState([]);
      const [isLoggedIn, setIsLoggedIn] = useState(false);
      const [isAuth, setIsAuth] = useState(true);


    //fetch products infromation from the database
   const getUsers = () => {
        axios.get('/api/user')
             .then(res => {
                setUsers(res.data)
             }).catch(err =>{ console.error(err);
        })
    }
    useEffect(() => {
        getUsers();
    });
    
   return (
       <UserContext.Provider value={[isAuth, setIsAuth] }>
           {props.children}
        </UserContext.Provider>  
   )
}
 export default UserProvider;
