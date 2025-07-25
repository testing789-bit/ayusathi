import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Plus, 
  MessageCircle, 
  ThumbsUp, 
  ThumbsDown, 
  Eye, 
  Clock,
  Tag,
  User,
  Award
} from 'lucide-react';

const Community = () => {
  const [activeTab, setActiveTab] = useState('recent');
  
  const categories = [
    'All Categories',
    'General Medicine',
    'Cardiology',
    'Diabetes',
    'Mental Health',
    'Women\'s Health',
    'Pediatrics',
    'Dermatology'
  ];

  const questions = [
    {
      id: 1,
      title: 'What are the early symptoms of diabetes?',
      content: 'I\'ve been experiencing frequent urination and excessive thirst. Should I be concerned about diabetes?',
      author: 'Sarah Johnson',
      authorLevel: 'Community Member',
      category: 'Diabetes',
      votes: 15,
      answers: 8,
      views: 234,
      timeAgo: '2 hours ago',
      tags: ['diabetes', 'symptoms', 'health-check']
    },
    {
      id: 2,
      title: 'Best exercises for heart health?',
      content: 'I\'m looking for safe and effective exercises to improve my cardiovascular health. Any recommendations?',
      author: 'Dr. Michael Chen',
      authorLevel: 'Verified Doctor',
      category: 'Cardiology',
      votes: 32,
      answers: 12,
      views: 567,
      timeAgo: '4 hours ago',
      tags: ['cardiology', 'exercise', 'prevention']
    },
    {
      id: 3,
      title: 'Managing anxiety during pregnancy',
      content: 'I\'m 6 months pregnant and experiencing increased anxiety. What are safe ways to manage this?',
      author: 'Emily Rodriguez',
      authorLevel: 'Community Member',
      category: 'Women\'s Health',
      votes: 28,
      answers: 15,
      views: 445,
      timeAgo: '6 hours ago',
      tags: ['pregnancy', 'anxiety', 'mental-health']
    },
    {
      id: 4,
      title: 'Healthy diet for children with allergies',
      content: 'My 5-year-old has multiple food allergies. How can I ensure they get proper nutrition?',
      author: 'Jennifer Smith',
      authorLevel: 'Parent',
      category: 'Pediatrics',
      votes: 19,
      answers: 7,
      views: 189,
      timeAgo: '8 hours ago',
      tags: ['pediatrics', 'allergies', 'nutrition']
    }
  ];

  const topContributors = [
    { name: 'Dr. Sarah Wilson', specialty: 'Cardiologist', points: 2450, answers: 156 },
    { name: 'Dr. James Kumar', specialty: 'General Medicine', points: 2180, answers: 134 },
    { name: 'Dr. Lisa Chen', specialty: 'Pediatrician', points: 1890, answers: 98 },
    { name: 'Dr. Robert Brown', specialty: 'Dermatologist', points: 1650, answers: 87 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Health Community</h1>
              <p className="text-lg text-gray-600">Ask questions, share knowledge, and help others on their health journey</p>
            </div>
            <Link
              to="/ask-question"
              className="btn-primary flex items-center space-x-2 mt-4 md:mt-0"
            >
              <Plus className="h-5 w-5" />
              <span>Ask Question</span>
            </Link>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search health questions..."
                className="input-field pl-10"
              />
            </div>
            <select className="input-field lg:w-64">
              {categories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </select>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {['recent', 'popular', 'unanswered'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-2 px-1 border-b-2 font-medium text-lg capitalize transition-colors duration-200 ${
                    activeTab === tab
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {questions.map((question) => (
              <div key={question.id} className="card hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start space-x-4">
                  {/* Vote/Stats Column */}
                  <div className="flex flex-col items-center space-y-2 text-center min-w-0">
                    <div className="text-lg font-semibold text-gray-900">{question.votes}</div>
                    <div className="text-sm text-gray-500">votes</div>
                    
                    <div className="text-lg font-semibold text-primary-600">{question.answers}</div>
                    <div className="text-sm text-gray-500">answers</div>
                    
                    <div className="flex items-center text-sm text-gray-500">
                      <Eye className="h-4 w-4 mr-1" />
                      {question.views}
                    </div>
                  </div>

                  {/* Question Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <Link 
                        to={`/question/${question.id}`}
                        className="text-xl font-semibold text-gray-900 hover:text-primary-600 transition-colors duration-200"
                      >
                        {question.title}
                      </Link>
                      <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-sm font-medium ml-2">
                        {question.category}
                      </span>
                    </div>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed">{question.content}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {question.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                        >
                          <Tag className="h-3 w-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Author and Time */}
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span className="font-medium text-gray-700">{question.author}</span>
                        <span>•</span>
                        <span className={question.authorLevel === 'Verified Doctor' ? 'text-green-600 font-medium' : ''}>
                          {question.authorLevel}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{question.timeAgo}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Load More */}
            <div className="text-center">
              <button className="btn-secondary">
                Load More Questions
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Top Contributors */}
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Award className="h-5 w-5 mr-2 text-yellow-500" />
                Top Contributors
              </h3>
              <div className="space-y-4">
                {topContributors.map((contributor, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="bg-primary-100 text-primary-600 w-8 h-8 rounded-full flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{contributor.name}</div>
                      <div className="text-sm text-gray-500">{contributor.specialty}</div>
                      <div className="text-sm text-primary-600">{contributor.points} points • {contributor.answers} answers</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Health Categories */}
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Popular Categories</h3>
              <div className="space-y-2">
                {categories.slice(1).map((category, index) => (
                  <Link
                    key={index}
                    to={`/community?category=${category}`}
                    className="block text-primary-600 hover:text-primary-800 hover:bg-primary-50 px-3 py-2 rounded transition-colors duration-200"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>

            {/* Community Guidelines */}
            <div className="card bg-blue-50 border-blue-200">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Community Guidelines</h3>
              <ul className="space-y-2 text-blue-800">
                <li>• Be respectful and kind to all members</li>
                <li>• Provide accurate health information</li>
                <li>• Don't give medical advice without qualifications</li>
                <li>• Search before asking duplicate questions</li>
                <li>• Use clear, descriptive titles</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;