import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
export default function MenuBar() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" fixed="top">
                <Navbar.Brand href="#home">Tazwiz Inc</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="#home">Products</Nav.Link>
                <Nav.Link href="#customers">Customers</Nav.Link>

                </Nav>
            </Navbar>
        </div>
    )
}
