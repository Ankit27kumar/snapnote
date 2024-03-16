import './App.css'
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
// import { useCallback } from 'react';




function Notes() {
    // const[user, getUser] = useState(null);   
    return (
        <div>
            <div className='navbar'>
                <span className='brandName'>SnapNote
                    <Button className='loginbutton' variant="contained" href="/login">Login</Button>
                </span>
            </div>
            

            <h3>welcome here login to create notes</h3>
            </div>)
}

            export default Notes;