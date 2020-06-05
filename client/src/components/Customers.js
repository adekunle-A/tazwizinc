import React, {useState,useContext } from 'react'
import {CustomerContext} from '../context/CustomerContext'
import {Container,Button, Table} from 'react-bootstrap'
import { Prev } from 'react-bootstrap/PageItem';

const Customers = () => {
    const [customer, setCustomer] = useContext(CustomerContext)

    const updateCustomer = (id) => {
        console.log(id)
         // axios.patch('')
         //      .then(res => this.setState( {products: this.state.products.filter(product => product.id !==id )}) )
         //      .catch(err => console.log(err))
         
     }
     
     //when the check box is toggled
    const handleCheckboxChange = (docid) =>{
        customer.forEach(element => {
            if(element.id === docid){
                console.log(element.approved);
                console.log([customer])
            }
           
        });
        //setCustomer(PrevCustomer => [...PrevProduct.filter(product => product.id === id)])
        //setCustomer(PrevCustomer => [ customer[0].approved = !approved])
        //setCustomer(PrevProduct => [customer[0].approved = true,{}...PrevProduct.filter(product => product.id === id)]);
        
     }
    return (
        <div>
            <Container className="p-0" fluid>
                 <Table Table striped hover className="mb-0">
                    {customer.map(({id, name, email, address, approved}) => (
                        <tbody key={id}>
                            <tr> 
                                <td>
                                
                                    {name}
                                </td>
                                <td>
                                    {email}
                                </td>
                                <td>
                                    {address}
                                </td>
                                <td>
                                    {approved}
                                </td>
                                <td>
                                    <input type="checkbox"  checked={approved} onChange={() => handleCheckboxChange(id)} />
                                
                                </td>
                            </tr>
                        </tbody>                                
                    ))}
                  </Table>
            </Container>
        </div>
    )
}

export default Customers;
