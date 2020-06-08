import React, { useContext, useState } from 'react'
import {ProductContext} from '../context/ProductContext'
import {Container,Button, Table} from 'react-bootstrap'
import AddProduct from '../components/AddProduct';
import MenuBar from '../components/MenuBar';
import Moment from 'react-moment';
import axios from 'axios'
const Products = () => {
   const [productInfo, setProductInfo] = useState({})
   const [name, setName] = useState('');
   const [price, setPrice] = useState('');  
   const [editing, SetEditing] = useState(false)
   const [product, setProduct] = useContext(ProductContext)
   const [getPrice, SetGetPrice] = useContext(ProductContext)

    //delete product when remove is clicked
   const deleteProduct = (id) => {
       axios.delete('/api/products/'+id)
            .then(res => {
                console.log(res)
            })
            .catch(err =>{ 
                console.error(err);
        })
    }

    //save the data once the save button is clicked
    const SaveProduct = (pID) => {
        SetEditing(false);
        if(price != '' && !isNaN(price)){
            axios.patch('/api/products/'+ pID, {ProductPrice: price})
            .then(res => { 
                console.log(res)
            })
            .catch(err => console.log(err))
            
         }else{
             
              alert("Please Enter a Number")
         }
        }
   
     //sets edit mode
    const EditProduct = (id) => {
        SetEditing( editing => !editing);
     }

    return (
        <Container className="container" id="dataDiv" fluid>
             <MenuBar />
             <div>
                 <h2 className="pb-2">Add Product</h2>
                <AddProduct />
             </div>
             <h2 className="pt-5">Products</h2>
             <p>Edit mode {editing.toString()} </p>
            <Table Table striped hover className="mb-0">
                <thead>
                    <tr>
                        <th>ProductName</th>
                        <th>ProductPrice (CAD)</th>
                        <th>ProductDescription</th>
                        <th>ProductCreatedDate</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                {product.map(({_id, productName, ProductPrice, ProductDescription, ProductCreatedDate}) => (
                    <tbody key={_id}>
                        <tr> 
                            <td contenteditable={editing} onInput={(e) => setName(e.target.innerText)} >
                                {productName}
                            </td>
                            <td contenteditable="true" type={"number"} onInput={(e) => setPrice(e.target.innerText)}>
                                {/* {editing ?  <input value ={ProductPrice} type={"number"} onChange={(e) => setPrice(e.target.price)}/> : ProductPrice } */}
                                    {/* <input value ={price} type={"number"} onChange={(e) => setPrice(e.target.price)}/> */}
                                {ProductPrice}
                            </td>
                            <td>
                                {ProductDescription}
                            </td>
                            <td>
                                    <Moment format="YYYY-MM-DD">{ProductCreatedDate}</Moment> 
                            </td>
                            <td>
                                <Button variant="outline-primary" size="sm" onClick={() => editing ? SaveProduct(_id): EditProduct(_id)}>
                                   { editing === false ?  'Edit Price': 'Save' }
                                </Button>
                            </td>
                            <td>
                                <Button variant="outline-danger" size="sm" onClick={() => deleteProduct(_id)}>
                                    Remove
                                </Button>
                            </td>
                        </tr>
                    </tbody>                                
                ))}
            </Table>
        </Container>
  
    )
}

export default Products;
