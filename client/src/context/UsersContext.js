import React, {useState, useEffect,createContext} from 'react'
import axios from 'axios'
export const UserContext = createContext();

export const UserProvider = props => {
      const [users, setUsers] = useState([]);
      const [isLoggedIn, setIsLoggedIn] = useState(false);
    //Get Token

    //fetch products infromation from the database
   const getUsers = () => {
        axios.get('/api/authUsers')
             .then(res => {
                setUsers(res.data)
                setIsLoggedIn(true)
             }).catch(err =>{ console.error(err);
        })
    }
    useEffect(() => {
        getUsers();
    });
    
   return (
       <UserContext.Provider value={[isLoggedIn, setIsLoggedIn] }>
           {props.children}
        </UserContext.Provider>  
   )
}
 export default UserProvider;
