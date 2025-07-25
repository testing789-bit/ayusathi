import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Menu, X, MessageCircle, Stethoscope, BookOpen, Bell, Sun, Moon, UserCircle, ChevronDown, Plus, Search } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: Heart },
    { name: 'Ayu Sathi', href: '/ayusathi', icon: MessageCircle },
    { name: 'Doctors', href: '/doctors', icon: Stethoscope },
    { name: 'Health Tips', href: '/health-tips', icon: BookOpen },
  ];

  const isActive = (path) => location.pathname === path;

  // Mocked user state
  const user = {
    name: 'John Doe',
    avatar: '', // Add avatar URL if available
  };
  const notifications = 3; // Mocked notification count

  return (
    <nav className={`sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md border-b-2 border-primary-100 transition-colors duration-300`} aria-label="Main Navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-primary-600 p-2 rounded-full">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary-600 dark:text-white">Ayu Sathi</h1>
                <p className="text-sm text-gray-600 dark:text-gray-300">Your Health Companion</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400 ${
                    isActive(item.href)
                      ? 'bg-primary-100 text-primary-700 font-semibold dark:bg-primary-900 dark:text-primary-200'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50 dark:text-gray-200 dark:hover:text-primary-400 dark:hover:bg-gray-800'
                  }`}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  <Icon className="h-5 w-5" />
                  <span className="text-lg">{item.name}</span>
                </Link>
              );
            })}
            {/* Quick Access: Ask Question */}
            <Link to="/ask-question" className="btn-primary flex items-center space-x-2 ml-2">
              <Plus className="h-5 w-5" />
              <span>Ask Question</span>
            </Link>
            {/* Search Bar */}
            <div className="relative ml-4">
              <input
                type="text"
                placeholder="Search..."
                className="input-field pl-10 pr-4 py-2 w-48 md:w-56 lg:w-64 dark:bg-gray-800 dark:text-white"
                aria-label="Search"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
            {/* Notifications */}
            <button className="relative ml-4 p-2 rounded-full hover:bg-primary-50 dark:hover:bg-gray-800 transition-colors" aria-label="Notifications">
              <Bell className="h-6 w-6 text-primary-600 dark:text-primary-300" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">{notifications}</span>
              )}
            </button>
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-2 p-2 rounded-full hover:bg-primary-50 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun className="h-6 w-6 text-yellow-400" /> : <Moon className="h-6 w-6 text-gray-600 dark:text-gray-200" />}
            </button>
            {/* User Profile Dropdown */}
            <div className="relative ml-4">
              <button
                onClick={() => setProfileOpen((v) => !v)}
                className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-primary-400"
                aria-haspopup="true"
                aria-expanded={profileOpen}
                aria-label="User menu"
              >
                {user.avatar ? (
                  <img src={user.avatar} alt="User avatar" className="h-8 w-8 rounded-full" />
                ) : (
                  <UserCircle className="h-8 w-8 text-primary-600 dark:text-primary-300" />
                )}
                <span className="hidden lg:inline text-gray-700 dark:text-gray-200 font-medium">{user.name}</span>
                <ChevronDown className="h-4 w-4 text-gray-500 dark:text-gray-300" />
              </button>
              {profileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-2 z-50">
                  <Link to="/profile" className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-gray-700">Profile</Link>
                  <Link to="/settings" className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-gray-700">Settings</Link>
                  <button className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-gray-700">Logout</button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-primary-600 hover:bg-primary-50 dark:text-gray-200 dark:hover:text-primary-400 dark:hover:bg-gray-800"
              aria-label="Open menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400 ${
                      isActive(item.href)
                        ? 'bg-primary-100 text-primary-700 font-semibold dark:bg-primary-900 dark:text-primary-200'
                        : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50 dark:text-gray-200 dark:hover:text-primary-400 dark:hover:bg-gray-800'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="h-6 w-6" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              {/* Quick Access: Ask Question */}
              <Link to="/ask-question" className="block w-full text-center btn-primary mt-2 flex items-center justify-center space-x-2">
                <Plus className="h-5 w-5" />
                <span>Ask Question</span>
              </Link>
              {/* Search Bar */}
              <div className="relative mt-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className="input-field pl-10 pr-4 py-2 w-full dark:bg-gray-800 dark:text-white"
                  aria-label="Search"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
              {/* Notifications & Dark Mode */}
              <div className="flex items-center justify-between mt-4 px-4">
                <button className="relative p-2 rounded-full hover:bg-primary-50 dark:hover:bg-gray-800 transition-colors" aria-label="Notifications">
                  <Bell className="h-6 w-6 text-primary-600 dark:text-primary-300" />
                  {notifications > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">{notifications}</span>
                  )}
                </button>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-full hover:bg-primary-50 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Toggle Dark Mode"
                >
                  {darkMode ? <Sun className="h-6 w-6 text-yellow-400" /> : <Moon className="h-6 w-6 text-gray-600 dark:text-gray-200" />}
                </button>
                {/* User Profile Dropdown (mobile, simplified) */}
                <button className="p-2 rounded-full hover:bg-primary-50 dark:hover:bg-gray-800 transition-colors" aria-label="User menu">
                  {user.avatar ? (
                    <img src={user.avatar} alt="User avatar" className="h-8 w-8 rounded-full" />
                  ) : (
                    <UserCircle className="h-8 w-8 text-primary-600 dark:text-primary-300" />
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;