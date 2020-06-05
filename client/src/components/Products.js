import React, { useContext } from 'react'
import {ProductContext} from '../context/ProductContext'
import {Container,Button, Table} from 'react-bootstrap'

const Products = () => {

    const [product, setProduct] = useContext(ProductContext)


   const deleteProduct = (id) => {
       console.log(id)
        // axios.delete('')
        //      .then(res => this.setState( {products: this.state.products.filter(product => product.id !==id )}) )
        //      .catch(err => console.log(err))
        setProduct(PrevProduct => [...PrevProduct.filter(product => product.id !== id)]);
    }
    const updateProduct = (id) => {
        console.log(id)
         // axios.patch('')
         //      .then(res => this.setState( {products: this.state.products.filter(product => product.id !==id )}) )
         //      .catch(err => console.log(err))
         setProduct(PrevProduct => [...PrevProduct.filter(product => product.id !== id)]);
     }
    return (
        <div>
            <Container className="p-0" fluid>
                 <Table Table striped hover className="mb-0">
                    {product.map(({id, name, price, description}) => (
                        <tbody key={id}>
                            <tr> 
                                <td>
                                    {/* <input value={name} onChange={(e) => setName(e.target.value)}/> */}
                                    {name}
                                </td>
                                <td>
                                     {/* <input value ={price} onChange={(e) => setPricee(e.target.price)}/> */}
                                    {price}
                                </td>
                                <td>
                                     {/* <input value ={description}  onChange={(e) => setDecription(e.target.value)} /> */}
                                    {description}
                                </td>
                                <td>
                                    <Button variant="outline-primary" size="sm" onClick={() => updateProduct(id)}>
                                        Edit
                                    </Button>
                                </td>
                                <td>
                                    <Button variant="outline-danger" size="sm" onClick={() => deleteProduct(id)}>
                                        Remove
                                    </Button>
                                </td>
                            </tr>
                        </tbody>                                
                    ))}
                  </Table>
            </Container>
        </div>
    )
}

export default Products;
