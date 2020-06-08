import React, {useState, useEffect,createContext} from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
export const ProductContext = createContext();

export const ProductProvider = props => {
      const [product, setProduct] = useState([]);
    //fetch products infromation from the database
   const getProducts = () => {
        axios.get('/api/products',{headers: {'authtoken': localStorage.getItem('authToken')}})
             .then(res => {
                setProduct(res.data)
             }).catch(err =>{ 
                    return <Redirect to={
                        {
                            pathname:"/",
                            state:
                            {
                                from: props.location
                            }
                        }
                    }/>
                 console.error(err.status);
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
