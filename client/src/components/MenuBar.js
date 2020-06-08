import React,{useContext,useEffect} from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {UserContext} from '../context/UsersContext'
export const MenuBar = () => {
    const isAuth = JSON.parse(localStorage.getItem('isAuth'));
    const [isLoggedIn, setIsLoggedIn] = useContext(UserContext)
    
    useEffect(() => {
        if(isAuth != null ){
            setIsLoggedIn(isLoggedIn)
        }else{
            setIsLoggedIn(false)
        }
        
    });
    return isLoggedIn === true ? (
        <div>
            <Navbar bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="/dashboard">Tazwiz Inc</Navbar.Brand>
                <Nav className="mr-auto" variant="" defaultActiveKey="/dashboard">
                    <Nav.Link href="/dashboard">Home</Nav.Link>
                    <Nav.Link href="/products">Products</Nav.Link>
                    <Nav.Link href="/customers" >Customers</Nav.Link>
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