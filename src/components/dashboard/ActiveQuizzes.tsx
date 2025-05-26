import React from 'react';
import { Clock, Users, BarChart2, ChevronRight } from 'lucide-react';

// Mock data for active quizzes
const activeQuizzes = [
  {
    id: 1,
    title: 'Cardiovascular System Basics',
    participants: 24,
    timeRemaining: '45 minutes',
    avgScore: '72%',
    category: 'Cardiology',
  },
  {
    id: 2,
    title: 'Neurology Fundamentals',
    participants: 18,
    timeRemaining: '30 minutes',
    avgScore: '68%',
    category: 'Neurology',
  },
  {
    id: 3,
    title: 'Respiratory System Disorders',
    participants: 15,
    timeRemaining: '15 minutes',
    avgScore: '75%',
    category: 'Pulmonology',
  },
  {
    id: 4,
    title: 'Pharmacology: Antibiotics',
    participants: 20,
    timeRemaining: '60 minutes',
    avgScore: '81%',
    category: 'Pharmacology',
  },
];

const ActiveQuizzes: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm h-full">
      <div className="p-5 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-800">Active Quizzes</h3>
          <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
            {activeQuizzes.length} Active
          </span>
        </div>
      </div>
      
      <div className="overflow-y-auto" style={{ maxHeight: '330px' }}>
        {activeQuizzes.map((quiz) => (
          <div key={quiz.id} className="p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <div className="mb-2">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-gray-900">{quiz.title}</h4>
                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                  {quiz.category}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-2">
              <div className="flex items-center text-sm text-gray-600">
                <Users size={14} className="mr-1.5 text-gray-400" />
                <span>{quiz.participants}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Clock size={14} className="mr-1.5 text-gray-400" />
                <span>{quiz.timeRemaining}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <BarChart2 size={14} className="mr-1.5 text-gray-400" />
                <span>{quiz.avgScore}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4">
        <button className="w-full flex items-center justify-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">
          <span>View All Quizzes</span>
          <ChevronRight size={16} className="ml-1" />
        </button>
      </div>
    </div>
  );
};

export default ActiveQuizzes;
