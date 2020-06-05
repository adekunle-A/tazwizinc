import React, { useState } from 'react';
import { Button} from 'react-bootstrap';
import axios from 'axios'
const EditProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

        //when add is clicked
        const onSave = (e) => {
            e.preventDefault();
            //setProduct(PrevProduct => [...PrevProduct, {name,price,description}]) //create a copy of the array and add new data to it 
            //add the product to the database
            axios.path('/products/:id', {name,price,description}) //TODO to call function from context
                .then(res => {
                   console.log(res)
                })
                .catch(err =>{ 
                    console.error(err);
            })
        }
    return (
        <div>
            <form onSubmit={onSave} className="container">
                <div className="row">
                    <div className="col-sm">
                        <input type="text" className="form-control mb-2 mr-sm-2" id="name" placeholder="Enter Product Name" name="name"  value={name} onChange={(e) => setName(e.target.value)} required/>
                    </div>
                    <div className="col-sm">
                        <input type="number" min="1" className="form-control mb-2 mr-sm-2" id="price" placeholder="Enter Product Price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} required/>
                    </div>
                    <div className="col-sm">
                        <input type="text" className="form-control mb-2 mr-sm-2" id="price" placeholder="Enter Product Description" name="description"  value={description} onChange={(e) => setDescription(e.target.value)} required/>
                    </div>
                    <div className="col-sm">
                        <Button variant="outline-primary" size="lg" type="submit">
                            Save
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditProduct
