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
    //add product info into the database
    const postProduct = () => {
        axios.post('/products')
             .then(res => {
                setProduct(res.data)})
            .catch(err =>{ 
                console.error(err);
        })
    }
    const deleteProduct = () => {
        axios.delete('/products/')
             .then(res => {
                setProduct(res.data)})
            .catch(err =>{ 
                console.error(err);
        })
    }
    //update product
    const updateProduct = () => {
        axios.patch('/products/')
             .then(res => {
                setProduct(res.data)})
            .catch(err =>{ 
                console.error(err);
        })
    }

   return (
       <ProductContext.Provider value={[product,setProduct]}>
           {props.children}
        </ProductContext.Provider>  
   )
}
 export default  ProductProvider;
