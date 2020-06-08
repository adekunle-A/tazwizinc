import React, {useState, useEffect,createContext} from 'react'
import axios from 'axios'
export const CustomerContext = createContext();

export const CustomerProvider = props => {
   const [customer, setCustomer] = useState([]);

   const getCustomers = () => {
      axios.get('/api/customers',{headers: {'authtoken': localStorage.getItem('authToken')}})
           .then(res => {
               setCustomer(res.data)
         }).catch(err =>{ 
            //console.error(err);
      })
    }
    
    useEffect(() => {
      getCustomers();
    });
    
   return (
       <CustomerContext.Provider value={[customer,setCustomer]}>
           {props.children}
        </CustomerContext.Provider>  
   )
}
 export default  CustomerProvider;