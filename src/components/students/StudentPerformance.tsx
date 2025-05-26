import React from 'react';
import { ArrowRight, BookOpen, Clock, BarChart2 } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

// Mock data for student performance
const performanceByCategory = [
  { name: 'Anatomy', value: 75, color: '#3B82F6' },
  { name: 'Physiology', value: 82, color: '#8B5CF6' },
  { name: 'Pathology', value: 68, color: '#EC4899' },
  { name: 'Pharmacology', value: 85, color: '#10B981' },
  { name: 'Microbiology', value: 72, color: '#F59E0B' },
];

const recentQuizzes = [
  {
    id: 1,
    title: 'Cardiovascular System',
    score: 85,
    totalQuestions: 25,
    timeTaken: '18 minutes',
    date: '2023-05-15',
  },
  {
    id: 2,
    title: 'Respiratory Disorders',
    score: 72,
    totalQuestions: 20,
    timeTaken: '15 minutes',
    date: '2023-05-12',
  },
  {
    id: 3,
    title: 'Neurological Examination',
    score: 90,
    totalQuestions: 30,
    timeTaken: '24 minutes',
    date: '2023-05-10',
  },
  {
    id: 4,
    title: 'Gastrointestinal Pathology',
    score: 68,
    totalQuestions: 22,
    timeTaken: '17 minutes',
    date: '2023-05-08',
  },
];

const timeSpentData = [
  { name: 'Questions', value: 45, color: '#3B82F6' },
  { name: 'Review', value: 30, color: '#8B5CF6' },
  { name: 'Practice', value: 25, color: '#10B981' },
];

// Custom tooltip for pie chart
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-gray-200 rounded-md shadow-sm">
        <p className="text-sm font-medium">{`${payload[0].name}: ${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

const StudentPerformance: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Top stats row */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white rounded-lg shadow-sm p-5">
          <h3 className="text-sm font-medium text-gray-500">Overall Score</h3>
          <div className="mt-2 flex items-baseline">
            <div className="text-3xl font-semibold text-gray-900">78%</div>
            <div className="ml-2 flex items-baseline text-sm font-medium text-green-600">
              <span>+2.5%</span>
              <span className="ml-1 text-gray-500">from last month</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-5">
          <h3 className="text-sm font-medium text-gray-500">Quizzes Completed</h3>
          <div className="mt-2 flex items-baseline">
            <div className="text-3xl font-semibold text-gray-900">24</div>
            <div className="ml-2 flex items-baseline text-sm font-medium text-green-600">
              <span>+5</span>
              <span className="ml-1 text-gray-500">from last month</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-5">
          <h3 className="text-sm font-medium text-gray-500">Avg. Time per Quiz</h3>
          <div className="mt-2 flex items-baseline">
            <div className="text-3xl font-semibold text-gray-900">18 min</div>
            <div className="ml-2 flex items-baseline text-sm font-medium text-red-600">
              <span>+2 min</span>
              <span className="ml-1 text-gray-500">from last month</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-5">
          <h3 className="text-sm font-medium text-gray-500">Weekly Study Time</h3>
          <div className="mt-2 flex items-baseline">
            <div className="text-3xl font-semibold text-gray-900">4.5 hrs</div>
            <div className="ml-2 flex items-baseline text-sm font-medium text-green-600">
              <span>+0.5 hrs</span>
              <span className="ml-1 text-gray-500">from last week</span>
            </div>
          </div>
        </div>
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="bg-white rounded-lg shadow-sm p-5">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Performance by Category</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={performanceByCategory}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={120}
                  innerRadius={60}
                  paddingAngle={2}
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {performanceByCategory.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend 
                  layout="horizontal" 
                  verticalAlign="bottom" 
                  align="center" 
                  wrapperStyle={{ paddingTop: '20px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-5">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Time Spent Distribution</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={timeSpentData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={120}
                  innerRadius={60}
                  paddingAngle={2}
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {timeSpentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend 
                  layout="horizontal" 
                  verticalAlign="bottom" 
                  align="center" 
                  wrapperStyle={{ paddingTop: '20px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent quizzes */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-5 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-800">Recent Quiz Results</h3>
            <button className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors flex items-center">
              <span>View All Results</span>
              <ArrowRight size={16} className="ml-1" />
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quiz Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Score
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Questions
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time Taken
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentQuizzes.map((quiz) => (
                <tr key={quiz.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <BookOpen size={16} className="text-blue-600" />
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">{quiz.title}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 font-medium">
                      {quiz.score}%
                    </div>
                    <div className="w-24 h-1.5 bg-gray-200 rounded-full mt-1.5">
                      <div 
                        className={`h-1.5 rounded-full ${
                          quiz.score >= 80 ? 'bg-green-500' : 
                          quiz.score >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${quiz.score}%` }}
                      ></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-900">
                      <BarChart2 size={16} className="mr-1.5 text-gray-400" />
                      <span>{quiz.totalQuestions} questions</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-900">
                      <Clock size={16} className="mr-1.5 text-gray-400" />
                      <span>{quiz.timeTaken}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(quiz.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentPerformance;
