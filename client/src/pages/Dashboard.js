import React, { Component, useContext } from 'react';
import Products from '../components/Products'
import Customers from '../components/Customers';
import  UsersContext from '../context/UsersContext'

const Dashboard = () => {
    const msg = useContext(UsersContext)
    return (
            <div className="container" id="dashboard">
                {/* <Products /> */}
                <Customers />
                {msg}
            </div>
        )
    }

export default Dashboard
