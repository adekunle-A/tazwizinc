import React, { Component } from 'react';
import {v1 as uuid} from "uuid"; 
import Viewproduct from '../components/viewProducts'
class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            products:[
                {id: uuid(), name: 'Water', price: 7},
                {id: uuid(), name: 'Milk', price: 17},
                {id: uuid(), name: 'Soap', price: 6},
                {id: uuid(), name: 'Rice', price: 3},
            ]
        }
    }
    render() {
        return (
            <div className="container" id="dashboard">

                <Viewproduct />
            </div>
        )
    }
}

export default Dashboard
