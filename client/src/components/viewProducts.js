import React, { Component } from 'react'
import {Container,Button, Table} from 'react-bootstrap';
import {v4 as uuid} from "uuid"; 
import AddProduct from './AddProduct'
import axios from 'axios'

class viewProducts extends Component {
    constructor(props){
        super(props)
        this.state = {
            products:[
                {id: uuid(), name: 'Water', price: 7, description: "water descrip"},
                {id: uuid(), name: 'Milk', price: 17, description: "milk descrip"},
                {id: uuid(), name: 'Soap', price: 6, description: "soap descrip"},
                {id: uuid(), name: 'Rice', price: 3, description: "rice descrip"},
            ]
        }
    }
    //handle API calling
    // componentDidMount = () =>{
    //     axios.get('')
    //          .then(res => this.setState({products: res.data}))
    //          .catch(err => console.log(err))
    // }
    //add product to the state 
    addProduct = (product) => {   
        var newProduct = {
            id: uuid(),
            name: product.name,
            price: product.price,
            description: product.description
        };
        axios.post('', {newProduct})
        .then(res =>  this.setState({products:[...this.state.products, res.data]}))
        .catch(err => console.log(err))

        this.setState({products:[...this.state.products, newProduct]});
    }
    //delete product
    deleteProduct = (id) => {
        axios.delete('')
             .then(res => this.setState( {products: this.state.products.filter(product => product.id !==id )}) )
             .catch(err => console.log(err))
        this.setState( {products: this.state.products.filter(product => product.id !==id )})
    }
    //update Product
    render() {
        const {products} = this.state;
        return (
       
            <Container className="p-0" fluid>
                 <AddProduct addProduct={this.addProduct} />
                 <Table Table striped hover className="mb-0">
                    {products.map(({id, name, price, description}) => (
                        <tbody key={id}>
                            <tr> 
                                <td>
                                    {name}
                                </td>
                                <td>
                                    {price}
                                </td>
                                <td>
                                    {description}
                                </td>
                                <td>
                                    <Button variant="outline-primary" size="sm" onClick={() => { 
                                    console.log( "enter new item")
                                    }}>
                                        Edit
                                    </Button>
                                </td>
                                <td>
                                    <Button variant="outline-danger" size="sm" onClick={() => { 
                                        this.setState( {products: this.state.products.filter(product => product.id !==id )
                                        })
                                    }}>
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
}
export default viewProducts; 