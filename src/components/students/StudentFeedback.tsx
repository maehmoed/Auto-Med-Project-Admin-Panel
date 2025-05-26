import React from 'react';
import { MessageSquare, ThumbsUp, ThumbsDown, Flag, User } from 'lucide-react';

// Mock data for student feedback
const feedbackData = [
  {
    id: 1,
    student: {
      name: 'John Smith',
      email: 'john.s@example.com',
    },
    type: 'quiz',
    subject: 'Cardiology Basics Quiz',
    message: 'The quiz was well structured, but some questions were ambiguous, particularly questions 5 and 8. It would be helpful to have clearer wording for those questions.',
    rating: 4,
    status: 'open',
    date: '2023-05-15T14:32:00',
  },
  {
    id: 2,
    student: {
      name: 'Sarah Johnson',
      email: 'sarah.j@example.com',
    },
    type: 'technical',
    subject: 'Cannot Submit Quiz Results',
    message: 'I completed the Respiratory System quiz but received an error when trying to submit my answers. The error message said "Connection timeout" and my progress was lost.',
    rating: 2,
    status: 'in_progress',
    date: '2023-05-14T09:45:00',
  },
  {
    id: 3,
    student: {
      name: 'Michael Brown',
      email: 'michael.b@example.com',
    },
    type: 'content',
    subject: 'Outdated Information in Pharmacology Module',
    message: 'The information about beta-blockers in the Pharmacology module seems to be outdated. The guidelines mentioned were from 2015, but there have been new recommendations published in 2022.',
    rating: 3,
    status: 'resolved',
    date: '2023-05-10T16:20:00',
  },
  {
    id: 4,
    student: {
      name: 'Emma Davis',
      email: 'emma.d@example.com',
    },
    type: 'suggestion',
    subject: 'Add More Practice Questions',
    message: 'The content is excellent, but I would love to see more practice questions for each module. It would help reinforce the learning and prepare better for exams.',
    rating: 5,
    status: 'open',
    date: '2023-05-08T11:15:00',
  },
  {
    id: 5,
    student: {
      name: 'David Wilson',
      email: 'david.w@example.com',
    },
    type: 'technical',
    subject: 'Mobile App Crashes',
    message: 'The mobile app keeps crashing when I try to access the flashcards section. I\'m using the latest iOS version on an iPhone 13.',
    rating: 2,
    status: 'in_progress',
    date: '2023-05-05T08:30:00',
  },
];

// Helper functions for rendering
const getStatusBadge = (status: string) => {
  switch (status) {
    case 'open':
      return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Open</span>;
    case 'in_progress':
      return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">In Progress</span>;
    case 'resolved':
      return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Resolved</span>;
    default:
      return null;
  }
};

const getTypeBadge = (type: string) => {
  switch (type) {
    case 'quiz':
      return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">Quiz</span>;
    case 'technical':
      return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Technical</span>;
    case 'content':
      return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">Content</span>;
    case 'suggestion':
      return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Suggestion</span>;
    default:
      return null;
  }
};

const renderRatingStars = (rating: number) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${
            i < rating ? 'text-yellow-400' : 'text-gray-300'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="ml-1 text-sm text-gray-600">{rating}/5</span>
    </div>
  );
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }) + ' at ' + date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });
};

const StudentFeedback: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-5 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-800">Student Feedback</h3>
          <div className="flex space-x-2">
            <select
              className="block pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            >
              <option value="all">All Types</option>
              <option value="quiz">Quiz</option>
              <option value="technical">Technical</option>
              <option value="content">Content</option>
              <option value="suggestion">Suggestion</option>
            </select>
            
            <select
              className="block pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            >
              <option value="all">All Status</option>
              <option value="open">Open</option>
              <option value="in_progress">In Progress</option>
              <option value="resolved">Resolved</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="overflow-hidden">
        <ul className="divide-y divide-gray-200">
          {feedbackData.map((feedback) => (
            <li key={feedback.id} className="p-5 hover:bg-gray-50">
              <div className="flex justify-between items-start">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <User className="h-6 w-6 text-gray-500" />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">{feedback.student.name}</div>
                    <div className="text-sm text-gray-500">{feedback.student.email}</div>
                    <div className="mt-1 flex items-center space-x-2">
                      {getTypeBadge(feedback.type)}
                      {getStatusBadge(feedback.status)}
                      <span className="text-xs text-gray-500">{formatDate(feedback.date)}</span>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  {renderRatingStars(feedback.rating)}
                </div>
              </div>
              
              <div className="mt-3">
                <p className="text-sm font-medium text-gray-900">{feedback.subject}</p>
                <p className="mt-1 text-sm text-gray-700">{feedback.message}</p>
              </div>
              
              <div className="mt-3 flex justify-between items-center">
                <div className="flex space-x-3">
                  <button className="flex items-center text-sm text-gray-600 hover:text-gray-900">
                    <MessageSquare size={16} className="mr-1" />
                    Reply
                  </button>
                  <button className="flex items-center text-sm text-gray-600 hover:text-green-600">
                    <ThumbsUp size={16} className="mr-1" />
                    Helpful
                  </button>
                  <button className="flex items-center text-sm text-gray-600 hover:text-red-600">
                    <Flag size={16} className="mr-1" />
                    Flag
                  </button>
                </div>
                
                <div>
                  <select
                    className="block pl-3 pr-10 py-1 text-xs border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md"
                    defaultValue={feedback.status}
                  >
                    <option value="open">Open</option>
                    <option value="in_progress">In Progress</option>
                    <option value="resolved">Resolved</option>
                  </select>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="p-5 border-t border-gray-200 flex items-center justify-center">
        <button className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Load More
        </button>
      </div>
    </div>
  );
};

export default StudentFeedback;
