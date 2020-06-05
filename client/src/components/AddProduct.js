import React, { useState, useContext } from 'react';
import {ProductContext} from '../context/ProductContext'
import { Button} from 'react-bootstrap';


const AddProduct = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [product, setProduct] = useContext(ProductContext); 
    
    //when add is clicked
    const onSubmit = (e) => {
        e.preventDefault();
        setProduct(PrevProduct => [...PrevProduct, {name,price,description}]) //create a copy of the array and add new data to it 
    }
    return (
            <form onSubmit={onSubmit} className="container">
                <div className="row">
                    <div className="col-sm">
                        <input type="text" className="form-control mb-2 mr-sm-2" id="name" placeholder="Enter Product Name" name="name"  value={name} onChange={(e) => setName(e.target.value)} required/>
                    </div>
                    <div className="col-sm">
                        <input type="text" className="form-control mb-2 mr-sm-2" id="price" placeholder="Enter Product Price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} required/>
                    </div>
                    <div className="col-sm">
                        <input type="text" className="form-control mb-2 mr-sm-2" id="price" placeholder="Enter Product Description" name="description"  value={description} onChange={(e) => setDescription(e.target.value)} required/>
                    </div>
                    <div className="col-sm">
                        <Button variant="outline-primary" size="lg" type="submit">
                            Add
                        </Button>
                    </div>
                </div>
            </form>

        )
}

export default AddProduct
