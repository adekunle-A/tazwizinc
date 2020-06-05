import React, {useContext, useState } from 'react'
import {CustomerContext} from '../context/CustomerContext'
import {Container,Table} from 'react-bootstrap'
import axios from 'axios'
const Customers = () => {
    const [customer, setCustomer] = useContext(CustomerContext)
    const [approve, setApprove] = useState(false)
     
     //when the check box is toggled
    const handleCheckboxChange = (docid) =>{
        console.log(docid)
        console.log(approve)
        setApprove(!approve)
        axios.patch('/customers/'+ docid, {approved: approve})
        .then(res => { 
            console.log(res)
        })
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
