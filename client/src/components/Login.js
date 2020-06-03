import React, { Component } from 'react'
import { Button,Card,FormControl,FormGroup,Form} from 'react-bootstrap';

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password:''
        }
    }
    render() {
        return (
            <div>
                <Card style={{ marginTop:'14%', width: '50%', marginRight:'15%',  marginLeft:'25%'  }}>
                    <Form id="FormCSS"> 
                        <label>Login Form</label>
                        <FormGroup>
                            <FormControl type="email" name="email" placeholder="Enter email" required/>
                        </FormGroup>

                        <FormGroup>
                            <FormControl type="password" name="password" placeholder="Password" required/>
                        </FormGroup>

                        <Button variant="outline-primary" size="lg" type="submit">
                            Login
                        </Button>

                    </Form>
                </Card>
            </div>
        )
    }
}

export default Login;