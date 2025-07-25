import React from 'react';
import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-white p-2 rounded-full">
                <Heart className="h-6 w-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold">HealthCare Community</h3>
                <p className="text-primary-200 text-sm">Your Health Companion</p>
              </div>
            </div>
            <p className="text-primary-100 text-lg leading-relaxed">
              India's largest healthcare community. Find solutions to all your health-related problems and connect with medical experts.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-200 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-primary-200 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-primary-200 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/community" className="text-primary-100 hover:text-white transition-colors text-lg">
                  Community
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="text-primary-100 hover:text-white transition-colors text-lg">
                  Doctors
                </Link>
              </li>
              <li>
                <Link to="/health-tips" className="text-primary-100 hover:text-white transition-colors text-lg">
                  Health Tips
                </Link>
              </li>
              <li>
                <a href="#" className="text-primary-100 hover:text-white transition-colors text-lg">
                  Emergency Services
                </a>
              </li>
            </ul>
          </div>

          {/* Health Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Health Categories</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-primary-100 hover:text-white transition-colors text-lg">
                  General Medicine
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-100 hover:text-white transition-colors text-lg">
                  Cardiology
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-100 hover:text-white transition-colors text-lg">
                  Diabetes
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-100 hover:text-white transition-colors text-lg">
                  Mental Health
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-200" />
                <span className="text-primary-100 text-lg">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-200" />
                <span className="text-primary-100 text-lg">help@healthcarecommunity.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-200 mt-1" />
                <span className="text-primary-100 text-lg">
                  New Delhi, India<br />
                  PIN: 110001
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-200 text-lg">
              © 2024 HealthCare Community by SquadMinds. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-primary-200 hover:text-white transition-colors text-lg">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-200 hover:text-white transition-colors text-lg">
                Terms & Conditions
              </a>
              <a href="#" className="text-primary-200 hover:text-white transition-colors text-lg">
                Help
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;