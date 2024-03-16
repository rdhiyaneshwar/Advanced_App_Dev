import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold mt-8">Welcome to Course Management System</h1>
            <div className="mt-4">
                <p className="text-lg">Choose your role:</p>
                <ul className="mt-2">
                    <li><Link to="/admin_dashboard" className="text-blue-500 hover:underline">Admin</Link></li>
                    <li><Link to="/student_dashboard" className="text-blue-500 hover:underline">Student</Link></li>
                    <li><Link to="/staff_dashboard" className="text-blue-500 hover:underline">Office Staff</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Home;
