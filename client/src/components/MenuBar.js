import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
export default function MenuBar() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" fixed="top">
                <Navbar.Brand href="/dasboard">Tazwiz Inc</Navbar.Brand>
                <Nav className="mr-auto" variant="" defaultActiveKey="/dashboard">
                    <Nav.Link href="/dashboard">Home</Nav.Link>
                    <Nav.Link href="/products">Products</Nav.Link>
                    <Nav.Link href="/customers" >Customers</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}
