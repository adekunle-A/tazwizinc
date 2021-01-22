import React, {useState,useContext} from 'react'
import { Button,Card,FormControl,FormGroup,Form} from 'react-bootstrap';
import axios from 'axios'

const SignUp = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errMsg, setErrMsg] = useState('') 
    const [successMsg, setSuccessMsg] = useState('')
    const [showMsg, setShowMsg] = useState(false)
    const [showMsgSucess, setShowMsgSuccess] = useState(false)
   //const [isAuth, setIsAuth] = useContext(UserContext)
       
    //handle when login is clicked
    const onSignUp = (e) => {
        e.preventDefault();
        if(password !== confirmPassword){
            setErrMsg("Password must Match!");
            setShowMsg(true)
        }else{
        setShowMsg(false);
        axios.post('/api/users',{email, password})
            .then(res => { 
                if(res.data.users){
                        setSuccessMsg("Account Created Succesfully!");
                        setShowMsgSuccess(true)
                        //props.history.push('/login')
                        
                    }
                //setErrMsg("Invalid information Entered");
           // setUsers(res.data)
            }).catch(err =>{  setErrMsg("Invalid information Entered");
            setShowMsg(true);
        })
    }
    }
    return (
        <div>
            <Card style={{ marginTop:'14%', width: '50%', marginRight:'15%',  marginLeft:'25%'  }}>
                <Form id="FormCSS" onSubmit={onSignUp}> 
                    <h2>Register</h2>
                    <FormGroup>
                        <FormControl type="email" name="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    </FormGroup>

                    <FormGroup>
                        <FormControl type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    </FormGroup>

                    <FormGroup>
                        <FormControl type="password" name="newPassword" placeholder="ConfirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
                    </FormGroup>
                    {showMsg ? <p className="alert alert-danger">{errMsg}</p> : null }
                    {showMsgSucess ? <p className="alert alert-success">{successMsg}</p> : null }
                    <Button variant="outline-primary" size="lg" type="submit" >
                        Register
                    </Button>
                    <div className="container signin">
                        <p>Already have an account? <a href="/">Sign in</a>.</p>
                    </div>
                </Form>
                {/* { !isLoggedIn ? null : <Redirect to="/dashboard" /> } */}
            </Card>
        </div>
    )
}

export default SignUp
