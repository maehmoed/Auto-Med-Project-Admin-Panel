import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  GraduationCap,
  FileQuestion, 
  BookOpen,
  CreditCard, 
  Settings,
  BarChart2,
  MessageSquare,
  HelpCircle,
  LogOut,
  ChevronDown,
  ChevronRight,
  FileText,
  Wallet,
  History,
  Bell
} from 'lucide-react';

type NavItemProps = {
  icon: React.ReactNode;
  title: string;
  path: string;
  isActive: boolean;
  hasSubMenu?: boolean;
  isExpanded?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  description?: string;
};

const NavItem: React.FC<NavItemProps> = ({ 
  icon, 
  title, 
  path, 
  isActive, 
  hasSubMenu = false, 
  isExpanded = false, 
  onClick, 
  children,
  description
}) => {
  return (
    <div className="mb-1">
      <Link 
        to={path} 
        className={`group flex items-center px-4 py-3 text-sm font-medium rounded-lg ${
          isActive 
            ? 'bg-blue-100 text-blue-700' 
            : 'text-gray-700 hover:bg-gray-100'
        }`}
        onClick={onClick}
        title={description}
      >
        <span className="mr-3">{icon}</span>
        <span className="flex-1">{title}</span>
        {hasSubMenu && (
          <span className="ml-auto">
            {isExpanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
          </span>
        )}
      </Link>
      {hasSubMenu && isExpanded && (
        <div className="pl-10 mt-1 space-y-1">
          {children}
        </div>
      )}
    </div>
  );
};

const Sidebar: React.FC<{ isMobileOpen: boolean; toggleMobileSidebar: () => void }> = ({ 
  isMobileOpen, 
  toggleMobileSidebar 
}) => {
  const location = useLocation();
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const toggleSubMenu = (menu: string) => {
    setExpandedMenu(expandedMenu === menu ? null : menu);
  };

  return (
    <div 
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out ${
        isMobileOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}
    >
      <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
        <div className="flex items-center">
          <span className="ml-2 text-lg font-semibold text-gray-800">AUOT MED</span>
        </div>
      </div>

      <div className="p-4 overflow-y-auto h-[calc(100vh-4rem)]">
        {/* Overview */}
        <NavItem 
          icon={<LayoutDashboard size={20} />} 
          title="Dashboard" 
          path="/" 
          isActive={location.pathname === '/'}
          description="Overview of key metrics and activities"
        />
        
        {/* Students Section */}
        <NavItem 
          icon={<Users size={20} />} 
          title="Students" 
          path="/students" 
          isActive={location.pathname.includes('/students')} 
          hasSubMenu={true}
          isExpanded={expandedMenu === 'students'}
          onClick={() => toggleSubMenu('students')}
          description="Manage student profiles and performance"
        >
          <Link 
            to="/students" 
            className={`block py-2 pl-3 pr-4 text-sm rounded-md ${
              location.pathname === '/students' 
                ? 'text-blue-700' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            All Students
          </Link>
          <Link 
            to="/students/performance" 
            className={`block py-2 pl-3 pr-4 text-sm rounded-md ${
              location.pathname === '/students/performance' 
                ? 'text-blue-700' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Performance Analytics
          </Link>
          <Link 
            to="/students/feedback" 
            className={`block py-2 pl-3 pr-4 text-sm rounded-md ${
              location.pathname === '/students/feedback' 
                ? 'text-blue-700' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Feedback & Support
          </Link>
        </NavItem>
        
        {/* Quiz Management */}
        <NavItem 
          icon={<FileQuestion size={20} />} 
          title="Quizzes" 
          path="/quizzes" 
          isActive={location.pathname.includes('/quizzes')} 
          hasSubMenu={true}
          isExpanded={expandedMenu === 'quizzes'}
          onClick={() => toggleSubMenu('quizzes')}
          description="Manage quizzes and question bank"
        >
          <Link 
            to="/quizzes" 
            className={`block py-2 pl-3 pr-4 text-sm rounded-md ${
              location.pathname === '/quizzes' 
                ? 'text-blue-700' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Active Quizzes
          </Link>
          <Link 
            to="/quizzes/create" 
            className={`block py-2 pl-3 pr-4 text-sm rounded-md ${
              location.pathname === '/quizzes/create' 
                ? 'text-blue-700' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Create Quiz
          </Link>
          <Link 
            to="/quizzes/questions" 
            className={`block py-2 pl-3 pr-4 text-sm rounded-md ${
              location.pathname === '/quizzes/questions' 
                ? 'text-blue-700' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Question Bank
          </Link>
          <Link 
            to="/quizzes/categories" 
            className={`block py-2 pl-3 pr-4 text-sm rounded-md ${
              location.pathname === '/quizzes/categories' 
                ? 'text-blue-700' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Categories
          </Link>
        </NavItem>

        {/* Analytics */}
        <NavItem 
          icon={<BarChart2 size={20} />} 
          title="Analytics" 
          path="/analytics" 
          isActive={location.pathname.includes('/analytics')} 
          hasSubMenu={true}
          isExpanded={expandedMenu === 'analytics'}
          onClick={() => toggleSubMenu('analytics')}
          description="View detailed analytics and reports"
        >
          <Link 
            to="/analytics/performance" 
            className={`block py-2 pl-3 pr-4 text-sm rounded-md ${
              location.pathname === '/analytics/performance' 
                ? 'text-blue-700' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Performance Metrics
          </Link>
          <Link 
            to="/analytics/engagement" 
            className={`block py-2 pl-3 pr-4 text-sm rounded-md ${
              location.pathname === '/analytics/engagement' 
                ? 'text-blue-700' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Engagement Stats
          </Link>
          <Link 
            to="/analytics/reports" 
            className={`block py-2 pl-3 pr-4 text-sm rounded-md ${
              location.pathname === '/analytics/reports' 
                ? 'text-blue-700' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Custom Reports
          </Link>
        </NavItem>
        
        {/* Payments */}
        <NavItem 
          icon={<CreditCard size={20} />} 
          title="Payments" 
          path="/payments" 
          isActive={location.pathname.includes('/payments')} 
          hasSubMenu={true}
          isExpanded={expandedMenu === 'payments'}
          onClick={() => toggleSubMenu('payments')}
          description="Manage payments and subscriptions"
        >
          <Link 
            to="/payments/subscriptions" 
            className={`block py-2 pl-3 pr-4 text-sm rounded-md ${
              location.pathname === '/payments/subscriptions' 
                ? 'text-blue-700' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Subscriptions
          </Link>
          <Link 
            to="/payments/transactions" 
            className={`block py-2 pl-3 pr-4 text-sm rounded-md ${
              location.pathname === '/payments/transactions' 
                ? 'text-blue-700' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Transactions
          </Link>
          <Link 
            to="/payments/refunds" 
            className={`block py-2 pl-3 pr-4 text-sm rounded-md ${
              location.pathname === '/payments/refunds' 
                ? 'text-blue-700' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Refunds
          </Link>
        </NavItem>

        <div className="my-4 border-t border-gray-200"></div>

        {/* Settings & Support */}
        <NavItem 
          icon={<Settings size={20} />} 
          title="Settings" 
          path="/settings" 
          isActive={location.pathname === '/settings'}
          description="System settings and preferences"
        />

        <NavItem 
          icon={<HelpCircle size={20} />} 
          title="Help & Support" 
          path="/support" 
          isActive={location.pathname === '/support'}
          description="Get help and documentation"
        />

        <div className="pt-4 mt-4 border-t border-gray-200">
          <NavItem 
            icon={<LogOut size={20} />} 
            title="Logout" 
            path="/logout" 
            isActive={false}
            description="Sign out of your account"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
