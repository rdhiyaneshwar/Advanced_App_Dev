import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import Navbar from './components/User/Navbar';
import Footer from './components/User/Footer';
import styles from './style';
import Stats from './components/Admin/Stats';
import TermsAndConditions from './components/Admin/TermsAndConditions';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Loader from './components/User/Loader';

const App = () =>  (
  <Router>
    <Suspense fallback={<Loader />}>
  <div className="bg-primary w-full overflow-hidden">

    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}> 
        <Navbar/>
      </div>
    </div>

    <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>

    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}> 
        <Footer/>
      </div>
    </div>

  </div>
  </Suspense>
  </Router>
);



export default App;
