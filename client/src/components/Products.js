import React, { useContext } from 'react'
import {ProductContext} from '../context/ProductContext'
import {Container,Button, Table} from 'react-bootstrap'
import AddProduct from '../components/AddProduct';
import axios from 'axios'
const Products = () => {

   const [product, setProduct] = useContext(ProductContext)
   
   const deleteProduct = (id) => {
       axios.delete('/products/'+id)
            .then(res => {
                console.log(res)
            })
            .catch(err =>{ 
                console.error(err);
        })
    }
    const updateProduct = (id) => {
        console.log(id)
         // axios.patch('')
         //      .then(res => this.setState( {products: this.state.products.filter(product => product.id !==id )}) )
         //      .catch(err => console.log(err))
         setProduct(PrevProduct => [...PrevProduct.filter(product => product.id !== id)]);
     }
    return (
        <Container className="container" id="dataDiv" fluid>
             <div>
                <AddProduct />
             </div>
            <Table Table striped hover className="mb-0">
                 <tr>
                    <th>ProductName</th>
                    <th>ProductPrice</th>
                    <th>ProductDescription</th>
                    <th>ProductCreatedDate</th>
                    <th>Action</th>
                </tr>
                {product.map(({_id, productName, ProductPrice, ProductDescription, ProductCreatedDate}) => (
                    <tbody key={_id}>
                        <tr> 
                            <td>
                                {/* <input value={name} onChange={(e) => setName(e.target.value)}/> */}
                                {productName}
                            </td>
                            <td>
                                    {/* <input value ={price} onChange={(e) => setPricee(e.target.price)}/> */}
                                {ProductPrice}
                            </td>
                            <td>
                                    {/* <input value ={description}  onChange={(e) => setDecription(e.target.value)} /> */}
                                {ProductDescription}
                            </td>
                            <td>
                                    {/* <input value ={description}  onChange={(e) => setDecription(e.target.value)} /> */}
                                {ProductCreatedDate}
                            </td>
                            <td>
                                <Button variant="outline-primary" size="sm" onClick={() => updateProduct(_id)}>
                                    Edit
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
