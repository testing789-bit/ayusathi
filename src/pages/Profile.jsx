import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  User, 
  Edit, 
  Settings, 
  Heart, 
  Activity, 
  Calendar,
  MessageCircle,
  BookOpen,
  Award,
  Shield,
  Camera,
  Save
} from 'lucide-react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);

  const userInfo = {
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    phone: '+91 98765 43210',
    dateOfBirth: '1985-06-15',
    gender: 'Female',
    location: 'New Delhi, India',
    memberSince: 'January 2024',
    userType: 'Patient',
    avatar: '/api/placeholder/120/120'
  };

  const healthStats = {
    questionsAsked: 12,
    answersReceived: 45,
    articlesRead: 156,
    consultations: 8,
    reputation: 250
  };

  const recentActivity = [
    {
      type: 'question',
      title: 'Asked about diabetes symptoms',
      date: '2 days ago',
      responses: 5
    },
    {
      type: 'answer',
      title: 'Received answer for heart health query',
      date: '1 week ago',
      helpful: true
    },
    {
      type: 'article',
      title: 'Read "Managing Stress and Anxiety"',
      date: '1 week ago',
      category: 'Mental Health'
    },
    {
      type: 'consultation',
      title: 'Video consultation with Dr. Sarah Wilson',
      date: '2 weeks ago',
      rating: 5
    }
  ];

  const upcomingAppointments = [
    {
      doctor: 'Dr. Michael Chen',
      specialty: 'Cardiologist',
      date: '2024-01-25',
      time: '10:00 AM',
      type: 'Video Consultation'
    },
    {
      doctor: 'Dr. Priya Sharma',
      specialty: 'Dermatologist',
      date: '2024-02-02',
      time: '3:00 PM',
      type: 'In-person'
    }
  ];

  const tabs = [
    { id: 'overview', name: 'Overview', icon: User },
    { id: 'activity', name: 'Activity', icon: Activity },
    { id: 'appointments', name: 'Appointments', icon: Calendar },
    { id: 'settings', name: 'Settings', icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="card mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            {/* Avatar */}
            <div className="relative">
              <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
                <User className="h-16 w-16 text-gray-400" />
              </div>
              <button className="absolute bottom-0 right-0 bg-primary-600 text-white p-2 rounded-full hover:bg-primary-700 transition-colors duration-200">
                <Camera className="h-4 w-4" />
              </button>
            </div>

            {/* User Info */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">{userInfo.name}</h1>
                  <p className="text-lg text-gray-600">{userInfo.userType}</p>
                  <p className="text-gray-500">Member since {userInfo.memberSince}</p>
                </div>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="btn-secondary flex items-center space-x-2"
                >
                  <Edit className="h-4 w-4" />
                  <span>{isEditing ? 'Cancel' : 'Edit Profile'}</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center text-gray-600">
                  <Shield className="h-4 w-4 mr-2" />
                  <span>Verified Account</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Award className="h-4 w-4 mr-2" />
                  <span>{healthStats.reputation} Reputation Points</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  <span>{healthStats.questionsAsked} Questions Asked</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-2 px-1 border-b-2 font-medium text-lg flex items-center space-x-2 transition-colors duration-200 ${
                      activeTab === tab.id
                        ? 'border-primary-500 text-primary-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{tab.name}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Health Stats */}
                <div className="card">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">Health Dashboard</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <MessageCircle className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-blue-600">{healthStats.questionsAsked}</div>
                      <div className="text-sm text-gray-600">Questions</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <Heart className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-green-600">{healthStats.answersReceived}</div>
                      <div className="text-sm text-gray-600">Answers</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <BookOpen className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-purple-600">{healthStats.articlesRead}</div>
                      <div className="text-sm text-gray-600">Articles</div>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <Calendar className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-orange-600">{healthStats.consultations}</div>
                      <div className="text-sm text-gray-600">Consultations</div>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="card">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">Recent Activity</h2>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className="bg-primary-100 text-primary-600 p-2 rounded-full">
                          {activity.type === 'question' && <MessageCircle className="h-4 w-4" />}
                          {activity.type === 'answer' && <Heart className="h-4 w-4" />}
                          {activity.type === 'article' && <BookOpen className="h-4 w-4" />}
                          {activity.type === 'consultation' && <Calendar className="h-4 w-4" />}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900">{activity.title}</h3>
                          <p className="text-sm text-gray-500">{activity.date}</p>
                          {activity.responses && (
                            <p className="text-sm text-primary-600">{activity.responses} responses</p>
                          )}
                          {activity.helpful && (
                            <p className="text-sm text-green-600">Marked as helpful</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'activity' && (
              <div className="card">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Activity History</h2>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="border-l-4 border-primary-200 pl-4 py-2">
                      <h3 className="font-medium text-gray-900">{activity.title}</h3>
                      <p className="text-sm text-gray-500">{activity.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'appointments' && (
              <div className="card">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Upcoming Appointments</h2>
                <div className="space-y-4">
                  {upcomingAppointments.map((appointment, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">{appointment.doctor}</h3>
                        <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-sm">
                          {appointment.type}
                        </span>
                      </div>
                      <p className="text-gray-600">{appointment.specialty}</p>
                      <p className="text-sm text-gray-500">
                        {appointment.date} at {appointment.time}
                      </p>
                      <div className="mt-3 flex space-x-2">
                        <button className="btn-primary text-sm py-2 px-4">
                          Join Consultation
                        </button>
                        <button className="btn-secondary text-sm py-2 px-4">
                          Reschedule
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="space-y-6">
                <div className="card">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">Account Settings</h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <div>
                        <h3 className="font-medium text-gray-900">Email Notifications</h3>
                        <p className="text-sm text-gray-500">Receive updates about your health activities</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                      </label>
                    </div>
                    
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <div>
                        <h3 className="font-medium text-gray-900">SMS Notifications</h3>
                        <p className="text-sm text-gray-500">Get appointment reminders via SMS</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between py-3">
                      <div>
                        <h3 className="font-medium text-gray-900">Privacy Settings</h3>
                        <p className="text-sm text-gray-500">Control who can see your profile</p>
                      </div>
                      <select className="border border-gray-300 rounded-lg px-3 py-2">
                        <option>Public</option>
                        <option>Community Only</option>
                        <option>Private</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Personal Information */}
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-gray-500">Email:</span>
                  <p className="font-medium">{userInfo.email}</p>
                </div>
                <div>
                  <span className="text-gray-500">Phone:</span>
                  <p className="font-medium">{userInfo.phone}</p>
                </div>
                <div>
                  <span className="text-gray-500">Date of Birth:</span>
                  <p className="font-medium">{new Date(userInfo.dateOfBirth).toLocaleDateString()}</p>
                </div>
                <div>
                  <span className="text-gray-500">Gender:</span>
                  <p className="font-medium">{userInfo.gender}</p>
                </div>
                <div>
                  <span className="text-gray-500">Location:</span>
                  <p className="font-medium">{userInfo.location}</p>
                </div>
              </div>
              {isEditing && (
                <button className="mt-4 btn-primary flex items-center space-x-2 w-full justify-center">
                  <Save className="h-4 w-4" />
                  <span>Save Changes</span>
                </button>
              )}
            </div>

            {/* Quick Actions */}
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Link
                  to="/community"
                  className="block w-full text-left px-4 py-2 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors duration-200"
                >
                  Ask a Question
                </Link>
                <Link
                  to="/doctors"
                  className="block w-full text-left px-4 py-2 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors duration-200"
                >
                  Book Consultation
                </Link>
                <Link
                  to="/health-tips"
                  className="block w-full text-left px-4 py-2 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors duration-200"
                >
                  Read Health Tips
                </Link>
              </div>
            </div>

            {/* Help & Support */}
            <div className="card bg-blue-50 border-blue-200">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Need Help?</h3>
              <p className="text-blue-800 mb-4">
                Our support team is here to help you with any questions or concerns.
              </p>
              <Link
                to="/help"
                className="btn-primary bg-blue-600 hover:bg-blue-700 w-full justify-center"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;