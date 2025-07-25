import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  MapPin, 
  Star, 
  Calendar, 
  Clock, 
  Video, 
  Phone,
  Award,
  BookOpen,
  Users,
  Filter
} from 'lucide-react';

const Doctors = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');

  const specialties = [
    'All',
    'General Medicine',
    'Cardiology',
    'Dermatology',
    'Pediatrics',
    'Gynecology',
    'Orthopedics',
    'Neurology',
    'Psychiatry'
  ];

  const locations = [
    'All',
    'Delhi',
    'Mumbai',
    'Bangalore',
    'Chennai',
    'Kolkata',
    'Hyderabad',
    'Pune'
  ];

  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Wilson',
      specialty: 'Cardiologist',
      qualification: 'MBBS, MD Cardiology',
      experience: '15 years',
      location: 'Delhi',
      hospital: 'Apollo Hospital',
      rating: 4.9,
      reviews: 234,
      consultationFee: 800,
      nextAvailable: 'Today 3:00 PM',
      languages: ['English', 'Hindi'],
      image: '/api/placeholder/120/120',
      verified: true,
      consultationTypes: ['Video', 'In-person'],
      about: 'Specialized in interventional cardiology with expertise in complex cardiac procedures.'
    },
    {
      id: 2,
      name: 'Dr. Rajesh Kumar',
      specialty: 'General Medicine',
      qualification: 'MBBS, MD Internal Medicine',
      experience: '12 years',
      location: 'Mumbai',
      hospital: 'Fortis Hospital',
      rating: 4.8,
      reviews: 189,
      consultationFee: 600,
      nextAvailable: 'Tomorrow 10:00 AM',
      languages: ['English', 'Hindi', 'Marathi'],
      image: '/api/placeholder/120/120',
      verified: true,
      consultationTypes: ['Video', 'In-person'],
      about: 'Experienced in treating diabetes, hypertension, and other chronic conditions.'
    },
    {
      id: 3,
      name: 'Dr. Priya Sharma',
      specialty: 'Dermatology',
      qualification: 'MBBS, MD Dermatology',
      experience: '10 years',
      location: 'Bangalore',
      hospital: 'Manipal Hospital',
      rating: 4.7,
      reviews: 156,
      consultationFee: 700,
      nextAvailable: 'Today 5:30 PM',
      languages: ['English', 'Hindi', 'Kannada'],
      image: '/api/placeholder/120/120',
      verified: true,
      consultationTypes: ['Video', 'In-person'],
      about: 'Expert in cosmetic dermatology and treatment of skin disorders.'
    },
    {
      id: 4,
      name: 'Dr. Michael Chen',
      specialty: 'Pediatrics',
      qualification: 'MBBS, MD Pediatrics',
      experience: '8 years',
      location: 'Chennai',
      hospital: 'Rainbow Children Hospital',
      rating: 4.9,
      reviews: 298,
      consultationFee: 650,
      nextAvailable: 'Tomorrow 2:00 PM',
      languages: ['English', 'Hindi', 'Tamil'],
      image: '/api/placeholder/120/120',
      verified: true,
      consultationTypes: ['Video', 'In-person'],
      about: 'Specialized in child development and pediatric emergency care.'
    }
  ];

  const filteredDoctors = doctors.filter(doctor => {
    const specialtyMatch = selectedSpecialty === 'All' || doctor.specialty === selectedSpecialty;
    const locationMatch = selectedLocation === 'All' || doctor.location === selectedLocation;
    return specialtyMatch && locationMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Expert Doctors</h1>
          <p className="text-lg text-gray-600">Connect with verified healthcare professionals for consultations</p>
        </div>

        {/* Search and Filters */}
        <div className="card mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search doctors..."
                className="input-field pl-10"
              />
            </div>
            
            <select 
              className="input-field"
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
            >
              {specialties.map((specialty, index) => (
                <option key={index} value={specialty}>{specialty}</option>
              ))}
            </select>
            
            <select 
              className="input-field"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              {locations.map((location, index) => (
                <option key={index} value={location}>{location}</option>
              ))}
            </select>
            
            <button className="btn-primary flex items-center justify-center space-x-2">
              <Filter className="h-5 w-5" />
              <span>Apply Filters</span>
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-lg text-gray-600">
            Showing {filteredDoctors.length} doctors
            {selectedSpecialty !== 'All' && ` in ${selectedSpecialty}`}
            {selectedLocation !== 'All' && ` in ${selectedLocation}`}
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {filteredDoctors.map((doctor) => (
            <div key={doctor.id} className="card hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                {/* Doctor Image */}
                <div className="relative">
                  <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center">
                    <Users className="h-12 w-12 text-gray-400" />
                  </div>
                  {doctor.verified && (
                    <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full p-1">
                      <Award className="h-4 w-4" />
                    </div>
                  )}
                </div>

                {/* Doctor Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{doctor.name}</h3>
                      <p className="text-primary-600 font-medium">{doctor.specialty}</p>
                      <p className="text-sm text-gray-500">{doctor.qualification}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1 mb-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{doctor.rating}</span>
                        <span className="text-sm text-gray-500">({doctor.reviews})</span>
                      </div>
                      <p className="text-lg font-semibold text-gray-900">₹{doctor.consultationFee}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center text-gray-600">
                      <BookOpen className="h-4 w-4 mr-2" />
                      {doctor.experience} experience
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      {doctor.location}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      {doctor.nextAvailable}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      {doctor.hospital}
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">{doctor.about}</p>

                  {/* Languages */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {doctor.languages.map((language, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {language}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    {doctor.consultationTypes.includes('Video') && (
                      <button className="flex-1 btn-primary flex items-center justify-center space-x-2 text-sm py-2">
                        <Video className="h-4 w-4" />
                        <span>Video Consult</span>
                      </button>
                    )}
                    {doctor.consultationTypes.includes('In-person') && (
                      <button className="flex-1 btn-secondary flex items-center justify-center space-x-2 text-sm py-2">
                        <Calendar className="h-4 w-4" />
                        <span>Book Appointment</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <button className="btn-secondary">
            Load More Doctors
          </button>
        </div>

        {/* Emergency Section */}
        <div className="mt-12 card bg-red-50 border-red-200">
          <div className="text-center">
            <div className="bg-red-100 text-red-600 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Phone className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-red-900 mb-2">Emergency?</h3>
            <p className="text-lg text-red-800 mb-4">
              For medical emergencies, call our 24/7 helpline
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+911234567890"
                className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 text-lg"
              >
                Call Emergency: +91 123-456-7890
              </a>
              <Link
                to="/emergency"
                className="bg-white text-red-600 border border-red-600 hover:bg-red-50 font-medium py-3 px-6 rounded-lg transition-colors duration-200 text-lg"
              >
                Emergency Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;