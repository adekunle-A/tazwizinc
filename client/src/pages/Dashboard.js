import React from 'react';
import MenuBar from '../components/MenuBar';
import AddProduct from '../components/AddProduct';
//dashbaord page
const Dashboard = () => {
    return (
        <div className="container" id="dashboard">
            
             <h2> Add Product </h2>
            <AddProduct />
            
        </div>
    )
}

export default Dashboard
