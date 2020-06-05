import React, {useState, useEffect,createContext} from 'react'
import axios from 'axios'
export const UsersContext = createContext();

export const UsersProviderProvider = props => {
      const [users, setUsers] = useState([]);

    //fetch products infromation from the database
   const getUsers = () => {
        axios.get('/users')
             .then(res => {
                setProduct(res.data)
             }).catch(err =>{ console.error(err);
             })
    }
    useEffect(() => {
        getUsers();
    });
   return (
       <UsersContext.Provider value={[users,setUsers]}>
           {props.children}
        </UsersContext.Provider>  
   )
}
 export default  UsersProvider;
