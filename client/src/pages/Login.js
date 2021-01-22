import React, {useState,useContext} from 'react'
import { Button,Card,FormControl,FormGroup,Form} from 'react-bootstrap';
import {UserContext} from '../context/UsersContext'

import axios from 'axios'
 const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [isAuth, setIsAuth] = useContext(UserContext)
    
    //handle when login is clicked
    const onLogin = (e) => {
        e.preventDefault();
        axios.post('/api/authUsers',{email, password})
            .then(res => { 
               if(res.data.users){
                    setIsAuth(res.data.users.status)
                    localStorage.setItem('authToken', res.data.token)
                    localStorage.setItem('isAuth', res.data.users.status)
                    console.log(res.data.token)
                    props.history.push('/dashboard')
                }
                setErrMsg("Invalid information Entered");
           // setUsers(res.data)
            }).catch(err =>{  setErrMsg("Invalid information Entered");;
        })
    }

    return (
        <div>
            <Card style={{ marginTop:'14%', width: '50%', marginRight:'15%',  marginLeft:'25%'  }}>
                <Form id="FormCSS" onSubmit={onLogin}> 
                    <h2>Login</h2>
                    <FormGroup>
                        <FormControl type="email" name="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    </FormGroup>

                    <FormGroup>
                        <FormControl type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    </FormGroup>
                    <p>{errMsg}</p>
                    <Button variant="outline-primary" size="lg" type="submit" >
                        Login
                    </Button>
                    <div className="container signin">
                        <p>Don't have an account? <a href="/signup">Sign Up</a>.</p>
                    </div>
                </Form>
                {/* { !isLoggedIn ? null : <Redirect to="/dashboard" /> } */}
            </Card>
        </div>
    )
}

export default Login;