import React, {useContext, useState } from 'react'
import {CustomerContext} from '../context/CustomerContext'
import {Container,Table} from 'react-bootstrap'
import MenuBar from '../components/MenuBar';
import axios from 'axios'

//customers components  
const Customers = (props) => {
    const [customer, setCustomer] = useContext(CustomerContext)
    const [approve, setApprove] = useState(false)

     //when the check box is toggled
    const handleCheckboxChange = (customerid) =>{
        setApprove(!approve)
        axios.patch('/api/customers/'+ customerid, {approved: approve})
             .then(res => { console.log(res) })
             .catch(err => console.log(err))
    }

    return (
        <Container className="container" id="dataDiv" fluid>
            <Table Table striped hover className="mb-0">
                <thead>
                    <tr>
                        <th>UUID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Approved</th>
                        <th>Action</th>
                    </tr>
                </thead>
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
                                {approved.toString()}
                            </td>
                            <td>
                                <input type="checkbox"  checked={approved} onClick={() => setApprove(!approved)} onChange={() => handleCheckboxChange(_id)} />
                            </td>
                        </tr>
                    </tbody>                                
                ))}
            </Table>
        </Container>
    )
}
export default Customers;
