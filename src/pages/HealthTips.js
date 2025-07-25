import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Calendar, 
  Clock, 
  User, 
  BookOpen, 
  Heart,
  Activity,
  Apple,
  Brain,
  Shield,
  Eye,
  ArrowRight
} from 'lucide-react';

const HealthTips = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    { name: 'All', icon: BookOpen, color: 'text-blue-600' },
    { name: 'Heart Health', icon: Heart, color: 'text-red-600' },
    { name: 'Nutrition', icon: Apple, color: 'text-green-600' },
    { name: 'Mental Health', icon: Brain, color: 'text-purple-600' },
    { name: 'Fitness', icon: Activity, color: 'text-orange-600' },
    { name: 'Prevention', icon: Shield, color: 'text-teal-600' },
    { name: 'Eye Care', icon: Eye, color: 'text-indigo-600' }
  ];

  const articles = [
    {
      id: 1,
      title: '10 Simple Ways to Improve Your Heart Health',
      excerpt: 'Discover practical tips to keep your heart healthy and reduce the risk of cardiovascular disease.',
      content: 'Your heart is one of the most important organs in your body. Here are evidence-based ways to keep it healthy...',
      author: 'Dr. Sarah Wilson',
      authorSpecialty: 'Cardiologist',
      category: 'Heart Health',
      readTime: '5 min read',
      publishedDate: '2024-01-15',
      image: '/api/placeholder/400/250',
      tags: ['heart', 'prevention', 'lifestyle'],
      views: 1234
    },
    {
      id: 2,
      title: 'The Ultimate Guide to Balanced Nutrition',
      excerpt: 'Learn about essential nutrients and how to create a balanced diet for optimal health.',
      content: 'Proper nutrition is the foundation of good health. This comprehensive guide covers everything you need to know...',
      author: 'Dr. Priya Nutritionist',
      authorSpecialty: 'Clinical Nutritionist',
      category: 'Nutrition',
      readTime: '8 min read',
      publishedDate: '2024-01-12',
      image: '/api/placeholder/400/250',
      tags: ['nutrition', 'diet', 'wellness'],
      views: 987
    },
    {
      id: 3,
      title: 'Managing Stress and Anxiety in Daily Life',
      excerpt: 'Effective strategies to cope with stress and maintain good mental health.',
      content: 'Mental health is just as important as physical health. Here are proven techniques to manage stress...',
      author: 'Dr. Michael Therapist',
      authorSpecialty: 'Clinical Psychologist',
      category: 'Mental Health',
      readTime: '6 min read',
      publishedDate: '2024-01-10',
      image: '/api/placeholder/400/250',
      tags: ['mental-health', 'stress', 'anxiety'],
      views: 756
    },
    {
      id: 4,
      title: 'Home Workout Routines for Beginners',
      excerpt: 'Start your fitness journey with these simple exercises you can do at home.',
      content: 'You don\'t need a gym membership to stay fit. These beginner-friendly exercises can be done anywhere...',
      author: 'Dr. Fitness Expert',
      authorSpecialty: 'Sports Medicine',
      category: 'Fitness',
      readTime: '7 min read',
      publishedDate: '2024-01-08',
      image: '/api/placeholder/400/250',
      tags: ['fitness', 'exercise', 'beginners'],
      views: 1456
    },
    {
      id: 5,
      title: 'Diabetes Prevention: What You Need to Know',
      excerpt: 'Understanding risk factors and preventive measures for type 2 diabetes.',
      content: 'Type 2 diabetes is largely preventable. Learn about the lifestyle changes that can make a difference...',
      author: 'Dr. Diabetes Specialist',
      authorSpecialty: 'Endocrinologist',
      category: 'Prevention',
      readTime: '9 min read',
      publishedDate: '2024-01-05',
      image: '/api/placeholder/400/250',
      tags: ['diabetes', 'prevention', 'health'],
      views: 2134
    },
    {
      id: 6,
      title: 'Protecting Your Eyes in the Digital Age',
      excerpt: 'Tips to reduce eye strain and maintain good vision while using digital devices.',
      content: 'With increased screen time, eye health has become more important than ever. Here\'s how to protect your vision...',
      author: 'Dr. Eye Specialist',
      authorSpecialty: 'Ophthalmologist',
      category: 'Eye Care',
      readTime: '4 min read',
      publishedDate: '2024-01-03',
      image: '/api/placeholder/400/250',
      tags: ['eye-care', 'digital-health', 'vision'],
      views: 892
    }
  ];

  const filteredArticles = selectedCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  const featuredArticle = articles[0];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Health Tips & Articles</h1>
          <p className="text-lg text-gray-600">Stay informed with the latest health information and expert advice</p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search health articles..."
              className="input-field pl-10"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Categories</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                    selectedCategory === category.name
                      ? 'bg-primary-100 text-primary-700 border border-primary-200'
                      : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <Icon className={`h-5 w-5 ${selectedCategory === category.name ? 'text-primary-600' : category.color}`} />
                  <span className="font-medium">{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Article */}
        {selectedCategory === 'All' && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Featured Article</h2>
            <div className="card overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gray-200 h-64 lg:h-auto flex items-center justify-center">
                  <BookOpen className="h-16 w-16 text-gray-400" />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                      {featuredArticle.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{featuredArticle.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{featuredArticle.readTime}</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">
                      {featuredArticle.views} views
                    </div>
                  </div>
                  <Link
                    to={`/article/${featuredArticle.id}`}
                    className="btn-primary flex items-center space-x-2 w-fit"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
            </h2>
            <span className="text-gray-600">
              {filteredArticles.length} articles
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.slice(selectedCategory === 'All' ? 1 : 0).map((article) => (
              <div key={article.id} className="card hover:shadow-lg transition-shadow duration-300">
                <div className="bg-gray-200 h-48 mb-4 flex items-center justify-center rounded-lg">
                  <BookOpen className="h-12 w-12 text-gray-400" />
                </div>
                
                <div className="mb-3">
                  <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-sm font-medium">
                    {article.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
                  {article.title}
                </h3>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {article.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/article/${article.id}`}
                    className="text-primary-600 hover:text-primary-700 font-medium flex items-center space-x-1"
                  >
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="text-center">
          <button className="btn-secondary">
            Load More Articles
          </button>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 card bg-primary-50 border-primary-200">
          <div className="text-center">
            <div className="bg-primary-100 text-primary-600 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <BookOpen className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-primary-900 mb-2">Stay Updated</h3>
            <p className="text-lg text-primary-800 mb-6">
              Subscribe to our newsletter for the latest health tips and articles
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthTips;