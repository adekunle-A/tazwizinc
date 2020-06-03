import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

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
                <form>
                    <input type="text" id="Email" name="Email" />
                    <input type="password" id="password" name="password" />
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </form>
            </div>
        )
    }
}

export default Login;