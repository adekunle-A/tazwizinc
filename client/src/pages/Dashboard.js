import React, { Component } from 'react';
import Products from '../components/Products'
import AddProduct from '../components/AddProduct';
import Customers from '../components/Customers';
class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div className="container" id="dashboard">
                <AddProduct />
                <Products />
                <Customers />
            </div>
        )
    }
}

export default Dashboard
