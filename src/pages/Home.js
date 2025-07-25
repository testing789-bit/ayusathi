import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Users, 
  Stethoscope, 
  MessageCircle, 
  Shield, 
  Clock, 
  Award, 
  ArrowRight,
  Search,
  BookOpen,
  Phone
} from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: MessageCircle,
      title: 'समुदायिक सहायता',
      description: 'लाखों लोगों से जुड़कर अपनी स्वास्थ्य समस्याओं का समाधान पाएं।',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Stethoscope,
      title: 'विशेषज्ञ डॉक्टर्स',
      description: 'भारत के सर्वश्रेष्ठ डॉक्टर्स से मुफ्त में सलाह लें।',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: BookOpen,
      title: 'स्वास्थ्य शिक्षा',
      description: 'नवीनतम स्वास्थ्य जानकारी और टिप्स प्राप्त करें।',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Shield,
      title: 'सुरक्षित और निजी',
      description: 'आपकी व्यक्तिगत जानकारी पूर्णतः सुरक्षित रहती है।',
      color: 'bg-red-100 text-red-600'
    }
  ];

  const stats = [
    { number: '50,000+', label: 'सक्रिय सदस्य' },
    { number: '1,000+', label: 'विशेषज्ञ डॉक्टर्स' },
    { number: '1 लाख+', label: 'समाधान किए गए प्रश्न' },
    { number: '24/7', label: 'सहायता उपलब्ध' }
  ];

  const healthCategories = [
    'सामान्य चिकित्सा',
    'हृदय रोग',
    'मधुमेह',
    'मानसिक स्वास्थ्य',
    'महिला स्वास्थ्य',
    'बाल चिकित्सा',
    'त्वचा रोग',
    'आंखों की देखभाल'
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
                  आपका <span className="text-primary-600">स्वास्थ्य साथी</span>
                  <br />
                  हमेशा आपके साथ
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed">
                  भारत का सबसे बड़ा स्वास्थ्य समुदाय। यहाँ मिलेगी आपकी सभी स्वास्थ्य संबंधी समस्याओं का समाधान। 
                  विशेषज्ञ डॉक्टर्स से मुफ्त सलाह लें और स्वस्थ जीवन जिएं।
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/register"
                  className="btn-primary flex items-center justify-center space-x-2 text-xl py-4 px-8"
                >
                  <span>अभी शुरू करें</span>
                  <ArrowRight className="h-6 w-6" />
                </Link>
                <Link
                  to="/community"
                  className="btn-secondary flex items-center justify-center space-x-2 text-xl py-4 px-8"
                >
                  <MessageCircle className="h-6 w-6" />
                  <span>समुदाय देखें</span>
                </Link>
              </div>

              {/* Quick Search */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">त्वरित खोज</h3>
                <div className="flex space-x-2">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      placeholder="अपनी स्वास्थ्य समस्या खोजें..."
                      className="w-full pl-10 pr-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <button className="btn-primary px-6">
                    खोजें
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
                  स्वास्थ्य सेवा 24/7
                </h3>
                <p className="text-lg text-gray-600 text-center mb-6">
                  किसी भी समय, कहीं भी अपनी स्वास्थ्य समस्याओं का समाधान पाएं।
                </p>
                <div className="flex justify-center">
                  <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-lg font-semibold">
                    ✓ उपलब्ध
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
              क्यों चुनें <span className="text-primary-600">SehatSaathi</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              हमारी सेवाएं आपको बेहतर स्वास्थ्य और खुशहाल जीवन प्रदान करने के लिए डिज़ाइन की गई हैं।
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
              स्वास्थ्य श्रेणियां
            </h2>
            <p className="text-xl text-gray-600">
              विभिन्न स्वास्थ्य विषयों पर विशेषज्ञ सलाह प्राप्त करें
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
            आज ही शुरू करें अपना स्वास्थ्य सफर
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            लाखों लोगों के साथ जुड़ें और बेहतर स्वास्थ्य की दिशा में पहला कदम उठाएं।
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-4 px-8 rounded-lg transition-colors duration-200 text-xl"
            >
              मुफ्त में जुड़ें
            </Link>
            <Link
              to="/doctors"
              className="bg-primary-700 hover:bg-primary-800 text-white font-medium py-4 px-8 rounded-lg transition-colors duration-200 text-xl"
            >
              डॉक्टर्स से मिलें
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;