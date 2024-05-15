import './App.css'
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import h1 from '/images/note.jpg';
import Grid from '@mui/material/Grid';
// import { useCallback } from 'react';




function Notes() {
    // const[user, getUser] = useState(null);   
    return (
        <div>
            <div className='navbar'>
                <span className='brandName'>SnapNote
                    {/* <Button className='loginbutton' variant="contained" href="/login">Create Notes</Button> */}
                </span>
            </div>
            <div className='homepage'>
            <Grid container spacing={2}>
                        {/* First column */}
                        <Grid className='homedetail' item xs={12} sm={6} >
                            <p className='hometitle'>Seamlessly Capture, Organize, and Inspire Your Ideas</p>
                            <p className='homedescription'>where ideas come to life. Effortlessly capture, organize, and access your thoughts anytime, anywhere. Streamline your note-taking experience with SnapNote's intuitive interface and powerful features. Join us and turn your ideas into reality.</p>
                            <Button className='learnmore'  variant="contained" href="/login">Get Started- its free!</Button>
                        </Grid>
                        {/* Second column */}
                        <Grid item xs={12} sm={6}  >
                            <img src={h1} className='homeimage'/>
                        </Grid>
                    </Grid>
</div>
            {/* <h3>welcome here login to create notes</h3> */}
            </div>)
}

            export default Notes;
