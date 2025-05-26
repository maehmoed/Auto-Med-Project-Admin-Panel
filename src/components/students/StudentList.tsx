import React, { useState } from 'react';
import { Search, Filter, Download, ChevronDown, ChevronUp, Edit, Trash2, User } from 'lucide-react';

// Mock data for students
const studentsData = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john.smith@example.com',
    status: 'active',
    completedQuizzes: 15,
    avgScore: 78,
    lastActive: '2 hours ago',
    subscription: 'Premium',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    status: 'active',
    completedQuizzes: 12,
    avgScore: 82,
    lastActive: '1 day ago',
    subscription: 'Premium',
  },
  {
    id: 3,
    name: 'Michael Brown',
    email: 'michael.b@example.com',
    status: 'inactive',
    completedQuizzes: 8,
    avgScore: 65,
    lastActive: '1 week ago',
    subscription: 'Basic',
  },
  {
    id: 4,
    name: 'Emma Davis',
    email: 'emma.d@example.com',
    status: 'active',
    completedQuizzes: 20,
    avgScore: 91,
    lastActive: '3 hours ago',
    subscription: 'Premium',
  },
  {
    id: 5,
    name: 'David Wilson',
    email: 'david.w@example.com',
    status: 'active',
    completedQuizzes: 10,
    avgScore: 74,
    lastActive: '5 hours ago',
    subscription: 'Basic',
  },
  {
    id: 6,
    name: 'Jessica Taylor',
    email: 'jessica.t@example.com',
    status: 'inactive',
    completedQuizzes: 5,
    avgScore: 60,
    lastActive: '2 weeks ago',
    subscription: 'Basic',
  },
  {
    id: 7,
    name: 'Daniel Anderson',
    email: 'daniel.a@example.com',
    status: 'active',
    completedQuizzes: 18,
    avgScore: 85,
    lastActive: '1 day ago',
    subscription: 'Premium',
  },
  {
    id: 8,
    name: 'Olivia Martin',
    email: 'olivia.m@example.com',
    status: 'active',
    completedQuizzes: 14,
    avgScore: 79,
    lastActive: '4 hours ago',
    subscription: 'Premium',
  },
];

type SortField = 'name' | 'completedQuizzes' | 'avgScore' | 'lastActive' | 'subscription';
type SortDirection = 'asc' | 'desc';

const StudentList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'inactive'>('all');
  const [subscriptionFilter, setSubscriptionFilter] = useState<'all' | 'Basic' | 'Premium'>('all');
  const [sortField, setSortField] = useState<SortField>('name');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [visibleStudents, setVisibleStudents] = useState(10);
  
  // Sorting function
  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };
  
  // Filter and sort students
  const filteredAndSortedStudents = studentsData
    .filter(student => {
      // Search filter
      const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           student.email.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Status filter
      const matchesStatus = statusFilter === 'all' || student.status === statusFilter;
      
      // Subscription filter
      const matchesSubscription = subscriptionFilter === 'all' || student.subscription === subscriptionFilter;
      
      return matchesSearch && matchesStatus && matchesSubscription;
    })
    .sort((a, b) => {
      // Sort by selected field
      if (sortField === 'name') {
        return sortDirection === 'asc' 
          ? a.name.localeCompare(b.name) 
          : b.name.localeCompare(a.name);
      } else if (sortField === 'completedQuizzes') {
        return sortDirection === 'asc' 
          ? a.completedQuizzes - b.completedQuizzes 
          : b.completedQuizzes - a.completedQuizzes;
      } else if (sortField === 'avgScore') {
        return sortDirection === 'asc' 
          ? a.avgScore - b.avgScore 
          : b.avgScore - a.avgScore;
      } else if (sortField === 'lastActive') {
        // For demo purposes - simple string comparison
        return sortDirection === 'asc' 
          ? a.lastActive.localeCompare(b.lastActive) 
          : b.lastActive.localeCompare(a.lastActive);
      } else if (sortField === 'subscription') {
        return sortDirection === 'asc' 
          ? a.subscription.localeCompare(b.subscription) 
          : b.subscription.localeCompare(a.subscription);
      }
      return 0;
    });

  // Load more students
  const loadMore = () => {
    setVisibleStudents(prevVisibleStudents => prevVisibleStudents + 10);
  };

  // Render sort indicator
  const renderSortIndicator = (field: SortField) => {
    if (sortField !== field) return null;
    return sortDirection === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      {/* Header with search and filters */}
      <div className="p-5 border-b border-gray-200">
        <div className="sm:flex sm:justify-between">
          <div className="relative max-w-xs w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Search students"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="mt-3 sm:mt-0 sm:ml-4 flex space-x-2">
            <div className="relative inline-block text-left">
              <select
                className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as 'all' | 'active' | 'inactive')}
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
            
            <div className="relative inline-block text-left">
              <select
                className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                value={subscriptionFilter}
                onChange={(e) => setSubscriptionFilter(e.target.value as 'all' | 'Basic' | 'Premium')}
              >
                <option value="all">All Plans</option>
                <option value="Basic">Basic</option>
                <option value="Premium">Premium</option>
              </select>
            </div>
            
            <button
              type="button"
              className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Filter size={16} className="mr-2" />
              More Filters
            </button>
            
            <button
              type="button"
              className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Download size={16} className="mr-2" />
              Export
            </button>
          </div>
        </div>
      </div>
      
      {/* Student table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center cursor-pointer" onClick={() => handleSort('name')}>
                  Student
                  {renderSortIndicator('name')}
                </div>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center cursor-pointer" onClick={() => handleSort('completedQuizzes')}>
                  Completed Quizzes
                  {renderSortIndicator('completedQuizzes')}
                </div>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center cursor-pointer" onClick={() => handleSort('avgScore')}>
                  Avg. Score
                  {renderSortIndicator('avgScore')}
                </div>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center cursor-pointer" onClick={() => handleSort('lastActive')}>
                  Last Active
                  {renderSortIndicator('lastActive')}
                </div>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center cursor-pointer" onClick={() => handleSort('subscription')}>
                  Subscription
                  {renderSortIndicator('subscription')}
                </div>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredAndSortedStudents.slice(0, visibleStudents).map((student) => (
              <tr key={student.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <User className="h-6 w-6 text-gray-500" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{student.name}</div>
                      <div className="text-sm text-gray-500">{student.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{student.completedQuizzes}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{student.avgScore}%</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{student.lastActive}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    student.subscription === 'Premium' 
                      ? 'bg-purple-100 text-purple-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {student.subscription}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    student.status === 'active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {student.status === 'active' ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-3">
                    <Edit size={16} />
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination */}
      <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-center">
        <button 
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          onClick={loadMore}
        >
          Load more
        </button>
      </div>
    </div>
  );
};

export default StudentList;
