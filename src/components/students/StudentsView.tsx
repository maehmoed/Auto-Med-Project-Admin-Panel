import React, { useState } from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import { Plus } from 'lucide-react';
import StudentList from './StudentList';
import StudentPerformance from './StudentPerformance';
import StudentFeedback from './StudentFeedback';

const StudentsView: React.FC = () => {
  const [activeTab, setActiveTab] = useState('list');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <nav className="flex space-x-4">
          <Link
            to="/students"
            className={`px-3 py-2 text-sm font-medium rounded-md ${
              activeTab === 'list'
                ? 'bg-blue-100 text-blue-700'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('list')}
          >
            All Students
          </Link>
          
          <Link
            to="/students/performance"
            className={`px-3 py-2 text-sm font-medium rounded-md ${
              activeTab === 'performance'
                ? 'bg-blue-100 text-blue-700'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('performance')}
          >
            Performance
          </Link>
          
          <Link
            to="/students/feedback"
            className={`px-3 py-2 text-sm font-medium rounded-md ${
              activeTab === 'feedback'
                ? 'bg-blue-100 text-blue-700'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('feedback')}
          >
            Feedback
          </Link>
        </nav>
        
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <Plus size={16} className="mr-2" />
          Add Student
        </button>
      </div>
      
      <Outlet />
    </div>
  );
};

export default StudentsView;
