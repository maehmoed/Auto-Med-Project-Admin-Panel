import React, { useState } from 'react';
import { Bell, Search, Menu, User, ChevronDown } from 'lucide-react';

type HeaderProps = {
  toggleMobileSidebar: () => void;
  pageTitle: string;
};

const Header: React.FC<HeaderProps> = ({ toggleMobileSidebar, pageTitle }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
    if (isNotificationsOpen) setIsNotificationsOpen(false);
  };

  const toggleNotifications = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
    if (isProfileOpen) setIsProfileOpen(false);
  };

  // Mock notifications
  const notifications = [
    { id: 1, message: "New student registered", time: "5 minutes ago", isRead: false },
    { id: 2, message: "Quiz 'Cardiology Basics' completed by 15 students", time: "1 hour ago", isRead: false },
    { id: 3, message: "Payment received from Student ID #1042", time: "3 hours ago", isRead: true },
    { id: 4, message: "System update scheduled for tonight at 2 AM", time: "5 hours ago", isRead: true },
  ];

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between h-16 px-4 lg:px-6">
        <div className="flex items-center">
          <button
            className="p-2 mr-2 text-gray-600 rounded-md lg:hidden hover:text-gray-900 hover:bg-gray-100"
            onClick={toggleMobileSidebar}
          >
            <Menu size={24} />
          </button>
          <h1 className="text-xl font-semibold text-gray-800">{pageTitle}</h1>
        </div>

        <div className="hidden md:flex items-center flex-1 max-w-md mx-4 lg:mx-8">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="search"
              className="block w-full py-2 pl-10 pr-3 text-sm bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white"
              placeholder="Search..."
            />
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="relative">
            <button
              className="relative p-2 text-gray-600 rounded-full hover:text-gray-900 hover:bg-gray-100"
              onClick={toggleNotifications}
            >
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {isNotificationsOpen && (
              <div className="absolute right-0 w-80 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="py-2">
                  <div className="px-4 py-2 text-sm font-medium text-gray-700 border-b border-gray-200">
                    Notifications
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.map(notification => (
                      <div
                        key={notification.id}
                        className={`px-4 py-3 hover:bg-gray-50 ${!notification.isRead ? 'bg-blue-50' : ''}`}
                      >
                        <p className="text-sm font-medium text-gray-900">{notification.message}</p>
                        <p className="mt-1 text-xs text-gray-500">{notification.time}</p>
                      </div>
                    ))}
                  </div>
                  <div className="px-4 py-2 text-xs text-center text-blue-600 border-t border-gray-200 hover:text-blue-800">
                    View all notifications
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              className="flex items-center text-sm text-gray-700 rounded-full hover:text-gray-900 focus:outline-none"
              onClick={toggleProfile}
            >
              <span className="sr-only">Open user menu</span>
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                <User size={16} />
              </div>
              <span className="hidden ml-2 mr-1 md:block">Admin User</span>
              <ChevronDown size={16} className="hidden md:block" />
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  <a
                    href="#profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Your Profile
                  </a>
                  <a
                    href="#settings"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </a>
                  <a
                    href="#logout"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
