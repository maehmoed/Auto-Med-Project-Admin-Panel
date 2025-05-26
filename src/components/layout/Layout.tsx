import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import DashboardView from '../dashboard/DashboardView';

const Layout: React.FC = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  // Generate page title based on current route
  const getPageTitle = () => {
    const path = location.pathname;
    
    if (path === '/') return 'Dashboard';
    if (path.includes('/students')) {
      if (path === '/students') return 'Student Management';
      if (path.includes('/performance')) return 'Student Performance';
      if (path.includes('/feedback')) return 'Student Feedback';
      return 'Students';
    }
    if (path.includes('/quizzes')) {
      if (path === '/quizzes') return 'Quiz Management';
      if (path.includes('/questions')) return 'Question Bank';
      if (path.includes('/create')) return 'Create Quiz';
      return 'Quizzes';
    }
    if (path.includes('/payments')) {
      if (path === '/payments') return 'Payment Overview';
      if (path.includes('/subscriptions')) return 'Subscription Plans';
      if (path.includes('/transactions')) return 'Transaction History';
      return 'Payments';
    }
    if (path === '/settings') return 'Settings';
    
    return 'MedQuiz Pro';
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Backdrop for mobile sidebar */}
      {isMobileSidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-gray-600 bg-opacity-50 lg:hidden" 
          onClick={toggleMobileSidebar}
        ></div>
      )}
      
      {/* Sidebar */}
      <Sidebar 
        isMobileOpen={isMobileSidebarOpen} 
        toggleMobileSidebar={toggleMobileSidebar} 
      />
      
      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden lg:pl-64">
        <Header 
          toggleMobileSidebar={toggleMobileSidebar} 
          pageTitle={getPageTitle()} 
        />
        
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          {location.pathname === '/' ? <DashboardView /> : <Outlet />}
        </main>
      </div>
    </div>
  );
};

export default Layout;
