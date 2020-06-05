import React, {useState, createContext} from 'react'
import {v4 as uuid} from "uuid"; 

export const ProductContext = createContext();
export const ProductProvider = props => {
   const [product, setProduct] = useState(
       [
           {id: uuid(), name: 'Water', price: 7, description: "water descrip"},
           {id: uuid(), name: 'Milk', price: 17, description: "milk descrip"},
           {id: uuid(), name: 'Soap', price: 6, description: "soap descrip"},
           {id: uuid(), name: 'Rice', price: 3, description: "rice descrip"},
       
      ]);
   return (
       <ProductContext.Provider value={[product,setProduct]}>
           {props.children}
        </ProductContext.Provider>  
   )
}
 export default  ProductProvider;
