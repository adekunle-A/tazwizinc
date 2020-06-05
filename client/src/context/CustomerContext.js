import React, {useState, useEffect,createContext} from 'react'
import axios from 'axios'

export const CustomerContext = createContext();
export const CustomerProvider = props => {
   const [customer, setCustomer] = useState([]);
   const getCustomers = () => {
      axios.get('http://localhost:3080/customers')
           .then(res => {
               setCustomer(res.data)
               console.log(res.data)
         }).catch(err =>{ console.error(err);
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