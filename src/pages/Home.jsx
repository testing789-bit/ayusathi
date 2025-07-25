import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Stethoscope, 
  MessageCircle, 
  Shield, 
  ArrowRight,
  Search,
  BookOpen
} from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: MessageCircle,
      title: 'Community Support',
      description: 'Connect with millions of people to find solutions to your health problems.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Stethoscope,
      title: 'Expert Doctors',
      description: 'Get free advice from India\'s best doctors and medical professionals.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: BookOpen,
      title: 'Health Education',
      description: 'Access the latest health information, tips, and educational content.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Shield,
      title: 'Safe & Private',
      description: 'Your personal information is completely secure and confidential.',
      color: 'bg-red-100 text-red-600'
    }
  ];

  const stats = [
    { number: '50,000+', label: 'Active Members' },
    { number: '1,000+', label: 'Expert Doctors' },
    { number: '100K+', label: 'Questions Answered' },
    { number: '24/7', label: 'Support Available' }
  ];

  const healthCategories = [
    'General Medicine',
    'Cardiology',
    'Diabetes',
    'Mental Health',
    'Women\'s Health',
    'Pediatrics',
    'Dermatology',
    'Eye Care'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Your <span className="text-primary-600">Health Companion</span>
                  <br />
                  Always With You
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed">
                  India's largest healthcare community. Get solutions to all your health-related problems here. 
                  Consult with expert doctors for free and live a healthy life.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/register"
                  className="btn-primary flex items-center justify-center space-x-2 text-xl py-4 px-8"
                >
                  <span>Get Started Now</span>
                  <ArrowRight className="h-6 w-6" />
                </Link>
                <Link
                  to="/community"
                  className="btn-secondary flex items-center justify-center space-x-2 text-xl py-4 px-8"
                >
                  <MessageCircle className="h-6 w-6" />
                  <span>View Community</span>
                </Link>
              </div>

              {/* Quick Search */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Search</h3>
                <div className="flex space-x-2">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      placeholder="Search for your health concerns..."
                      className="w-full pl-10 pr-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <button className="btn-primary px-6">
                    Search
                  </button>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3">
                <div className="bg-primary-600 rounded-full p-4 w-20 h-20 mx-auto mb-6">
                  <Heart className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
                  Healthcare 24/7
                </h3>
                <p className="text-lg text-gray-600 text-center mb-6">
                  Get solutions to your health problems anytime, anywhere.
                </p>
                <div className="flex justify-center">
                  <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-lg font-semibold">
                    ✓ Available
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-primary-600">HealthCare Community</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our services are designed to provide you with better health and a happier life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="card hover:shadow-lg transition-shadow duration-300">
                  <div className={`${feature.color} p-3 rounded-lg w-fit mb-4`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Health Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Health Categories
            </h2>
            <p className="text-xl text-gray-600">
              Get expert advice on various health topics
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {healthCategories.map((category, index) => (
              <Link
                key={index}
                to="/community"
                className="bg-primary-50 hover:bg-primary-100 text-primary-700 p-6 rounded-xl text-center transition-colors duration-200 border border-primary-200"
              >
                <div className="text-lg font-semibold">
                  {category}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Start Your Health Journey Today
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join millions of people and take the first step towards better health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-4 px-8 rounded-lg transition-colors duration-200 text-xl"
            >
              Join for Free
            </Link>
            <Link
              to="/doctors"
              className="bg-primary-700 hover:bg-primary-800 text-white font-medium py-4 px-8 rounded-lg transition-colors duration-200 text-xl"
            >
              Meet Doctors
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;