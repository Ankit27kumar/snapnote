import './App.css';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Writenode from './Writenode';
// import { useHistory } from 'react-router-dom';




function Login(){
    const [username, getUsername] = useState("");
    const [password, getPassword] = useState("");
    const[user, userExit] = useState(null);
    const[mess, getMess] = useState(null);
    // const history = useHistory(); 

    function onPress() {
        fetch("https://snapnote-backend.vercel.app/login", {
            method: "POST",
            body: JSON.stringify({
                username: username,
                password: password
            }),
            headers: {
                "Content-Type": "application/json",
                "Authorization":"Bearer " + localStorage.getItem("token")
            }
        }).then(resp => resp.json())
            .then(data => {
                console.log(data);
                getMess(data.message);
                localStorage.setItem("token", data.token);
                userExit(data.token);
            });
    }

    if(user){
        return(
            <div>
             
                {window.open("/edata")}
            </div>
           
        )
    }
    return(
        <Card className='formcard'>   
   <div  className='loginarea'>

   <center>
   
   <p style={{color:"red"}}>{mess}</p>
   <div ><input className='username' type="text" placeholder='Email' onChange={(e) => {
                        getUsername(e.target.value)}} /> </div>
   <div ><input className='username' type="password" placeholder='password' onChange={(e) => {
                        getPassword(e.target.value)}} /> </div>
   <Button variant="contained"  onClick={onPress}>Login</Button>
   <br />
   <span>Don't have account?</span><Link to="/signup">SignUp</Link>
  
   </center>
    </div>
    </Card>
   )
}

export default Login;
