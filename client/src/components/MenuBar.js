import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'

export const MenuBar = (props) => {
    const isAuth = localStorage.getItem('authToken');
    const { location } = props;
    return isAuth!=null ? (
        
        <div>
            <Navbar bg="dark" variant="dark" fixed="top">
                <Navbar.Brand href="/dashboard">Tazwiz Inc</Navbar.Brand>
                <Nav className="mr-auto" variant="tab" activeKey={location.pathname}>
                    <Nav.Item>
                        <Nav.Link href="/dashboard" >Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/products" >Products</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link  href="/customers" >Customers</Nav.Link>
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