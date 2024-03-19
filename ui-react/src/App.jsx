import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/User/Navbar';
import Footer from './components/User/Footer';
import Loader from './components/User/Loader';
import AdminDashboard from './components/Admin/AdminDashboard';

// Lazy load components
const Home = React.lazy(() => import('./pages/Home'));
const Stats = React.lazy(() => import('./components/Admin/Stats'));
const TermsAndConditions = React.lazy(() => import('./components/Admin/TermsAndConditions'));
const Login = React.lazy(() => import('./components/Auth/Login'));
const Signup = React.lazy(() => import('./components/Auth/Signup'));
const Plans = React.lazy(() => import('./components/Admin/Plans'));
const UserDashboard = React.lazy(() => import('./components/User/UserDashboard'));


const App = () => (
  <Router>
    <div className="bg-primary w-full overflow-hidden">
      <div>
        <Navbar />
      </div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/userdashboard" element={<UserDashboard userName="Dhiyanesh" userEmail="rdhiyaneshwar04@gmail.com" />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
        </Routes>
      </Suspense>
      <div>
        <Footer />
      </div>
    </div>
  </Router>
);

export default App;
