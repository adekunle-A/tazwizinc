import React, {useState, createContext} from 'react'
import {v4 as uuid} from "uuid"; 

export const CustomerContext = createContext();
export const CustomerProvider = props => {
   const [customer, setCustomer] = useState(
       [
           {id: uuid(), name: 'Bob', email: "abc@yahoo.com", address: "water descrip", approved:false},
           {id: uuid(), name: 'Smith', email: "abc3f@yahoo.com", address: "water descrip", approved:true},
           {id: uuid(), name: 'Stella', email:"abc@yahoo.com", address: "water descrip", approved:false},
           {id: uuid(), name: 'Steph', email: "abhhc@yahoo.com", address: "water descrip", approved:false},
           {id: uuid(), name: 'Wale', email: "test@yahoo.com", address: "water descrip", approved:false},
       
      ]);
   return (
       <CustomerContext.Provider value={[customer,setCustomer]}>
           {props.children}
        </CustomerContext.Provider>  
   )
}
 export default  CustomerProvider;