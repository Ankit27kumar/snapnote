import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css'
import Login from './Login';
import Notes from "./Notes";
import Signup from './Signup';
import Writenode from './Writenode';

function App() {
  

  return (
    <>
      <div>
        <Router>
          {/* <Notes /> */}
          <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/edata" element={<Writenode />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Routes>
        </Router>
      </div>
    </>
  )
  }  

export default App
