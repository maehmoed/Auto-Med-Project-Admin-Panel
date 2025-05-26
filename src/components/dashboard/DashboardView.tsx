import React from 'react';
import { 
  Users, 
  BookOpen, 
  ListChecks, 
  Percent 
} from 'lucide-react';
import StatCard from './StatCard';
import AreaChart from './AreaChart';
import BarChart from './BarChart';
import ActiveQuizzes from './ActiveQuizzes';
import RecentActivity from './RecentActivity';

// Mock data for charts
const userGrowthData = [
  { month: 'Jan', users: 400, newUsers: 100 },
  { month: 'Feb', users: 520, newUsers: 120 },
  { month: 'Mar', users: 650, newUsers: 130 },
  { month: 'Apr', users: 800, newUsers: 150 },
  { month: 'May', users: 920, newUsers: 120 },
  { month: 'Jun', users: 1050, newUsers: 130 },
  { month: 'Jul', users: 1200, newUsers: 150 },
  { month: 'Aug', users: 1350, newUsers: 150 },
  { month: 'Sep', users: 1500, newUsers: 150 },
  { month: 'Oct', users: 1650, newUsers: 150 },
  { month: 'Nov', users: 1800, newUsers: 150 },
  { month: 'Dec', users: 2000, newUsers: 200 },
];

const quizCompletionData = [
  { day: 'Mon', completed: 65, average: 58 },
  { day: 'Tue', completed: 72, average: 60 },
  { day: 'Wed', completed: 85, average: 65 },
  { day: 'Thu', completed: 78, average: 62 },
  { day: 'Fri', completed: 90, average: 70 },
  { day: 'Sat', completed: 40, average: 35 },
  { day: 'Sun', completed: 35, average: 30 },
];

const performanceData = [
  { category: 'Anatomy', score: 78, benchmark: 75 },
  { category: 'Physiology', score: 82, benchmark: 75 },
  { category: 'Pathology', score: 68, benchmark: 75 },
  { category: 'Pharmacology', score: 85, benchmark: 75 },
  { category: 'Microbiology', score: 72, benchmark: 75 },
  { category: 'Biochemistry', score: 76, benchmark: 75 },
];

// Time range options for charts
const timeRanges = [
  { label: 'Weekly', value: 'weekly' },
  { label: 'Monthly', value: 'monthly' },
  { label: 'Quarterly', value: 'quarterly' },
  { label: 'Yearly', value: 'yearly' },
];

const DashboardView: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard 
          title="Total Users" 
          value="2,452"
          icon={<Users size={20} />}
          change={{
            value: 12.5,
            type: 'increase',
            period: 'since last month'
          }}
        />
        
        <StatCard 
          title="Active Quizzes" 
          value="18"
          icon={<BookOpen size={20} />}
          change={{
            value: 5.8,
            type: 'increase',
            period: 'since last month'
          }}
        />
        
        <StatCard 
          title="Question Bank" 
          value="1,245"
          icon={<ListChecks size={20} />}
          change={{
            value: 8.2,
            type: 'increase',
            period: 'since last month'
          }}
        />
        
        <StatCard 
          title="Avg. Score" 
          value="76.8%"
          icon={<Percent size={20} />}
          change={{
            value: 2.3,
            type: 'increase',
            period: 'since last month'
          }}
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <AreaChart 
          title="User Growth"
          data={userGrowthData}
          xAxisKey="month"
          dataKeys={[
            { key: 'users', color: '#3B82F6', name: 'Total Users' },
            { key: 'newUsers', color: '#8B5CF6', name: 'New Users' }
          ]}
          timeRanges={timeRanges}
        />
        
        <BarChart 
          title="Quiz Completion Rate"
          data={quizCompletionData}
          xAxisKey="day"
          dataKeys={[
            { key: 'completed', color: '#0CA5B0', name: 'Completed' },
            { key: 'average', color: '#D1D5DB', name: 'Average' }
          ]}
          timeRanges={[
            { label: 'This Week', value: 'thisWeek' },
            { label: 'Last Week', value: 'lastWeek' },
            { label: 'Last Month', value: 'lastMonth' },
          ]}
        />
      </div>

      {/* Third Row */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <BarChart 
            title="Performance by Category"
            data={performanceData}
            xAxisKey="category"
            dataKeys={[
              { key: 'score', color: '#8B5CF6', name: 'Avg. Score' },
              { key: 'benchmark', color: '#D1D5DB', name: 'Benchmark' }
            ]}
          />
        </div>
        
        <div className="lg:col-span-1">
          <ActiveQuizzes />
        </div>
      </div>

      {/* Fourth Row */}
      <div>
        <RecentActivity />
      </div>
    </div>
  );
};

export default DashboardView;
