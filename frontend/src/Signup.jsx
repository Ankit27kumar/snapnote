import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';



function Signup() {
    const [username, getUsername] = useState();
    const [password, getPassword] = useState();
    const[user, exitUser] = useState();
    const[mess, getMess] = useState();
    

if(user){
    return(
        <>
            {window.open("/login")}
        </>
    )
}

    return (
        <div className='loginarea'>
            <center>
                <div >
                 {mess}
                    <input className='username' type="text" placeholder='Email' onChange={(e) => {
                        getUsername(e.target.value)
                    }} /> </div>
                <div ><input className='username' type="password" placeholder='password' onChange={(e) => {
                    getPassword(e.target.value)
                }} /> </div>
                <Button variant="contained" 
                    onClick={async () => {
                        await axios.post("http://localhost:3000/signup", {
                            username: username,
                            password: password
                        }).then(resp => {
                            // console.log(resp.data.message);
                            getMess("Error")
                           const token = resp.data.token
                           exitUser(token);
                            console.log("code reached yaha tak", token);
                            localStorage.setItem("token", token);
                            // window.location="/";
                        })
                    }}
                >Signup</Button>
            </center>
        </div>
    )
}

export default Signup;