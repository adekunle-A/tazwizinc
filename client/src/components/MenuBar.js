import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'

export const MenuBar = () => {
    const isAuth = localStorage.getItem('authToken');
 
    return isAuth!=null ? (
        <div>
            <Navbar bg="dark" variant="dark" fixed="top">
                <Navbar.Brand href="/dashboard">Tazwiz Inc</Navbar.Brand>
                <Nav className="mr-auto" variant="" defaultActiveKey="/dashboard">
                    <Nav.Item>
                        <Nav.Link href="/dashboard">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="/products">Products</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="/customers" >Customers</Nav.Link>
                    </Nav.Item>
                     <Nav.Link href="/logout" onClick={()=> localStorage.clear()}>LogOut</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    ) :(
        <div>
            <Navbar bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="/">Tazwiz Inc</Navbar.Brand>
            </Navbar>
        </div>
    )
}
export default MenuBar;