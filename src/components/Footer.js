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
                <h3 className="text-xl font-bold">SehatSaathi</h3>
                <p className="text-primary-200 text-sm">आपका स्वास्थ्य साथी</p>
              </div>
            </div>
            <p className="text-primary-100 text-lg leading-relaxed">
              भारत का सबसे बड़ा स्वास्थ्य समुदाय। यहाँ आपको मिलेगी सभी स्वास्थ्य संबंधी समस्याओं का समाधान।
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
            <h4 className="text-lg font-semibold">त्वरित लिंक</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/community" className="text-primary-100 hover:text-white transition-colors text-lg">
                  कम्युनिटी
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="text-primary-100 hover:text-white transition-colors text-lg">
                  डॉक्टर्स
                </Link>
              </li>
              <li>
                <Link to="/health-tips" className="text-primary-100 hover:text-white transition-colors text-lg">
                  स्वास्थ्य टिप्स
                </Link>
              </li>
              <li>
                <a href="#" className="text-primary-100 hover:text-white transition-colors text-lg">
                  आपातकालीन सेवा
                </a>
              </li>
            </ul>
          </div>

          {/* Health Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">स्वास्थ्य श्रेणियां</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-primary-100 hover:text-white transition-colors text-lg">
                  सामान्य चिकित्सा
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-100 hover:text-white transition-colors text-lg">
                  हृदय रोग
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-100 hover:text-white transition-colors text-lg">
                  मधुमेह
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-100 hover:text-white transition-colors text-lg">
                  मानसिक स्वास्थ्य
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">संपर्क करें</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-200" />
                <span className="text-primary-100 text-lg">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-200" />
                <span className="text-primary-100 text-lg">help@sehatsaathi.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-200 mt-1" />
                <span className="text-primary-100 text-lg">
                  नई दिल्ली, भारत<br />
                  पिन कोड: 110001
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-200 text-lg">
              © 2024 SehatSaathi by SquadMinds. सभी अधिकार सुरक्षित।
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-primary-200 hover:text-white transition-colors text-lg">
                गोपनीयता नीति
              </a>
              <a href="#" className="text-primary-200 hover:text-white transition-colors text-lg">
                नियम और शर्तें
              </a>
              <a href="#" className="text-primary-200 hover:text-white transition-colors text-lg">
                सहायता
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;