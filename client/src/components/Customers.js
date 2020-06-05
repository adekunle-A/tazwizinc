import React, {useContext } from 'react'
import {CustomerContext} from '../context/CustomerContext'
import {Container,Table} from 'react-bootstrap'

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
        <Container className="container" id="dataDiv" fluid>
            <Table Table striped hover className="mb-0">
                <tr>
                    <th>UUID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Approved</th>
                </tr>
                {customer.map(({_id, name, email, address, approved}) => (
                    <tbody key={_id}>
                        <tr> 
                            <td>
                                {_id}
                            </td>
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
                                <input type="checkbox"  checked={approved} onChange={() => handleCheckboxChange(_id)} />
                            </td>
                        </tr>
                    </tbody>                                
                ))}
            </Table>
        </Container>
    )
}
export default Customers;
