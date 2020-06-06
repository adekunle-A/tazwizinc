import React, {useState,useEffect,useContext} from 'react'
import { Button,Card,FormControl,FormGroup,Form} from 'react-bootstrap';
import {UserContext} from '../context/UsersContext'
import axios from 'axios'
 const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [users, setUsers] = useContext(UserContext)
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    //handle when login is clicked
    const onLogin = (e) => {
        e.preventDefault();
        console.log(email)
        console.log(password)
        axios.post('/api/authUsers',{email, password})
            .then(res => {
                console.log(res.data.users)
                if(res.data.users){
                    setIsLoggedIn(true)
                    //history.push('/dashboard');
                }
            setUsers(res.data)
            }).catch(err =>{ console.error(err);
        })
    }


    return (
        <div>
            <Card style={{ marginTop:'14%', width: '50%', marginRight:'15%',  marginLeft:'25%'  }}>
                <Form id="FormCSS" onSubmit={onLogin}> 
                    <label>Login Form</label>
                    <FormGroup>
                        <FormControl type="email" name="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    </FormGroup>

                    <FormGroup>
                        <FormControl type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    </FormGroup>

                    <Button variant="outline-primary" size="lg" type="submit">
                        Login
                    </Button>

                </Form>
            </Card>
        </div>
    )
}

export default Login;