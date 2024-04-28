import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import Signup from './Signup';
import Signin from './Signin';
import Modal1 from './Modal';

function App() {
  return (
    <>
     
      {/* <Home /> */}
     
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
         
        </Routes>
      </Router>
          
    </>
  );
}

export default App;
