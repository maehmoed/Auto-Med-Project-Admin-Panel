import React from 'react';
import { UserPlus, FileCheck, CreditCard, AlertCircle } from 'lucide-react';

type ActivityItem = {
  id: number;
  type: 'registration' | 'quiz_completion' | 'payment' | 'support';
  title: string;
  description: string;
  time: string;
  user?: {
    name: string;
    avatar?: string;
  };
};

// Mock data for recent activities
const activities: ActivityItem[] = [
  {
    id: 1,
    type: 'registration',
    title: 'New Student Registration',
    description: 'John Smith has registered for the platform',
    time: '5 minutes ago',
    user: {
      name: 'John Smith',
    }
  },
  {
    id: 2,
    type: 'quiz_completion',
    title: 'Quiz Completed',
    description: 'Cardiology Basics quiz was completed by 15 students',
    time: '25 minutes ago',
  },
  {
    id: 3,
    type: 'payment',
    title: 'Payment Received',
    description: 'Sarah Johnson upgraded to Premium plan',
    time: '1 hour ago',
    user: {
      name: 'Sarah Johnson',
    }
  },
  {
    id: 4,
    type: 'support',
    title: 'Support Ticket',
    description: 'New support ticket #1042 opened',
    time: '2 hours ago',
  },
  {
    id: 5,
    type: 'registration',
    title: 'New Student Registration',
    description: 'Emma Davis has registered for the platform',
    time: '3 hours ago',
    user: {
      name: 'Emma Davis',
    }
  },
  {
    id: 6,
    type: 'quiz_completion',
    title: 'Quiz Completed',
    description: 'Neurology Fundamentals quiz was completed by 12 students',
    time: '4 hours ago',
  },
];

const getActivityIcon = (type: string) => {
  switch (type) {
    case 'registration':
      return <UserPlus size={16} className="text-blue-500" />;
    case 'quiz_completion':
      return <FileCheck size={16} className="text-green-500" />;
    case 'payment':
      return <CreditCard size={16} className="text-purple-500" />;
    case 'support':
      return <AlertCircle size={16} className="text-amber-500" />;
    default:
      return null;
  }
};

const RecentActivity: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-5 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-800">Recent Activity</h3>
          <button className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">
            View All
          </button>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flow-root">
          <ul className="-mb-8">
            {activities.map((activity, index) => (
              <li key={activity.id}>
                <div className="relative pb-8">
                  {index !== activities.length - 1 && (
                    <span
                      className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                      aria-hidden="true"
                    ></span>
                  )}
                  <div className="relative flex items-start space-x-3">
                    <div className="relative">
                      <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center ring-8 ring-white">
                        {getActivityIcon(activity.type)}
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div>
                        <div className="text-sm">
                          <span className="font-medium text-gray-900">
                            {activity.title}
                          </span>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">
                          {activity.description}
                        </p>
                      </div>
                      <div className="mt-2 text-xs text-gray-500">
                        {activity.time}
                      </div>
                    </div>
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

export default RecentActivity;
