// src/components/CourseCard.js
import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow divide-y divide-gray-200">
      <div className="w-full flex items-center justify-between p-6 space-x-6">
        <div className="flex-1 truncate">
          <div className="flex items-center space-x-3">
            <h3 className="text-sm font-medium text-gray-900 truncate">{course.title}</h3>
          </div>
          <p className="mt-1 text-sm text-gray-500 truncate">Instructor: {course.instructor}</p>
          <p className="mt-1 text-sm text-gray-500 truncate">Duration: {course.duration}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
