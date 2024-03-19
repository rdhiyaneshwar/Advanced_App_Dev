import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [courses, setCourses] = useState([
    { id: 1, title: 'Introduction to Web Development with HTML, CSS, JavaScript', instructor: 'IBM', duration: '1-3 months' },
    { id: 2, title: 'Introduction to Web Development', instructor: 'University of California, Davis', duration: '1-3 months' },
    { id: 3, title: 'Build a Portfolio Website with HTML, CSS, and JavaScript', instructor: 'Coursera Project Network', duration: 'Less than 2 hours' },
    { id: 4, title: 'Search Engine Optimization (SEO)', instructor: 'University of California, Davis', duration: '3-6 months' },
    { id: 5, title: 'Meta Back-End Developer', instructor: 'Meta', duration: '3-6 months' },
    { id: 6, title: 'Introduction to Front-End Development', instructor: 'Meta', duration: '1-4 weeks' },
    { id: 7, title: 'Python for Data Science, AI & Development', instructor: 'University of California, Davis', duration: '3-6 months' },
    { id: 8, title: 'Google UX design', instructor: 'Google', duration: '3-6 months' },
    { id: 9, title: 'Build a Full Website using WordPress', instructor: 'Coursera Project Network', duration: 'Less than 2 hours' },
    { id: 10, title: 'Web design for Everybody', instructor: 'University of Michigan', duration: '3-6 months' },
    { id: 11, title: 'HTML, CSS, and Javascript for Web Developers', instructor: 'Johns Hopkins University', duration: '1-3 months' }
  ]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [newCourse, setNewCourse] = useState({ title: '', instructor: '', duration: '' });

  const handleEditCourse = (course) => {
    setSelectedCourse(course);
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = () => {
    // Update the course details
    const updatedCourses = courses.map(course =>
      course.id === selectedCourse.id ? selectedCourse : course
    );
    setCourses(updatedCourses);
    setIsEditModalOpen(false);
  };

  const handleAddCourse = () => {
    setIsAddModalOpen(true);
  };

  const handleSaveNewCourse = () => {
    // Add the new course to the list
    const newCourseWithId = { ...newCourse, id: courses.length + 1 };
    setCourses([...courses, newCourseWithId]);
    setIsAddModalOpen(false);
    // Clear the form fields
    setNewCourse({ title: '', instructor: '', duration: '' });
  };

  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Admin Dashboard</h2>
          <p className="mt-4 text-lg text-gray-600">Manage your courses here.</p>
          <button onClick={handleAddCourse} className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add New Course</button>
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
                      <button onClick={() => handleEditCourse(course)} className="inline-flex items-center px-2.5 py-1 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Edit</button>
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

      {/* Edit Course Modal */}
      {isEditModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left">
                    <h3 className="text-lg font-medium text-gray-900">Edit Course</h3>
                    <div className="mt-4">
                      <div className="mb-4">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                        <input type="text" name="title" id="title" value={selectedCourse.title} onChange={(e) => setSelectedCourse({ ...selectedCourse, title: e.target.value })} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="instructor" className="block text-sm font-medium text-gray-700">Instructor</label>
                        <input type="text" name="instructor" id="instructor" value={selectedCourse.instructor} onChange={(e) => setSelectedCourse({ ...selectedCourse, instructor: e.target.value })} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="duration" className="block text-sm font-medium text-gray-700">Duration</label>
                        <input type="text" name="duration" id="duration" value={selectedCourse.duration} onChange={(e) => setSelectedCourse({ ...selectedCourse, duration: e.target.value })} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button onClick={handleSaveEdit} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm">Save</button>
                <button onClick={() => setIsEditModalOpen(false)} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Course Modal */}
      {isAddModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left">
                    <h3 className="text-lg font-medium text-gray-900">Add New Course</h3>
                    <div className="mt-4">
                      <div className="mb-4">
                        <label htmlFor="newTitle" className="block text-sm font-medium text-gray-700">Title</label>
                        <input type="text" name="newTitle" id="newTitle" value={newCourse.title} onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="newInstructor" className="block text-sm font-medium text-gray-700">Instructor</label>
                        <input type="text" name="newInstructor" id="newInstructor" value={newCourse.instructor} onChange={(e) => setNewCourse({ ...newCourse, instructor: e.target.value })} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="newDuration" className="block text-sm font-medium text-gray-700">Duration</label>
                        <input type="text" name="newDuration" id="newDuration" value={newCourse.duration} onChange={(e) => setNewCourse({ ...newCourse, duration: e.target.value })} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button onClick={handleSaveNewCourse} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm">Save</button>
                <button onClick={() => setIsAddModalOpen(false)} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
