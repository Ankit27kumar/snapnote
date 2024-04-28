import Button from 'react-bootstrap/Button';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'

function Signup(){
  const [username, getUsername] = useState("");
  const [password, getPassword] = useState("");
  const [user, userExit] = useState(null);
  const [mess, getMess] = useState(null);
  // const history = useHistory(); 

  function onePress() {
    fetch("http://localhost:4000/user/signup", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password
      }),
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    }).then(resp => resp.json())
      .then(data => {
        console.log(data);
        getMess(data.message);
        localStorage.setItem("token", data.token);
        userExit(data.token);
      });
  }
  if (user) {
    return (
      <div>

        {window.open("/signin")}
      </div>

    )
  }

    return(
      <center className='sg'>
      <Card className='signupcard'>
      <h4>Welcome to SkAI</h4>
      {mess}
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control className='formdet' type="email" placeholder="Email/Username" onChange={(e) => {
              getUsername(e.target.value)
            }} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control className='formdet' type="password" placeholder="Password" onChange={(e) => {
              getPassword(e.target.value)
            }} />
      </Form.Group>
      <Button className='signupbutton' variant="primary" type="submit"   onClick={onePress}>
        Sign Up
      </Button>
       
     
      <p className="connect">Connect With</p>
      <Button className='facebook' variant="dark" href=""><FontAwesomeIcon icon={faFacebookF} /></Button>
      <Button className='twitter' variant="dark" href=""> <FontAwesomeIcon icon={faTwitter} /></Button>
      <Button className='envelope' variant="dark" href=""><FontAwesomeIcon icon={faEnvelope} /></Button>
      <p><Link className='fgpas' href="">Forgot Password?</Link></p>
      {/* <p className='notmember'> Not a member yet?  </p><Link className='signinq' href="/signup">Sign Up</Link> */}
     
    </Form>
    </Card>
    </center>
    )
}

export default Signup;