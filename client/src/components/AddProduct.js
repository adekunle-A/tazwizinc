import React, { Component } from 'react';
import { Button} from 'react-bootstrap';

class AddProduct extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: "",
            price: "",
            description: "",
        }
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addProduct(this.state)
        this.setState({name:'', price:'', description: ''})

    }
    render() {
        return (
            <form onSubmit={this.onSubmit} className="container">
                <div className="row">
                    <div className="col-sm">
                        <input type="text" className="form-control mb-2 mr-sm-2" id="name" placeholder="Enter Product Name" name="name"  value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} required/>
                    </div>
                    <div className="col-sm">
                        <input type="text" className="form-control mb-2 mr-sm-2" id="price" placeholder="Enter Product Price" name="price" value={this.state.price} onChange={(e) => this.setState({price: e.target.value})} required/>
                    </div>
                    <div className="col-sm">
                        <input type="text" className="form-control mb-2 mr-sm-2" id="price" placeholder="Enter Product Description" name="description"  value={this.state.description} onChange={(e) => this.setState({description: e.target.value})} required/>
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
}

export default AddProduct
