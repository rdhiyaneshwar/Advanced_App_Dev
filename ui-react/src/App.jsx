import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import Navbar from './components/User/Navbar';
import Footer from './components/User/Footer';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/home" element={<Home />} /> 
          <Route path="/login" component={<LoginPage/>} />
          <Route path="/signup" component={<SignupPage/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
