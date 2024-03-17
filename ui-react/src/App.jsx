import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import Navbar from './components/User/Navbar';
import Footer from './components/User/Footer';
import styles from './style';
import Stats from './components/Admin/Stats';

const App = () =>  (
  <div className="bg-primary w-full overflow-hidden">

    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}> 
        <Navbar/>
      </div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}> 
        <Home/>
      </div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}> 
        <Stats/>
      </div>
    </div>
  </div>

  
);



export default App;
