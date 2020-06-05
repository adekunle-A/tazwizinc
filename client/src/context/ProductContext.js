import React, {useState, useEffect,createContext} from 'react'
import axios from 'axios'
export const ProductContext = createContext();
export const ProductProvider = props => {
      const [product, setProduct] = useState([]);

    //fetch products infromation from the database
   const getProducts = () => {
        axios.get('/products')
             .then(res => {
                setProduct(res.data)
             }).catch(err =>{ console.error(err);
             })
    }
    useEffect(() => {
        getProducts();
    });
   return (
       <ProductContext.Provider value={[product,setProduct]}>
           {props.children}
        </ProductContext.Provider>  
   )
}
 export default  ProductProvider;
