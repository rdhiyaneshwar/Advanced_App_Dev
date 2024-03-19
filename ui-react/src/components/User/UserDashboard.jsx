import React, { useState } from 'react';

const UserDashboard = ({ userName: initialName, userEmail: initialEmail }) => {
  const [userName, setUserName] = useState(initialName);
  const [userEmail, setUserEmail] = useState(initialEmail);
  const [isEditing, setIsEditing] = useState(false); 

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const courses = [
    { id: 1, title: 'HTML, CSS and Javascript for Web Developers', instructor: 'John Hopkins University', duration: '1-3 months' },
    { id: 2, title: 'Meta Front-End Developer', instructor: 'Meta', duration: '3-6 months' },
    { id: 3, title: 'IBM Full Software Stack Developer', instructor: 'IBM', duration: '3-6 months' },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Welcome, {userName}!</h2>
          <p className="mt-4 text-lg text-gray-600">
            Here's your dashboard with all your courses and progress.
          </p>
          <div className="mt-4 text-lg text-gray-600">
            <p className="inline-block font-semibold">Name:</p>
            {isEditing ? ( 
              <input
                type="text"
                value={userName}
                onChange={handleNameChange}
                className="ml-2 px-3 py-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            ) : ( 
              <p className="ml-2 inline-block">{userName}</p>
            )}
            {!isEditing && ( 
              <button onClick={handleEdit} className="ml-2 inline-flex items-center px-2 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Edit</button>
            )}
          </div>
          <div className="mt-4 text-lg text-gray-600">
            <p className="inline-block font-semibold">Email:</p>
            {isEditing ? ( 
              <input
                type="email"
                value={userEmail}
                onChange={handleEmailChange}
                className="ml-2 px-3 py-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            ) : ( 
              <p className="ml-2 inline-block">{userEmail}</p>
            )}
          </div>
          {isEditing && ( 
            <button onClick={handleSave} className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
          )}
        </div>

        {/* Course listing */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-900">Your Courses:</h3>
          <ul className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map(course => (
              <li key={course.id} className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
                <div className="w-full flex items-center justify-between p-6 space-x-6">
                  <div className="flex-1 truncate">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-sm font-medium text-gray-900 truncate">{course.title}</h3>
                    </div>
                    <p className="mt-1 text-sm text-gray-500 truncate">Instructor: {course.instructor}</p>
                    <p className="mt-1 text-sm text-gray-500 truncate">Duration: {course.duration}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
